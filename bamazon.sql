DROP DATABASE IF EXISTS bamazondb;
--##############################################
CREATE DATABASE bamazondb;
--###############################################
USE bamazondb;
--################################################
CREATE TABLE products(
 id INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR(100) NOT NULL,
 department_name VARCHAR(95) NULL,
 price INT default 0,
 stock_quantity INT default 0,
 PRIMARY KEY (id)
);
--#################################################

--###################################################
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NBA 2k19", "Video Games", 59.99, 47);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Dead Redemption II", "Video Games", 59.99, 67);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NBA Live 19", "Video Games", 39.99, 42);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fortnite:Deep Freeze Bundle", "Video Games", 29.99, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Injustice 2 Legendary Edition", "Video Games", 39.99, 51);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Call of Duty Blackops 4", "Video Games", 59.99, 31);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Grand Theft Auto V", "Video Games", 29.99, 46);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Madden NFl 19", "Video Games", 59.99, 67);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BattleField V", "Video Games", 59.99, 86);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Middle-earth:Shadow of War", "Video Games", 19.99, 87);







