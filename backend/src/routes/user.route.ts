import { loginSchema, registerSchema } from "@danishhansari/futureemail-common";
import { Hono } from "hono";
import {
  getJWTAndOption,
  hashPassword,
  verifyJWT,
  verifyPassword,
} from "../utils";
import { setCookie, deleteCookie, getCookie } from "hono/cookie";
import { db } from "../../db";
import { users } from "../../db/schema/user.schema";
import { eq } from "drizzle-orm";

const authRoute = new Hono()
  .get("/current-user", async (c) => {
    try {
      const authorizationToken = getCookie(c, "Authorization");
      if (!authorizationToken) {
        c.status(403);
        return c.json({ message: "Login first" });
      }

      const { id } = await verifyJWT(authorizationToken, Bun.env.SECRET!);
      if (!id) {
        deleteCookie(c, "Authorization");
        c.status(403);
        return c.json({ message: "Invalid token" });
      }

      const [userDetails] = await db
        .select()
        .from(users)
        .where(eq(users.id, id));
      if (!userDetails) {
        c.status(404);
        return c.json({ message: "User not found" });
      }

      return c.json({ ...userDetails, password: undefined });
    } catch (error) {
      console.log(error);
      deleteCookie(c, "Authorization");
      c.status(500);
      return c.json({ message: "Error fetching user", error });
    }
  })
  .get("/logout", async (c) => {
    deleteCookie(c, "Authorization");
    return c.json({ message: "Token removed" });
  })
  .post("/signup", async (c) => {
    try {
      const body = await c.req.json();
      const { success, error: schemaError } = registerSchema.safeParse(body);
      if (!success) {
        return c.json(
          {
            message: "Invalid input data",
            error: schemaError.errors,
          },
          { status: 411 }
        );
      }

      const hashedPassword = await hashPassword(body.password);
      const [response] = await db
        .insert(users)
        .values({
          name: body.name,
          email: body.email,
          password: hashedPassword,
        })
        .returning();
      const { id, email } = response;
      const { jwt, options } = await getJWTAndOption(
        { id, email },
        Bun.env.SECRET!
      );
      setCookie(c, "Authorization", jwt, { ...options });
      return c.json({ ...response, password: undefined });
    } catch (error) {
      console.log(error);
      c.status(500);
      return c.json({ message: "Error while signing up", error });
    }
  })
  .post("/signin", async (c) => {
    try {
      const body = await c.req.json();
      const { success, error: schemaError } = loginSchema.safeParse(body);
      if (!success) {
        return c.json(
          {
            message: "Invalid input data",
            error: schemaError.errors,
          },
          { status: 411 }
        );
      }

      const [user] = await db
        .select()
        .from(users)
        .where(eq(users.email, body.email));

      if (!user) {
        c.status(403);
        return c.json({ message: "User does not exist" });
      }

      const isPasswordValid = await verifyPassword(
        user.password,
        body.password
      );
      if (!isPasswordValid) {
        c.status(403);
        return c.json({ message: "Password is incorrect" });
      }

      const { jwt, options } = await getJWTAndOption(
        { id: user.id, email: user.email },
        Bun.env.SECRET!
      );
      setCookie(c, "Authorization", jwt, { ...options });
      c.status(200);
      return c.json({ ...user, password: undefined });
    } catch (error: unknown) {
      c.status(500);
      return c.json({ message: "Error while signing in", error });
    }
  });

export default authRoute;
