import { Hono, Context } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { authRoute } from "./routes/auth";
import { emailRoute } from "./routes/email";
import { deleteCookie, getCookie } from "hono/cookie";
import { verifyJWT } from "./utils";

const app = new Hono();
app.use("*", cors(), logger());

app.get("/", (c) => {
  return c.text("Hello World!");
});

app.get("/me", async (c: Context, next) => {
  try {
    const authorizationToken = getCookie(c, "Authorization");
    console.log(authorizationToken);
    if (!authorizationToken) {
      c.status(403);
      return c.json({ message: "Please login first" });
    }
    const verify = await verifyJWT(
      authorizationToken,
      "aNKVaj0BhapmuvfwHf1KW0ZJ9yQ/mlFcMLQoS6SzRtA="
    );
    console.log(verify);
    c.set("userId", verify.id);
    return c.json({ message: "Authorized" });
  } catch (error: any) {
    deleteCookie(c, "Authorization");
    c.status(403);
    return c.json({ message: error.message });
  }
});

app.basePath("/api").route("/auth", authRoute).route("/email", emailRoute);

export default app;
