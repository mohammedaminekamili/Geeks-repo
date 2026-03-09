CREATE TABLE actors( actor_id SERIAL PRIMARY KEY, first_name VARCHAR (50) NOT NULL, last_name VARCHAR (100) NOT NULL, age DATE NOT NULL, number_oscars SMALLINT NOT NULL );
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES('Matt','Damon','08/10/1970', 5); 
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES('George','Clooney','06/05/1961', 2);
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES ('Natalie', 'Portman', '1981-06-09', 1);
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES ('Emma', 'Stone', '1988-11-06', 2);
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Leonardo', 'DiCaprio', '1974-11-11', 1),
('Brad', 'Pitt', '1963-12-18', 2),
('Meryl', 'Streep', '1949-06-22', 3);

select count(*) from actors
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES('Tom','','08/05/1960', 5);
/*
even with the NOt Null a blank value is not considered as null value 
*/


