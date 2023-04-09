/*
  Warnings:

  - You are about to drop the column `accountAddressId` on the `suppliers` table. All the data in the column will be lost.
  - You are about to drop the column `accountAddressId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "suppliers" DROP CONSTRAINT "suppliers_accountAddressId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_accountAddressId_fkey";

-- AlterTable
ALTER TABLE "suppliers" DROP COLUMN "accountAddressId";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "accountAddressId";
