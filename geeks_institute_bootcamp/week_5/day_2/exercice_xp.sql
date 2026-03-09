
/* exerice 1*/
select * from items order by (price);
select * from items where price>=80 order by (price) desc;

select first_name,last_name from customers order by (first_name) limit 3;
select last_name from customers order by (last_name) desc;


/* exerice 2*/
select * from customer;
select first_name|| ' ' ||last_name as full_name from customer;
select distinct create_date from customer;
select * from customer order by first_name desc;
select film_id, title, description from film order by rental_rate;
select address, phone from address where district='Texas';
select * from film where film_id in (15,150);
select film_id, title, description,length, rental_rate from film where title ilike 'forrest gump';
select film_id, title, description,length, rental_rate from film where title ilike 'fo%';
select * from film order by replacement_cost limit 10;
select * from film order by replacement_cost offset 10 limit 10;
select customer.first_name,customer.last_name,payment.amount,payment.payment_date from customer inner join payment on customer.customer_id=payment.customer_id order by customer.customer_id ;
SELECT f.*
FROM film f
LEFT JOIN inventory i
ON f.film_id = i.film_id
WHERE i.film_id IS NULL;

select c.country, a.city from country c inner join city a on a.country_id=c.country_id;

select c.customer_id,c.first_name || ' ' || c.last_name as full_name,p.amount,p.payment_date from customer c inner join payment p on c.customer_id=p.customer_id order by p.staff_id ;
