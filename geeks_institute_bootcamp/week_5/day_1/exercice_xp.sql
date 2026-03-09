-- Database: public

-- DROP DATABASE IF EXISTS public;

CREATE DATABASE public





CREATE TABLE items (
    item_id serial primary key ,
    item_name VARCHAR(100),
    price INT
);

CREATE TABLE customers (
    customer_id serial primary key ,
    first_name VARCHAR(100),
	last_name VARCHAR(100)
);


insert into items (item_name,price) values('Small Desk',100),('Large desk',300),('Fan',80);

insert into customers(first_name,last_name) values (' Greg','Jones'),('Sandra','Jones'),('Scott','Scott'),('Trevor','Green'),('Melanie','Johnson');

select * from items;

select * from items where price>80;

select * from items where price<=300;

select * from customers where last_name='Smith';

select * from customers where last_name='Jones';

select * from customers where first_name!='Scott';

