/*
  Warnings:

  - Added the required column `supplierName` to the `offers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "offers" ADD COLUMN     "supplierName" TEXT NOT NULL;
