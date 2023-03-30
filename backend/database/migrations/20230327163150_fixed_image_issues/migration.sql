/*
  Warnings:

  - You are about to drop the `_OfferImages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_OfferImages" DROP CONSTRAINT "_OfferImages_A_fkey";

-- DropForeignKey
ALTER TABLE "_OfferImages" DROP CONSTRAINT "_OfferImages_B_fkey";

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "supplierId" TEXT;

-- AlterTable
ALTER TABLE "images" ADD COLUMN     "offerId" TEXT;

-- DropTable
DROP TABLE "_OfferImages";

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "offers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
