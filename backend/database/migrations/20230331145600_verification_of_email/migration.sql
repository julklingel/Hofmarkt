/*
  Warnings:

  - You are about to drop the `ResetPassword` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "ResetPassword";

-- CreateTable
CREATE TABLE "resetPassword" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resetPassword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emailVerification" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "emailVerification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "resetPassword_id_key" ON "resetPassword"("id");

-- CreateIndex
CREATE UNIQUE INDEX "resetPassword_email_key" ON "resetPassword"("email");

-- CreateIndex
CREATE UNIQUE INDEX "emailVerification_id_key" ON "emailVerification"("id");

-- CreateIndex
CREATE UNIQUE INDEX "emailVerification_email_key" ON "emailVerification"("email");
