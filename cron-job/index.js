import cron from "node-cron";
import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";

const prisma = new PrismaClient();

cron.schedule("*/5 * * * * *", async () => {
  const today = new Date();
  const todayDateFormated = format(today, "dd/MM/yyyy");
  console.log(todayDateFormated);
  const emails = await prisma.email.findMany({
    where: { date: todayDateFormated },
  });
});
