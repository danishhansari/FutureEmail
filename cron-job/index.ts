import { db } from "./db";
import { emails } from "./db/schema/email.schema";
import { format } from "date-fns";
import cron from "node-cron";
import nodemailer from "nodemailer";
import { emailConfig } from "./config";
import { eq } from "drizzle-orm";

const transporter = nodemailer.createTransport(emailConfig);

interface EmailType {
  date: string;
  postId: string;
  body: string;
  email: string;
}

interface MailOptionsType {
  from: {
    name: string;
    address: string;
  };
  to: string[];
  subject: string;
  text: string;
}

const oneDay = "0 0 * * *";
const everyFiveSecond = "*/5 * * * * *";
cron.schedule(everyFiveSecond, async () => {
  try {
    const today = new Date();
    const todayDateFormatted = format(today, "dd/MM/yyyy");
    console.log(`Processing emails for ${todayDateFormatted}`);

    const emailsToSend = await db
      .select()
      .from(emails)
      .where(eq(emails.date, todayDateFormatted));

    console.log(`Found ${emailsToSend.length} emails to send`);

    for (const email of emailsToSend) {
      console.log(email);
      // @ts-ignore
      await sendConfiguration(email);
    }
  } catch (error) {
    console.error("Error in cron job:", error);
  }
});

const sendConfiguration = async (email: EmailType) => {
  const mailOptions: MailOptionsType = {
    from: {
      name: "Danish",
      address: process.env.SENDER_EMAIL as string,
    },
    to: [email.email as string],
    subject: "Your Future Email",
    text: email.body as string,
  };

  await sendEmail(mailOptions, email.postId);
};

const sendEmail = async (mailOptions: MailOptionsType, id: string) => {
  try {
    const res = await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully: ${res.messageId}`);

    await db.delete(emails).where(eq(emails.postId, id));
    console.log(`Email record deleted: ${id}`);
  } catch (error) {
    console.error(`Error sending email ${id}:`, error);
  }
};
