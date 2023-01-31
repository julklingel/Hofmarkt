/*
  Warnings:

  - A unique constraint covering the columns `[companyEmail]` on the table `suppliers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "suppliers_companyEmail_key" ON "suppliers"("companyEmail");
