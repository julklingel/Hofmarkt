/*
  Warnings:

  - Added the required column `salt` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "salt" TEXT NOT NULL;
