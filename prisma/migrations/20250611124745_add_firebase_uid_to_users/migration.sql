/*
  Warnings:

  - A unique constraint covering the columns `[firebase_uid]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `firebase_uid` VARCHAR(50) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_firebase_uid_key` ON `users`(`firebase_uid`);
