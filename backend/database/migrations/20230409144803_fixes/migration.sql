/*
  Warnings:

  - You are about to drop the column `offerId` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `supplierId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `companyLogoId` on the `suppliers` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `suppliers` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `profileImageId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `offerId` on the `watchlists` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[supplierId]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[offerId]` on the table `images` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[supplierId]` on the table `offers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[categoryId]` on the table `offers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[watchlistId]` on the table `offers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cartId]` on the table `offers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[offerId]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `reviews` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[supplierId]` on the table `reviews` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `watchlists` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "carts" DROP CONSTRAINT "carts_offerId_fkey";

-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_imageId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_userId_fkey";

-- DropForeignKey
ALTER TABLE "suppliers" DROP CONSTRAINT "suppliers_companyLogoId_fkey";

-- DropForeignKey
ALTER TABLE "suppliers" DROP CONSTRAINT "suppliers_imageId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_imageId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_profileImageId_fkey";

-- DropForeignKey
ALTER TABLE "watchlists" DROP CONSTRAINT "watchlists_offerId_fkey";

-- DropIndex
DROP INDEX "categories_imageId_key";

-- DropIndex
DROP INDEX "suppliers_companyLogoId_key";

-- DropIndex
DROP INDEX "suppliers_imageId_key";

-- DropIndex
DROP INDEX "users_imageId_key";

-- DropIndex
DROP INDEX "users_profileImageId_key";

-- AlterTable
ALTER TABLE "carts" DROP COLUMN "offerId";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "imageId";

-- AlterTable
ALTER TABLE "images" DROP COLUMN "supplierId",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "offers" ADD COLUMN     "cartId" TEXT,
ADD COLUMN     "watchlistId" TEXT;

-- AlterTable
ALTER TABLE "reviews" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "supplierId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "suppliers" DROP COLUMN "companyLogoId",
DROP COLUMN "imageId";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "imageId",
DROP COLUMN "profileImageId";

-- AlterTable
ALTER TABLE "watchlists" DROP COLUMN "offerId";

-- CreateIndex
CREATE UNIQUE INDEX "categories_supplierId_key" ON "categories"("supplierId");

-- CreateIndex
CREATE UNIQUE INDEX "images_offerId_key" ON "images"("offerId");

-- CreateIndex
CREATE UNIQUE INDEX "offers_supplierId_key" ON "offers"("supplierId");

-- CreateIndex
CREATE UNIQUE INDEX "offers_categoryId_key" ON "offers"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "offers_watchlistId_key" ON "offers"("watchlistId");

-- CreateIndex
CREATE UNIQUE INDEX "offers_cartId_key" ON "offers"("cartId");

-- CreateIndex
CREATE UNIQUE INDEX "orders_userId_key" ON "orders"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "orders_offerId_key" ON "orders"("offerId");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_userId_key" ON "reviews"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_supplierId_key" ON "reviews"("supplierId");

-- CreateIndex
CREATE UNIQUE INDEX "watchlists_userId_key" ON "watchlists"("userId");

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_profileImageId_fkey" FOREIGN KEY ("profileImageId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_supplierCompanyLogoId_fkey" FOREIGN KEY ("supplierCompanyLogoId") REFERENCES "suppliers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_supplierImagesId_fkey" FOREIGN KEY ("supplierImagesId") REFERENCES "suppliers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_watchlistId_fkey" FOREIGN KEY ("watchlistId") REFERENCES "watchlists"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
