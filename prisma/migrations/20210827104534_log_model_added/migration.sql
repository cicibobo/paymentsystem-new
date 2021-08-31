/*
  Warnings:

  - The `metadata` column on the `Log` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `amount` on the `Log` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(20,6)`.

*/
-- AlterTable
ALTER TABLE "Log" DROP COLUMN "metadata",
ADD COLUMN     "metadata" JSONB,
ALTER COLUMN "amount" SET DATA TYPE DECIMAL(20,6);
