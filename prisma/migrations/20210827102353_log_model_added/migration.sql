/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "systemStatus" VARCHAR(100) NOT NULL,
    "paymentSystemName" VARCHAR(250) NOT NULL,
    "paymentSystemStatus" VARCHAR(100) NOT NULL,
    "transactionId" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "env" VARCHAR(10) NOT NULL,
    "metadata" TEXT,
    "amount" DOUBLE PRECISION,
    "userId" INTEGER,
    "currency" VARCHAR(10),
    "merchantId" INTEGER,

    PRIMARY KEY ("id")
);
