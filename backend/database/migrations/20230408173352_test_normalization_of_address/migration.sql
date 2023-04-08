/*
  Warnings:

  - You are about to drop the column `supplierId` on the `account_addresses` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `account_addresses` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[accountId]` on the table `account_addresses` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "account_addresses" DROP CONSTRAINT "account_addresses_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "account_addresses" DROP CONSTRAINT "account_addresses_userId_fkey";

-- DropIndex
DROP INDEX "account_addresses_supplierId_key";

-- DropIndex
DROP INDEX "account_addresses_userId_key";

-- AlterTable
ALTER TABLE "account_addresses" DROP COLUMN "supplierId",
DROP COLUMN "userId",
ADD COLUMN     "accountId" TEXT;

-- AlterTable
ALTER TABLE "suppliers" ADD COLUMN     "accountAddressId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "account_addresses_accountId_key" ON "account_addresses"("accountId");

-- AddForeignKey
ALTER TABLE "suppliers" ADD CONSTRAINT "suppliers_accountAddressId_fkey" FOREIGN KEY ("accountAddressId") REFERENCES "account_addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_addresses" ADD CONSTRAINT "account_addresses_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
