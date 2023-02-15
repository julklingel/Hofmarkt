/*
  Warnings:

  - You are about to drop the column `category` on the `offers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `suppliers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyBio` to the `suppliers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyImage` to the `suppliers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `suppliers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "offers" DROP COLUMN "category";

-- AlterTable
ALTER TABLE "suppliers" ADD COLUMN     "companyBio" TEXT NOT NULL,
ADD COLUMN     "companyImage" TEXT NOT NULL,
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriesOnSupplier" (
    "supplierId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoriesOnSupplier_pkey" PRIMARY KEY ("supplierId","categoryId")
);

-- CreateTable
CREATE TABLE "CategoriesOnOffer" (
    "offerId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoriesOnOffer_pkey" PRIMARY KEY ("offerId","categoryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_id_key" ON "categories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_slug_key" ON "suppliers"("slug");

-- AddForeignKey
ALTER TABLE "CategoriesOnSupplier" ADD CONSTRAINT "CategoriesOnSupplier_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnSupplier" ADD CONSTRAINT "CategoriesOnSupplier_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnOffer" ADD CONSTRAINT "CategoriesOnOffer_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "offers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnOffer" ADD CONSTRAINT "CategoriesOnOffer_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
