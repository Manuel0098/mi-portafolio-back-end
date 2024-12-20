/*
  Warnings:

  - You are about to drop the column `project_image` on the `CreateProject` table. All the data in the column will be lost.
  - Added the required column `project_file` to the `CreateProject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CreateProject" DROP COLUMN "project_image",
ADD COLUMN     "project_file" TEXT NOT NULL;
