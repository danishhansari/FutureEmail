import { loginSchema, registerSchema } from "@danishhansari/futureemail-common";
import { PrismaClient, Prisma } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import {
  getJWTAndOption,
  hashPassword,
  verifyJWT,
  verifyPassword,
} from "../utils";
import { setCookie, deleteCookie, getCookie } from "hono/cookie";

export const authRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET: string;
  };
}>()
  .get("/current-user", async (c) => {
    try {
      const authorizationToken = getCookie(c, "Authorization");
      console.log(authorizationToken);
      if (!authorizationToken) {
        c.status(403);
        return c.json({ message: "Login first" });
      }
      const { id } = await verifyJWT(authorizationToken, c.env.SECRET);
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
      const userDetails = await prisma.user.findFirst({
        where: { id },
      });
      return c.json({ ...userDetails, password: undefined });
    } catch (error) {
      console.log(error);
      c.status(500);
      return c.json({ error });
    }
  })
  .get("/logout", async (c) => {
    deleteCookie(c, "Authorization");
    return c.json({ message: "token remove" });
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
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
      const hashedPassword = await hashPassword(body.password);
      const response = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          password: hashedPassword,
        },
      });
      const { jwt, options } = await getJWTAndOption(
        { id: response.id, email: response.email },
        c.env.SECRET
      );
      setCookie(c, "Authorization", jwt, { ...options });
      return c.json({ ...response, password: undefined });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        c.status(403);
        return c.json({ message: "User is already exist" });
      }
      c.status(500);
      return c.json({ message: "Error while signing up", error });
    }
  })
  .post("/signin", async (c) => {
    try {
      const body = await c.req.json();
      console.log(body);
      const { success, error: schemaError } = loginSchema.safeParse(body);
      if (!success) {
        c.status(411);
        return c.json({
          message: "Invalid input data",
          error: schemaError.errors,
        });
      }
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
      const response = await prisma.user.findFirst({
        where: { email: body.email },
      });
      console.log(response);
      if (!response) {
        c.status(403);
        return c.json({ message: "User is not exist" });
      }
      const verify = await verifyPassword(response.password, body.password);
      if (!verify) {
        c.status(403);
        return c.json({ message: "Password is incorrect" });
      }

      const { jwt, options } = await getJWTAndOption(
        { id: response.id, email: response.email },
        c.env.SECRET
      );
      setCookie(c, "Authorization", jwt, { ...options });
      c.status(200);
      return c.json({ ...response, password: undefined });
    } catch (error: unknown) {
      c.status(411);
      return c.json({ message: "Error while signing up", error });
    }
  });
