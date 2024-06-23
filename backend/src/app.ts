import { Hono } from "hono";
import { logger } from "hono/logger";
import { authRoute } from "./routes/auth";
import { emailRoute } from "./routes/email";

const app = new Hono();
app.use("*", logger());

app.basePath("/api").route("/auth", authRoute).route("/email", emailRoute);

export { app };
