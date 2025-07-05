/*
  Warnings:

  - The primary key for the `reviews` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `reviews` DROP PRIMARY KEY,
    MODIFY `reviews_id` VARCHAR(50) NOT NULL,
    ADD PRIMARY KEY (`reviews_id`);
