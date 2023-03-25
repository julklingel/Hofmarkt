/*
  Warnings:

  - You are about to drop the `supplier_images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "supplier_images" DROP CONSTRAINT "supplier_images_supplierId_fkey";

-- AlterTable
ALTER TABLE "suppliers" ADD COLUMN     "companyImage" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "supplier_images";
