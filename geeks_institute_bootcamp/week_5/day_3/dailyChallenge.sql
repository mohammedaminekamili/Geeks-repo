

create table customer (
id serial primary key ,
first_name varchar(20),
last_name varchar(20) not null
);

create table customer_profile(
id serial primary key,
isLoggedIn boolean default false,
customer_id int unique,
foreign key (customer_id) references customer(id)
);


insert into customer (first_name,last_name)
values ('John', 'Doe'),('Jerome', 'Lalu'),('Lea', 'Rive');

insert into customer_profile(isLoggedIn,customer_id)
values(true,(select id from customer where first_name='John')),
(default,(select id from customer where first_name='Jerome'));

select first_name from customer c
inner join customer_profile cp on c.id = cp.customer_id
where isLoggedIn= true;

select c.first_name, cp.isLoggedIn from customer c
full join customer_profile cp on c.id = cp.customer_id;

select count(*) from customer c
LEFT JOIN customer_profile cp
on c.id = cp.customer_id
WHERE cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;

create table book(
book_id SERIAL PRIMARY KEY, 
title varchar(100) NOT NULL, 
author varchar(100) NOT NULL
);

insert into book (title, author)values('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),('To kill a mockingbird', 'Harper Lee');

create table student(
student_id SERIAL PRIMARY KEY, name varchar(20) NOT NULL UNIQUE, age int 
);

INSERT INTO student (name, age)
VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);
CREATE TABLE Library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES
(
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'John'),
    '2022-02-15'
),
(
    (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-03-03'
),
(
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    '2021-05-23'
),
(
    (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-08-12'
);
select * from library;

SELECT s.name AS student_name, b.title AS book_title
FROM Library l
INNER JOIN Student s ON l.student_fk_id = s.student_id
INNER JOIN Book b ON l.book_fk_id = b.book_id;

SELECT AVG(s.age) AS avg_age
FROM Library l
INNER JOIN Student s ON l.student_fk_id = s.student_id
INNER JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

DELETE FROM Student
WHERE name = 'Bob';

/*
All records in Library where student_fk_id matches Bob’s id will be automatically deleted.
*/

