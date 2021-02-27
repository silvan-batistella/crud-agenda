create database agendapontosistemas;

CREATE TABLE `agendapontosistemas`.`contato` (
 `id` INT NOT NULL AUTO_INCREMENT,
 `idade` INT NULL,
 `nome` VARCHAR(255) NULL,
 `email` VARCHAR(255) NULL,
 PRIMARY KEY (`id`));