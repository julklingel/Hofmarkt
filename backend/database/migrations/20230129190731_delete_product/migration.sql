/*
  Warnings:

  - You are about to drop the column `productId` on the `offers` table. All the data in the column will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amount` to the `offers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `offers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `offers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `offers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "offers" DROP CONSTRAINT "offers_productId_fkey";

-- AlterTable
ALTER TABLE "offers" DROP COLUMN "productId",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "img" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;

-- DropTable
DROP TABLE "products";
