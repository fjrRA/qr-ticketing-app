/*
  Warnings:

  - You are about to drop the column `isUsed` on the `transaction_detail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `transaction_detail` DROP COLUMN `isUsed`,
    ADD COLUMN `is_used` ENUM('unverified', 'verified') NOT NULL DEFAULT 'unverified';
