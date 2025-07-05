/*
  Warnings:

  - You are about to drop the column `expiration_time` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `method_id` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `service_fee` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `total_payment` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the `payment_method` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payment_provider` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `payment_type` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Made the column `transaction_id` on table `payment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `payment_status` on table `payment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `payment_time` on table `payment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `response_data` on table `payment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `facility_tourism` DROP FOREIGN KEY `facility_tourism_ibfk_1`;

-- DropForeignKey
ALTER TABLE `facility_tourism` DROP FOREIGN KEY `facility_tourism_ibfk_2`;

-- DropForeignKey
ALTER TABLE `gallery` DROP FOREIGN KEY `gallery_ibfk_1`;

-- DropForeignKey
ALTER TABLE `operating_hours` DROP FOREIGN KEY `operating_hours_ibfk_1`;

-- DropForeignKey
ALTER TABLE `payment` DROP FOREIGN KEY `payment_ibfk_1`;

-- DropForeignKey
ALTER TABLE `payment` DROP FOREIGN KEY `payment_ibfk_2`;

-- DropForeignKey
ALTER TABLE `payment_method` DROP FOREIGN KEY `payment_method_ibfk_1`;

-- DropForeignKey
ALTER TABLE `reviews` DROP FOREIGN KEY `reviews_ibfk_1`;

-- DropForeignKey
ALTER TABLE `reviews` DROP FOREIGN KEY `reviews_ibfk_2`;

-- DropForeignKey
ALTER TABLE `spot_tourism` DROP FOREIGN KEY `spot_tourism_ibfk_1`;

-- DropForeignKey
ALTER TABLE `spot_tourism` DROP FOREIGN KEY `spot_tourism_ibfk_2`;

-- DropForeignKey
ALTER TABLE `transaction` DROP FOREIGN KEY `transaction_ibfk_1`;

-- DropForeignKey
ALTER TABLE `transaction_detail` DROP FOREIGN KEY `transaction_detail_ibfk_1`;

-- DropForeignKey
ALTER TABLE `transaction_detail` DROP FOREIGN KEY `transaction_detail_ibfk_2`;

-- DropIndex
DROP INDEX `method_id` ON `payment`;

-- AlterTable
ALTER TABLE `payment` DROP COLUMN `expiration_time`,
    DROP COLUMN `method_id`,
    DROP COLUMN `service_fee`,
    DROP COLUMN `total_payment`,
    ADD COLUMN `payment_type` VARCHAR(50) NOT NULL,
    MODIFY `transaction_id` INTEGER NOT NULL,
    MODIFY `payment_status` ENUM('pending', 'success', 'failed') NOT NULL DEFAULT 'pending',
    MODIFY `payment_time` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `response_data` JSON NOT NULL;

-- DropTable
DROP TABLE `payment_method`;

-- DropTable
DROP TABLE `payment_provider`;

-- CreateTable
CREATE TABLE `temp_order` (
    `temp_order_id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` VARCHAR(50) NOT NULL,
    `user_id` CHAR(10) NOT NULL,
    `visit_date` DATE NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` ENUM('pending', 'paid', 'cancelled') NOT NULL DEFAULT 'pending',

    UNIQUE INDEX `temp_order_order_id_key`(`order_id`),
    INDEX `temp_order_user_id_idx`(`user_id`),
    PRIMARY KEY (`temp_order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `temp_order_detail` (
    `temp_order_detail_id` INTEGER NOT NULL AUTO_INCREMENT,
    `temp_order_id` INTEGER NOT NULL,
    `ticket_id` CHAR(20) NOT NULL,
    `visitor_name` VARCHAR(100) NULL,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `price` DECIMAL(10, 2) NOT NULL,
    `subtotal` DECIMAL(10, 2) NOT NULL,

    INDEX `temp_order_detail_temp_order_id_idx`(`temp_order_id`),
    INDEX `temp_order_detail_ticket_id_idx`(`ticket_id`),
    PRIMARY KEY (`temp_order_detail_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `facility_tourism` ADD CONSTRAINT `facility_tourism_spot_id_fkey` FOREIGN KEY (`spot_id`) REFERENCES `spot_tourism`(`spot_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `facility_tourism` ADD CONSTRAINT `facility_tourism_facility_id_fkey` FOREIGN KEY (`facility_id`) REFERENCES `facility`(`facility_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallery` ADD CONSTRAINT `gallery_spot_id_fkey` FOREIGN KEY (`spot_id`) REFERENCES `spot_tourism`(`spot_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `operating_hours` ADD CONSTRAINT `operating_hours_spot_id_fkey` FOREIGN KEY (`spot_id`) REFERENCES `spot_tourism`(`spot_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transaction`(`transaction_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_spot_id_fkey` FOREIGN KEY (`spot_id`) REFERENCES `spot_tourism`(`spot_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `spot_tourism` ADD CONSTRAINT `spot_tourism_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category_tourism`(`category_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `spot_tourism` ADD CONSTRAINT `spot_tourism_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`village_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction_detail` ADD CONSTRAINT `transaction_detail_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transaction`(`transaction_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction_detail` ADD CONSTRAINT `transaction_detail_ticket_id_fkey` FOREIGN KEY (`ticket_id`) REFERENCES `ticket`(`ticket_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `temp_order` ADD CONSTRAINT `temp_order_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `temp_order_detail` ADD CONSTRAINT `temp_order_detail_temp_order_id_fkey` FOREIGN KEY (`temp_order_id`) REFERENCES `temp_order`(`temp_order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `temp_order_detail` ADD CONSTRAINT `temp_order_detail_ticket_id_fkey` FOREIGN KEY (`ticket_id`) REFERENCES `ticket`(`ticket_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `facility_tourism` RENAME INDEX `facility_id` TO `facility_tourism_facility_id_idx`;

-- RenameIndex
ALTER TABLE `facility_tourism` RENAME INDEX `spot_id` TO `facility_tourism_spot_id_idx`;

-- RenameIndex
ALTER TABLE `gallery` RENAME INDEX `spot_id` TO `gallery_spot_id_idx`;

-- RenameIndex
ALTER TABLE `operating_hours` RENAME INDEX `spot_id` TO `operating_hours_spot_id_idx`;

-- RenameIndex
ALTER TABLE `payment` RENAME INDEX `reference_number` TO `payment_reference_number_key`;

-- RenameIndex
ALTER TABLE `payment` RENAME INDEX `transaction_id` TO `payment_transaction_id_idx`;

-- RenameIndex
ALTER TABLE `reviews` RENAME INDEX `spot_id` TO `reviews_spot_id_idx`;

-- RenameIndex
ALTER TABLE `reviews` RENAME INDEX `user_id` TO `reviews_user_id_idx`;

-- RenameIndex
ALTER TABLE `spot_tourism` RENAME INDEX `category_id` TO `spot_tourism_category_id_idx`;

-- RenameIndex
ALTER TABLE `spot_tourism` RENAME INDEX `village_id` TO `spot_tourism_village_id_idx`;

-- RenameIndex
ALTER TABLE `transaction` RENAME INDEX `transaction_code` TO `transaction_transaction_code_key`;

-- RenameIndex
ALTER TABLE `transaction` RENAME INDEX `user_id` TO `transaction_user_id_idx`;

-- RenameIndex
ALTER TABLE `transaction_detail` RENAME INDEX `ticket_id` TO `transaction_detail_ticket_id_idx`;

-- RenameIndex
ALTER TABLE `transaction_detail` RENAME INDEX `transaction_id` TO `transaction_detail_transaction_id_idx`;

-- RenameIndex
ALTER TABLE `users` RENAME INDEX `email` TO `users_email_key`;
