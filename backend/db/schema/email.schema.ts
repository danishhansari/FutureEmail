import { pgTable, varchar, uuid, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user.schema";

export const emails = pgTable("emails", {
  postId: uuid("post_id").notNull().primaryKey(),
  body: text("body"),
  email: varchar("email", { length: 255 }),
  date: varchar("date", { length: 255 }),
});

export const emailRelations = relations(emails, ({ one }) => ({
  owner: one(users, {
    fields: [emails.postId],
    references: [users.id],
  }),
}));
