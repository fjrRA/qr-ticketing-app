/*
  Warnings:

  - You are about to drop the column `used_at` on the `transaction_detail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `transaction_detail` DROP COLUMN `used_at`,
    ADD COLUMN `isUsed` ENUM('UNVERIFIED', 'VERIFIED') NOT NULL DEFAULT 'UNVERIFIED';
