/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `CreateUser` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CreateUser_email_key" ON "CreateUser"("email");
