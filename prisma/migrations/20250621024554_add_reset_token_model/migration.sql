-- CreateTable
CREATE TABLE `resetToken` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(191) NOT NULL,
    `user_id` CHAR(10) NOT NULL,
    `expired_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `resetToken_token_key`(`token`),
    INDEX `resetToken_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `resetToken` ADD CONSTRAINT `resetToken_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
