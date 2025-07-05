/*
  Warnings:

  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.
  - The values [tourism_owner] on the enum `users_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `password` VARCHAR(100) NULL,
    MODIFY `role` ENUM('admin', 'user') NOT NULL;

-- CreateIndex
CREATE INDEX `users_role_idx` ON `users`(`role`);
