/*
  Warnings:

  - You are about to drop the `MessageRecieve` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[messageFromId]` on the table `Message` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[messageToId]` on the table `Message` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `messageFromId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `messageToId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "messageFromId" INTEGER NOT NULL,
ADD COLUMN     "messageToId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "MessageRecieve";

-- CreateTable
CREATE TABLE "MessageFrom" (
    "id" SERIAL NOT NULL,
    "fromUser_id" INTEGER NOT NULL,

    CONSTRAINT "MessageFrom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageTo" (
    "id" SERIAL NOT NULL,
    "toUser_id" INTEGER NOT NULL,

    CONSTRAINT "MessageTo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Message_messageFromId_key" ON "Message"("messageFromId");

-- CreateIndex
CREATE UNIQUE INDEX "Message_messageToId_key" ON "Message"("messageToId");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_messageFromId_fkey" FOREIGN KEY ("messageFromId") REFERENCES "MessageFrom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_messageToId_fkey" FOREIGN KEY ("messageToId") REFERENCES "MessageTo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageFrom" ADD CONSTRAINT "MessageFrom_fromUser_id_fkey" FOREIGN KEY ("fromUser_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageTo" ADD CONSTRAINT "MessageTo_toUser_id_fkey" FOREIGN KEY ("toUser_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
