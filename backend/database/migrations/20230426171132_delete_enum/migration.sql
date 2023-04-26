/*
  Warnings:

  - Changed the type of `ownerType` on the `images` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "images" DROP COLUMN "ownerType",
ADD COLUMN     "ownerType" "enumRole" NOT NULL;

-- DropEnum
DROP TYPE "enumOwnerType";
