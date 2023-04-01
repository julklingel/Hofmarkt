/*
  Warnings:

  - You are about to drop the column `imageId` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `carts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_imageId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "imageId";

-- CreateIndex
CREATE UNIQUE INDEX "carts_userId_key" ON "carts"("userId");
