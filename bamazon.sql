create database bamazon; 

use bamazon; 
create table products (
item_id integer auto_increment, 
product_name varchar (100) NOT NULL, 
dept_name varchar (100) NULL, 
price float,
stock_qty integer,
primary key (item_id)
);

INSERT INTO products (product_name, dept_name, price, stock_qty) VALUES ("iPhone","Electronics", 799.99 , 
30) , ('Coffee Beans','Food & Beverages', 20, 100), ('Sunglasses', 'Eye Wear', 39.99, 40),('Laptop', 'Electronics', 399.99, 70), ('Deodorant', 'Hygeine', 12, 150), ('Toothpaste', 'Hygeine', 18.99, 600), ('Gatorade' , 'Food & Beverages', 6.99, 100), ('Highlighter', 'office supplies', 2.99, 1000), ('Pen' , 'office supplies' , 2.99 , 1000), ('Water', 'Food & Beverages', 1.99 ,30000);
SELECT * FROM products;

