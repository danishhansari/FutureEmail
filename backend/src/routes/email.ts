import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono, Context } from "hono";
import { deleteCookie, getCookie } from "hono/cookie";
import { verifyJWT } from "../utils";
import { format } from "date-fns";

export const emailRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET: string;
  };
}>()
  .use("/*", async (c: Context, next) => {
    try {
      const authorizationToken = getCookie(c, "Authorization");
      console.log(authorizationToken);
      if (!authorizationToken) {
        c.status(403);
        return c.json({ message: "Please login first" });
      }
      const verify = await verifyJWT(authorizationToken, c.env.SECRET);
      console.log(verify);
      c.set("userId", verify.id);
      c.set("userEmail", verify.email);
      await next();
    } catch (error: any) {
      deleteCookie(c, "Authorization");
      c.status(403);
      return c.json({ message: error.message });
    }
  })
  .post("/post", async (c: Context) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    console.log(body);
    const userId = c.get("userId");
    const email = c.get("userEmail");
    const formatedDate = format(body.date, "dd/MM/yyyy");
    const response = await prisma.email.create({
      data: {
        body: body.email,
        email: email,
        postId: userId,
        date: formatedDate,
      },
    });
    return c.json(response);
  });
