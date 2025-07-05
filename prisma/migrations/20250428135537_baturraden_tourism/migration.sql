-- CreateTable
CREATE TABLE `category_tourism` (
    `category_id` CHAR(5) NOT NULL,
    `category_name` VARCHAR(20) NOT NULL,
    `category_desc` VARCHAR(150) NULL,
    `category_icon` VARCHAR(255) NULL,

    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `facility` (
    `facility_id` CHAR(10) NOT NULL,
    `facility_name` VARCHAR(100) NOT NULL,
    `facility_icon` VARCHAR(255) NULL,

    PRIMARY KEY (`facility_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `facility_tourism` (
    `facility_tourism_id` CHAR(10) NOT NULL,
    `spot_id` CHAR(10) NULL,
    `facility_id` CHAR(10) NULL,

    INDEX `facility_id`(`facility_id`),
    INDEX `spot_id`(`spot_id`),
    PRIMARY KEY (`facility_tourism_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gallery` (
    `gallery_id` CHAR(10) NOT NULL,
    `spot_id` CHAR(10) NULL,
    `gallery_img` VARCHAR(255) NULL,
    `gallery_caption` VARCHAR(255) NULL,

    INDEX `spot_id`(`spot_id`),
    PRIMARY KEY (`gallery_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `operating_hours` (
    `operating_id` CHAR(10) NOT NULL,
    `spot_id` CHAR(10) NULL,
    `operating_day` ENUM('Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu') NOT NULL,
    `hours_open` TIME(0) NOT NULL,
    `hours_closed` TIME(0) NOT NULL,

    INDEX `spot_id`(`spot_id`),
    PRIMARY KEY (`operating_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `payment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `transaction_id` INTEGER NULL,
    `method_id` INTEGER NULL,
    `reference_number` VARCHAR(50) NOT NULL,
    `payment_amount` DECIMAL(10, 2) NOT NULL,
    `service_fee` DECIMAL(10, 2) NOT NULL,
    `total_payment` DECIMAL(10, 2) NULL,
    `payment_status` ENUM('pending', 'success', 'failed') NULL DEFAULT 'pending',
    `payment_time` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `expiration_time` TIMESTAMP(0) NULL,
    `response_data` JSON NULL,

    UNIQUE INDEX `reference_number`(`reference_number`),
    INDEX `method_id`(`method_id`),
    INDEX `transaction_id`(`transaction_id`),
    PRIMARY KEY (`payment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment_method` (
    `method_id` INTEGER NOT NULL AUTO_INCREMENT,
    `provider_id` CHAR(10) NULL,
    `method_name` VARCHAR(50) NOT NULL,
    `method_code` VARCHAR(50) NOT NULL,
    `method_icon` VARCHAR(255) NULL,
    `service_fee` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `minimum_payment` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `maximum_payment` DECIMAL(10, 2) NOT NULL,
    `is_active` BOOLEAN NULL DEFAULT true,

    UNIQUE INDEX `method_code`(`method_code`),
    INDEX `provider_id`(`provider_id`),
    PRIMARY KEY (`method_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment_provider` (
    `provider_id` CHAR(10) NOT NULL,
    `provider_name` VARCHAR(50) NOT NULL,
    `provider_desc` VARCHAR(255) NULL,
    `provider_logo` VARCHAR(255) NULL,
    `is_active` BOOLEAN NULL DEFAULT true,

    PRIMARY KEY (`provider_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reviews` (
    `reviews_id` CHAR(10) NOT NULL,
    `spot_id` CHAR(10) NULL,
    `user_id` CHAR(10) NULL,
    `reviews_rating` TINYINT NULL,
    `reviews_desc` TEXT NULL,
    `reviews_created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `spot_id`(`spot_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`reviews_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `spot_tourism` (
    `spot_id` CHAR(10) NOT NULL,
    `category_id` CHAR(5) NULL,
    `village_id` CHAR(10) NULL,
    `spot_name` VARCHAR(60) NOT NULL,
    `spot_desc` TEXT NULL,
    `spot_address` VARCHAR(200) NULL,
    `spot_maps` VARCHAR(255) NULL,
    `spot_thumbnail` VARCHAR(100) NULL,
    `spot_rating` DECIMAL(3, 2) NULL DEFAULT 0.00,
    `spot_contact` VARCHAR(15) NULL,

    INDEX `category_id`(`category_id`),
    INDEX `village_id`(`village_id`),
    PRIMARY KEY (`spot_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ticket` (
    `ticket_id` VARCHAR(191) NOT NULL,
    `spot_id` CHAR(10) NULL,
    `ticket_name` VARCHAR(100) NULL,
    `ticket_price` DECIMAL(10, 2) NOT NULL,
    `ticket_desc` TEXT NULL,
    `ticket_stock` INTEGER NULL DEFAULT 0,
    `code` VARCHAR(10) NOT NULL,
    `url_qr` TEXT NOT NULL,

    INDEX `spot_id`(`spot_id`),
    PRIMARY KEY (`ticket_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaction` (
    `transaction_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` CHAR(10) NULL,
    `transaction_code` VARCHAR(50) NOT NULL,
    `total_price` DECIMAL(10, 2) NOT NULL,
    `transaction_status` ENUM('pending', 'paid', 'cancelled') NULL DEFAULT 'pending',
    `transaction_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `visit_date` DATE NOT NULL,

    UNIQUE INDEX `transaction_code`(`transaction_code`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`transaction_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaction_detail` (
    `transaction_detail_id` INTEGER NOT NULL AUTO_INCREMENT,
    `transaction_id` INTEGER NULL,
    `ticket_id` CHAR(10) NULL,
    `detail_quantity` INTEGER NOT NULL,
    `detail_price` DECIMAL(10, 2) NOT NULL,
    `detail_subtotal` DECIMAL(10, 2) NULL,

    INDEX `ticket_id`(`ticket_id`),
    INDEX `transaction_id`(`transaction_id`),
    PRIMARY KEY (`transaction_detail_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `user_id` CHAR(10) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(20) NULL,
    `address` TEXT NULL,
    `role` ENUM('admin', 'user', 'tourism_owner') NOT NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `village` (
    `village_id` CHAR(10) NOT NULL,
    `village_name` VARCHAR(100) NOT NULL,
    `village_city` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`village_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `facility_tourism` ADD CONSTRAINT `facility_tourism_ibfk_1` FOREIGN KEY (`spot_id`) REFERENCES `spot_tourism`(`spot_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `facility_tourism` ADD CONSTRAINT `facility_tourism_ibfk_2` FOREIGN KEY (`facility_id`) REFERENCES `facility`(`facility_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `gallery` ADD CONSTRAINT `gallery_ibfk_1` FOREIGN KEY (`spot_id`) REFERENCES `spot_tourism`(`spot_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `operating_hours` ADD CONSTRAINT `operating_hours_ibfk_1` FOREIGN KEY (`spot_id`) REFERENCES `spot_tourism`(`spot_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transaction`(`transaction_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`method_id`) REFERENCES `payment_method`(`method_id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `payment_method` ADD CONSTRAINT `payment_method_ibfk_1` FOREIGN KEY (`provider_id`) REFERENCES `payment_provider`(`provider_id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`spot_id`) REFERENCES `spot_tourism`(`spot_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `spot_tourism` ADD CONSTRAINT `spot_tourism_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category_tourism`(`category_id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `spot_tourism` ADD CONSTRAINT `spot_tourism_ibfk_2` FOREIGN KEY (`village_id`) REFERENCES `village`(`village_id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ticket` ADD CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`spot_id`) REFERENCES `spot_tourism`(`spot_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transaction_detail` ADD CONSTRAINT `transaction_detail_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transaction`(`transaction_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transaction_detail` ADD CONSTRAINT `transaction_detail_ibfk_2` FOREIGN KEY (`ticket_id`) REFERENCES `ticket`(`ticket_id`) ON DELETE CASCADE ON UPDATE NO ACTION;
