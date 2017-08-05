create database Bamazon_db;

create table bamazon_products (
	ItemID integer(90) not null,
    ProductName varchar(255) not null,
    DepartmentName varchar(255) not null,
    Price integer(255) not null,
    StockQuanitiy integer(100) not null
);


INSERT INTO bamazon_products VALUES 
(01, 'Barbie', 'dolls', 19.99, 55),
(02, 'Bat', 'sports', 12.00, 12),
(03, 'X-Box', 'electronics', 299.99, 9),
(04, 'Basketball', 'sports', 11.99, 70),
(05, 'Baby Doll', 'dolls', 19.00, 25),
(06, 'Legos', 'blocks', 29, 18),
(07, 'Hot Wheels', 'cars', 6, 148),
(08, 'Doll House', 'dolls', 96.99, 10),
(09, 'Tennis Racket', 'sports', 13.99, 29),
(10, 'Baseball', 'sports', 8.00, 44),
(11, 'Trucks', 'cars', 25, 18),
(12, 'Monopoly', 'games', 15.99, 17)