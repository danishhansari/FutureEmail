import { Hono } from "hono";
import { logger } from "hono/logger";
import userRoute from "./routes/user.route";
import emailRoute from "./routes/email.route";

const app = new Hono().get("/", async (c) => {
  return c.json({ msg: "Hello dear" });
});
app.use("*", logger());
app.basePath("/api").route("/auth", userRoute).route("/email", emailRoute);

export default app;
