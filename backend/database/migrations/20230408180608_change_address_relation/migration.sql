-- DropForeignKey
ALTER TABLE "account_addresses" DROP CONSTRAINT "account_addresses_accountId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "accountAddressId" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_accountAddressId_fkey" FOREIGN KEY ("accountAddressId") REFERENCES "account_addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_addresses" ADD CONSTRAINT "account_addresses_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
