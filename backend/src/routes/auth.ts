import { Hono } from "hono";
import prisma from "../db";

export const authRoute = new Hono()
  .post("/signup", async (c) => {
    const body = await c.req.json();
    const response = await prisma.user.create({
      data: body,
    });
    return c.json(response);
  })
  .post("/signin", async (c) => {
    const body = await c.req.json();
    const response = await prisma.user.findFirst({
      where: { email: body.email, password: body.password },
    });
    return c.json(response);
  });
