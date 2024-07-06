import cron from "node-cron";
import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";
import nodemailer from "nodemailer";
import { emailConfig } from "./config.js";

const transporter = nodemailer.createTransport(emailConfig);
const prisma = new PrismaClient();

cron.schedule("0 0 * * *", async () => {
  const today = new Date();
  const todayDateFormated = format(today, "dd/MM/yyyy");
  console.log(todayDateFormated);
  const emails = await prisma.email.findMany({
    where: { date: todayDateFormated },
  });
  emails.map((email) => sendConfiguration(email));
  console.log(emails);
});

const sendConfiguration = (email) => {
  console.log(email);
  const mailOptions = {
    from: {
      name: "Danish",
      address: process.env.SENDER_EMAIL,
    },
    to: [email.email],
    subject: "Your Future Email",
    text: email.body,
  };
  sendEmail(mailOptions, email.id);
};

const sendEmail = async (mailOptions, id) => {
  try {
    const res = await transporter.sendMail(mailOptions);
    const email = await prisma.email.delete({ where: { id } });
    console.log(email);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
