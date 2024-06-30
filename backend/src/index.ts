import { Hono, Context } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { authRoute } from "./routes/auth";
import { emailRoute } from "./routes/email";

const app = new Hono();
app.use("*", cors());
app.use("*", logger());

app.get("/", (c) => {
  return c.text("Hello World!");
});

app.basePath("/api").route("/auth", authRoute).route("/email", emailRoute);

export default app;
