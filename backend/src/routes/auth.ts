import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

export const authRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>()
  .post("/signup", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const response = await prisma.user.create({
      data: body,
    });
    return c.json(response);
  })
  .post("/signin", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const response = await prisma.user.findFirst({
      where: { email: body.email, password: body.password },
    });
    return c.json(response);
  });
