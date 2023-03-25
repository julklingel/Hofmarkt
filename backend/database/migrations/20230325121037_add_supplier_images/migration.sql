/*
  Warnings:

  - You are about to drop the column `companyImage` on the `suppliers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "suppliers" DROP COLUMN "companyImage";

-- CreateTable
CREATE TABLE "supplier_images" (
    "id" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "supplier_images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "supplier_images_id_key" ON "supplier_images"("id");

-- AddForeignKey
ALTER TABLE "supplier_images" ADD CONSTRAINT "supplier_images_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
