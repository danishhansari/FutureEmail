-- CreateTable
CREATE TABLE "Email" (
    "id" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Email" ADD CONSTRAINT "Email_postId_fkey" FOREIGN KEY ("postId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
