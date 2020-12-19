DROP DATABASE IF EXISTS wellRounded_db;
CREATE DATABASE wellRounded_db;
USE wellRounded_db;
CREATE TABLE IF NOT EXISTS `user` (
    `id` INTEGER NOT NULL auto_increment , 
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL, 
    PRIMARY KEY (`id`)
    )