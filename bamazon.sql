CREATE DATABASE bamazon1_db

USE bamazon1_db

DROP TABLE bamazon1

CREATE TABLE bamazon1 (
prod VARCHAR (30) NOT NULL,
dep VARCHAR (30) NOT NULL,
price INTEGER NOT NULL,
stock INTEGER NOT NULL,
item_id INTEGER NOT NULL
);

CREATE TABLE item (
id INTEGER NOT NULL auto_increment,
name VARCHAR (30) NOT NULL,
primary key(id)
);

select * from bamazon1;
select * from item;

insert into item
(name)
value ('Bath Bomb');


insert into bamazon1
(prod, dep, price, stock, item_id) 
values ( 'Purelis Natural 40pk', 'Beauty and Personal Care', 35, 300, 1 );

insert into item
(name)
value ('Lights');


insert into bamazon1
(prod, dep, price, stock, item_id) 
values ( 'BIENNA string lights', 'Home Improvement', 28, 10, 2 );

insert into item
(name)
value ('Jewel');


insert into bamazon1
(prod, dep, price, stock, item_id) 
values ( 'Chainmail Kit', 'Sewing', 68, 100, 3 );

insert into item
(name)
value ('Dark Chocolate');


insert into bamazon1
(prod, dep, price, stock, item_id) 
values ( 'Dark Cocoa and Toffee', 'Food', 9, 1, 4 );

insert into item
(name)
value ('LBook');


insert into bamazon1
(prod, dep, price, stock, item_id) 
values ( 'Taste Me', 'Books', 0, 200, 5 );

insert into item
(name)
value ('kimono');


insert into bamazon1
(prod, dep, price, stock, item_id) 
values ( 'Satin Kimono Robe', 'Clothing', 14, 250, 6 );

insert into item
(name)
value ('bolster');


insert into bamazon1
(prod, dep, price, stock, item_id) 
values ( 'Dayloveme Bolster', 'Health and Wellness', 13, 69, 7 );

insert into item
(name)
value ('Hot Tub');


insert into bamazon1
(prod, dep, price, stock, item_id) 
values ( 'Essential Hot Tub', 'Patios and Tubs', 3500, 100, 8 );

insert into item
(name)
value ('TV');


insert into bamazon1
(prod, dep, price, stock, item_id) 
values ( 'Tashiba FireTV', 'Electronics', 330, 88, 9 );

insert into item
(name)
value ('Blanket');


insert into bamazon1
(prod, dep, price, stock, item_id) 
values ( 'Flannel Blanket', 'Home and Kitchen', 18, 9, 10 );

select bamazon1.prod, bamazon1.dep, bamazon1.price, bamazon1.stock, item.name
from bamazon1 inner join item on bamazon1.item_id  = item.id;