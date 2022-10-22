/*
  Warnings:

  - You are about to drop the `new_table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `new_table`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `male` VARCHAR(191) NOT NULL,
    `hobby` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
