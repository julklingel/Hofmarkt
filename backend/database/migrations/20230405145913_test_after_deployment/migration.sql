/*
  Warnings:

  - You are about to drop the `_CategoryToOffer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToOffer" DROP CONSTRAINT "_CategoryToOffer_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToOffer" DROP CONSTRAINT "_CategoryToOffer_B_fkey";

-- AlterTable
ALTER TABLE "offers" ADD COLUMN     "categoryId" TEXT;

-- DropTable
DROP TABLE "_CategoryToOffer";

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
