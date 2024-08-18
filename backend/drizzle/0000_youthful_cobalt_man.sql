CREATE TABLE IF NOT EXISTS "emails" (
	"post_id" uuid PRIMARY KEY NOT NULL,
	"body" text,
	"email" varchar(255),
	"date" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
