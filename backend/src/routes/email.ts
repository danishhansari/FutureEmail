import { Hono } from "hono";
import prisma from "../db";

export const emailRoute = new Hono().post("/post", async (c) => {
  const body = await c.req.json();
  const response = await prisma.email.create({
    data: body,
  });
  return c.json(response);
});
