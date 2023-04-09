/*
  Warnings:

  - Made the column `accountId` on table `account_addresses` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "account_addresses" DROP CONSTRAINT "account_addresses_accountId_fkey";

-- AlterTable
ALTER TABLE "account_addresses" ALTER COLUMN "accountId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "account_addresses" ADD CONSTRAINT "account_addresses_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
