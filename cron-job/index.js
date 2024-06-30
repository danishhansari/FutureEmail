import cron from "node-cron";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

cron.schedule("*/10 * * * * *", async () => {
  console.log("I ran successfully every 10 seconds");
  const today = new Date(); // Current date and time
  const emails = await prisma.email.findMany({});
  console.log(emails);
});
