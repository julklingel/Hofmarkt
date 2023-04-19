/*
  Warnings:

  - You are about to drop the column `categoryId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `offerId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `profileImageId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `supplierCompanyLogoId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `supplierImagesId` on the `images` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ownerId,ownerType]` on the table `images` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownerId` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerType` to the `images` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "enumOwnerType" AS ENUM ('USER', 'SUPPLIER', 'OFFER', 'CATEGORY');

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_offerId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_profileImageId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_supplierCompanyLogoId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_supplierImagesId_fkey";

-- DropIndex
DROP INDEX "images_categoryId_key";

-- DropIndex
DROP INDEX "images_offerId_key";

-- DropIndex
DROP INDEX "images_profileImageId_key";

-- DropIndex
DROP INDEX "images_supplierCompanyLogoId_key";

-- DropIndex
DROP INDEX "images_supplierImagesId_key";

-- AlterTable
ALTER TABLE "images" DROP COLUMN "categoryId",
DROP COLUMN "offerId",
DROP COLUMN "profileImageId",
DROP COLUMN "supplierCompanyLogoId",
DROP COLUMN "supplierImagesId",
ADD COLUMN     "ownerId" TEXT NOT NULL,
ADD COLUMN     "ownerType" "enumOwnerType" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "images_ownerId_ownerType_key" ON "images"("ownerId", "ownerType");
