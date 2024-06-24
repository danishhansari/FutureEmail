import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

export const emailRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>().post("/post", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const response = await prisma.email.create({
    data: body,
  });
  return c.json(response);
});
