DROP DATABASE IF EXISTS bamazon1_db;

CREATE DATABASE bamazon1_db;

USE bamazon1_db


CREATE TABLE products (
item_id INT AUTO_INCREMENT NOT NULL,
product VARCHAR (30) NOT NULL,
department VARCHAR (30) NOT NULL,
price INTEGER NOT NULL,
stock INTEGER NOT NULL,
primary key(item_id)
);


select * from products;

insert into products
(product, department, price, stock) 
values ('Purelis Natural 40pk', 'Beauty and Personal Care', 35, 300);

insert into products
(product, department, price, stock)
values ('BIENNA string lights', 'Home Improvement', 28, 10);

insert into products
(product, department, price, stock)
values ('Chainmail Kit', 'Sewing', 68, 100);

insert into products
(product, department, price, stock)
values ('Dark Cocoa and Toffee', 'Food', 9, 1);

insert into products
(product, department, price, stock)
values ('Taste Me', 'Books', 0, 200);

insert into products
(product, department, price, stock) 
values ('Satin Kimono Robe', 'Clothing', 14, 250);

insert into products
(product, department, price, stock) 
values ('Dayloveme Bolster', 'Health and Wellness', 13, 69);

insert into products
(product, department, price, stock) 
values ('Essential Hot Tub', 'Patios and Tubs', 3500, 100); 

insert into products
(product, department, price, stock) 
values ('Tashiba FireTV', 'Electronics', 330, 88);

insert into products
(product, department, price, stock) 
values ( 'Flannel Blanket', 'Home and Kitchen', 18, 9);

