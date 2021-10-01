/*
  Warnings:

  - You are about to alter the column `amount` on the `Log` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,6)`.

*/
-- AlterTable
ALTER TABLE "Log" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(65,6);
