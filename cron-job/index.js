import cron from "node-cron";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//  This cron trigger will run everyday to check there is email date today or if yes then he will send and remove the db entry
cron.schedule("* * * * *", async () => {
  console.log("I ran successfully at every minutes");
});
