/*
  Warnings:

  - The values [FACILTY] on the enum `enumImageType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "enumImageType_new" AS ENUM ('PROFILE', 'FACILITY', 'OFFER', 'CATEGORY');
ALTER TABLE "images" ALTER COLUMN "type" TYPE "enumImageType_new" USING ("type"::text::"enumImageType_new");
ALTER TYPE "enumImageType" RENAME TO "enumImageType_old";
ALTER TYPE "enumImageType_new" RENAME TO "enumImageType";
DROP TYPE "enumImageType_old";
COMMIT;
