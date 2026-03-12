
select * from language;

select f.title, f.description, l.name from film f inner join language l on l.language_id= f.language_id; 

select f.title, f.description, l.name from film f  right outer join  language l on l.language_id= f.language_id ;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);


INSERT INTO new_film (name) 
VALUES 
    ('Interstellar'),
    ('Titanic'),
    ('Spider-Man');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL  references new_film(id) on delete cascade,
    language_id INT NOT NULL references language(language_id) ,
    title VARCHAR(255) NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);


INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(2, 1, 'Great Documentary', 8, 'Very interesting and fast-paced story with great characters.'),
(3, 1, 'Exciting Movie', 9, 'An entertaining film with a fun adventure and strong action scenes.');

delete from new_film where id=2;

select * from customer_review;
select * from language ;
select * from film;
select * from customer;
update language set name='Arabic' where language_id = 5;
update film set language_id=5 where film_id=5;

/* address_id and store_id*/

drop table customer_review;

SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public';
select * from rental;
select * from inventory;
select * from film ;

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

SELECT DISTINCT f.title, f.rental_rate
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

select f.* from film f
inner join film_actor fa on f.film_id=fa.film_id
inner join actor a on fa.actor_id=a.actor_id
where f.description ilike('%sumo%') and(a.first_name ilike('Penelope') and a.last_name ilike('Monroe'));

select f.* from film f
join film_category fc on f.film_id=fc.film_id
join category c on fc.category_id=c.category_id
where c.name ilike('documentary') and f.length < 60 and f.rating='R';

select f.* from film f
join inventory i on f.film_id=i.film_id
join rental r on r.inventory_id=i.inventory_id
join payment p on p.rental_id=r.rental_id
join customer c on c.customer_id =p.customer_id
where c.first_name ilike('Matthew') and c.last_name ilike('Mahan')
and p.amount>4
and r.return_date between '2005-07-28' and '2005-08-01'; 


select f.* from film f
join inventory i on f.film_id=i.film_id
join rental r on r.inventory_id=i.inventory_id
join payment p on p.rental_id=r.rental_id
join customer c on c.customer_id =p.customer_id
where c.first_name ilike('Matthew') and c.last_name ilike('Mahan')
and (f.description ilike('%boat%') or f.title ilike('%boat%'))
ORDER BY f.replacement_cost DESC;

