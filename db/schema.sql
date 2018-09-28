CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT(255) AUTO_INCREMENT NOT NULL,
    PRIMARY KEY(id),
    burger_name VARCHAR(50),
    devoured BOOLEAN NOT NULL DEFAULT 0
);