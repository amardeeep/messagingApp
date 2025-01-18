/*
  Warnings:

  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MessageFrom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MessageTo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_messageFromId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_messageToId_fkey";

-- DropForeignKey
ALTER TABLE "MessageFrom" DROP CONSTRAINT "MessageFrom_fromUser_id_fkey";

-- DropForeignKey
ALTER TABLE "MessageTo" DROP CONSTRAINT "MessageTo_toUser_id_fkey";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "MessageFrom";

-- DropTable
DROP TABLE "MessageTo";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "user_id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Messages" (
    "message_id" SERIAL NOT NULL,
    "message_text" TEXT NOT NULL,
    "author_user_id" INTEGER NOT NULL,
    "recipient_user_id" INTEGER NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("message_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_name_key" ON "Users"("user_name");

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_author_user_id_fkey" FOREIGN KEY ("author_user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_recipient_user_id_fkey" FOREIGN KEY ("recipient_user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
