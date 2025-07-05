/*
  Warnings:

  - The primary key for the `ticket` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ticket_id` on the `ticket` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(20)`.

*/
-- DropForeignKey
ALTER TABLE `transaction_detail` DROP FOREIGN KEY `transaction_detail_ibfk_2`;

-- AlterTable
ALTER TABLE `ticket` DROP PRIMARY KEY,
    MODIFY `ticket_id` CHAR(20) NOT NULL,
    ADD PRIMARY KEY (`ticket_id`);

-- AlterTable
ALTER TABLE `transaction_detail` MODIFY `ticket_id` CHAR(20) NULL;

-- AddForeignKey
ALTER TABLE `transaction_detail` ADD CONSTRAINT `transaction_detail_ibfk_2` FOREIGN KEY (`ticket_id`) REFERENCES `ticket`(`ticket_id`) ON DELETE CASCADE ON UPDATE NO ACTION;
