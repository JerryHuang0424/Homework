DROP SCHEMA IF EXISTS movies;

CREATE SCHEMA IF NOT EXISTS movies;

USE movies;
drop table if exists Film;
drop table if exists Reviewer;
drop table if exists Rating;

/* Create the schema for our tables */
create table Film(
fID int primary key auto_increment, 
title varchar(80),
releaseYear smallint(4), 
director varchar(40),
length tinyint unsigned
);

create table Reviewer(
rID int primary key auto_increment, 
name varchar(40)
);

create table Rating(
ratingId int primary key auto_increment,
rID int not null, 
fID int not null, 
stars tinyint, 
ratingDate date,
foreign key (rID) references Reviewer(rID) on update cascade on delete cascade,
foreign key (fID) references Film(fID) on update cascade on delete cascade
);

/* Populate the tables with our data */
insert into Film values(101, 'Gone with the Wind', 1939, 'Victor Fleming', 120);
insert into Film values(102, 'Star Wars', 1977, 'George Lucas',150);
insert into Film values(103, 'The Sound of Music', 1965, 'Robert Wise',125);
insert into Film values(104, 'E.T.', 1982, 'Steven Spielberg',110);
insert into Film values(105, 'Titanic', 1997, 'James Cameron',120);
insert into Film values(106, 'Snow White', 1937, 'William Cottrell',90);
insert into Film values(107, 'Avatar', 2009, 'James Cameron',105);
insert into Film values(108, 'Raiders of the Lost Ark', 1981, 'Steven Spielberg',90);

insert into Reviewer values(201, 'Sarah Martinez');
insert into Reviewer values(202, 'Daniel Lewis');
insert into Reviewer values(203, 'Brittany Harris');
insert into Reviewer values(204, 'Mike Anderson');
insert into Reviewer values(205, 'Chris Jackson');
insert into Reviewer values(206, 'Elizabeth Thomas');
insert into Reviewer values(207, 'James Cameron');
insert into Reviewer values(208, 'Ashley White');

insert into Rating(rID, fID, stars, ratingDate) values(201, 101, 2, '2018-01-22');
insert into Rating(rID, fID, stars, ratingDate)  values(201, 102, 4, '2018-01-27');
insert into Rating(rID, fID, stars, ratingDate)  values(202, 106, 4, null);
insert into Rating(rID, fID, stars, ratingDate)  values(203, 103, 2, '2018-01-20');
insert into Rating(rID, fID, stars, ratingDate)  values(203, 104, 4, '2018-01-12');
insert into Rating(rID, fID, stars, ratingDate)  values(203, 108, 2, '2018-01-30');
insert into Rating(rID, fID, stars, ratingDate)  values(204, 101, 3, '2018-01-09');
insert into Rating(rID, fID, stars, ratingDate)  values(205, 103, 3, '2018-01-27');
insert into Rating(rID, fID, stars, ratingDate)  values(205, 104, 2, '2018-01-22');
insert into Rating(rID, fID, stars, ratingDate)  values(205, 108, 4, null);
insert into Rating(rID, fID, stars, ratingDate)  values(206, 107, 3, '2018-01-15');
insert into Rating(rID, fID, stars, ratingDate)  values(206, 106, 5, '2018-01-19');
insert into Rating(rID, fID, stars, ratingDate)  values(207, 107, 5, '2018-01-20');
insert into Rating(rID, fID, stars, ratingDate)  values(208, 104, 3, '2018-01-02');
