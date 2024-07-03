import cron from "node-cron";
import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";
import nodemailer from "nodemailer";
import { emailConfig } from "./config.js";

console.log(process.env.SENDER_EMAIL);
console.log(process.env.SENDER_PASSWORD);

const transporter = nodemailer.createTransport(emailConfig);

const sendEmail = async (mailOptions) => {
  try {
    const res = await transporter.sendMail(mailOptions);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// sendEmail(mailOptions);
const prisma = new PrismaClient();
cron.schedule("*/5 * * * * *", async () => {
  const today = new Date();
  const todayDateFormated = format(today, "dd/MM/yyyy");
  console.log(todayDateFormated);
  const emails = await prisma.email.findMany({
    where: { date: todayDateFormated },
  });
  sendConfiguration(emails);
});

const sendConfiguration = (email) => {
  console.log(email);
  const mailOptions = {
    from: {
      name: "Danish",
      address: process.env.SENDER_EMAIL,
    },
    to: ["dan71ish@gmail.com"],
    subject: "Nodemailer",
    text: "email",
    html: "<b>Hello</b>",
  };
};
