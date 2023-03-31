/*
  Warnings:

  - You are about to drop the column `img` on the `offers` table. All the data in the column will be lost.
  - You are about to drop the column `companyLogo` on the `suppliers` table. All the data in the column will be lost.
  - You are about to drop the `supplier_images` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[imageId]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[companyLogoId]` on the table `suppliers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imageId]` on the table `suppliers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileImageId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "enumImageType" AS ENUM ('PROFILE', 'FACILTY', 'OFFER', 'CATEGORY');

-- DropForeignKey
ALTER TABLE "supplier_images" DROP CONSTRAINT "supplier_images_supplierId_fkey";

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "imageId" TEXT;

-- AlterTable
ALTER TABLE "offers" DROP COLUMN "img";

-- AlterTable
ALTER TABLE "suppliers" DROP COLUMN "companyLogo",
ADD COLUMN     "companyLogoId" TEXT,
ADD COLUMN     "imageId" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "imageId" TEXT,
ADD COLUMN     "profileImageId" TEXT;

-- DropTable
DROP TABLE "supplier_images";

-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "enumImageType" NOT NULL,
    "userId" TEXT,
    "categoryId" TEXT,
    "supplierCompanyLogoId" TEXT,
    "supplierImagesId" TEXT,
    "supplierId" TEXT,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OfferImages" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "images_id_key" ON "images"("id");

-- CreateIndex
CREATE UNIQUE INDEX "images_userId_key" ON "images"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "images_categoryId_key" ON "images"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "images_supplierCompanyLogoId_key" ON "images"("supplierCompanyLogoId");

-- CreateIndex
CREATE UNIQUE INDEX "images_supplierImagesId_key" ON "images"("supplierImagesId");

-- CreateIndex
CREATE UNIQUE INDEX "_OfferImages_AB_unique" ON "_OfferImages"("A", "B");

-- CreateIndex
CREATE INDEX "_OfferImages_B_index" ON "_OfferImages"("B");

-- CreateIndex
CREATE UNIQUE INDEX "categories_imageId_key" ON "categories"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_companyLogoId_key" ON "suppliers"("companyLogoId");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_imageId_key" ON "suppliers"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "users_profileImageId_key" ON "users"("profileImageId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suppliers" ADD CONSTRAINT "suppliers_companyLogoId_fkey" FOREIGN KEY ("companyLogoId") REFERENCES "images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suppliers" ADD CONSTRAINT "suppliers_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OfferImages" ADD CONSTRAINT "_OfferImages_A_fkey" FOREIGN KEY ("A") REFERENCES "images"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OfferImages" ADD CONSTRAINT "_OfferImages_B_fkey" FOREIGN KEY ("B") REFERENCES "offers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
