import { Hono, Context } from "hono";
import { deleteCookie, getCookie } from "hono/cookie";
import { verifyJWT } from "../utils";
import { format } from "date-fns";
import { db } from "../../db";
import { emails } from "../../db/schema/email.schema";

const emailRoute = new Hono()
  .use("/*", async (c: Context, next) => {
    try {
      const authorizationToken = getCookie(c, "Authorization");
      console.log(authorizationToken);
      if (!authorizationToken) {
        c.status(403);
        return c.json({ message: "Please login first" });
      }
      const verify = await verifyJWT(authorizationToken, Bun.env.SECRET!);
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
    const body = await c.req.json();
    console.log(body);
    const userId = c.get("userId");
    const email = c.get("userEmail");
    const formatedDate = format(body.date, "dd/MM/yyyy");
    await db.insert(emails).values({
      body: body.body,
      email: email,
      postId: userId,
      date: formatedDate,
    });
    return c.json({ message: "Will you see you in future" });
  });

export default emailRoute;
