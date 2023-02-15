/*
  Warnings:

  - You are about to drop the `CategoriesOnOffer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CategoriesOnSupplier` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `offers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `suppliers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnOffer" DROP CONSTRAINT "CategoriesOnOffer_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnOffer" DROP CONSTRAINT "CategoriesOnOffer_offerId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnSupplier" DROP CONSTRAINT "CategoriesOnSupplier_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnSupplier" DROP CONSTRAINT "CategoriesOnSupplier_supplierId_fkey";

-- AlterTable
ALTER TABLE "offers" ADD COLUMN     "categoryId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "suppliers" ADD COLUMN     "categoryId" TEXT NOT NULL;

-- DropTable
DROP TABLE "CategoriesOnOffer";

-- DropTable
DROP TABLE "CategoriesOnSupplier";

-- AddForeignKey
ALTER TABLE "suppliers" ADD CONSTRAINT "suppliers_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
