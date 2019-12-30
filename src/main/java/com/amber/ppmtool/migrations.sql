show databases ;

create database if not exists project;
use project;
create table if not exists project (
 id int unsigned auto_increment,
 projectName varchar(50),
 projectIdentifier varchar(50),
 description text,
 start_date date,
 end_date date,
 created_At date,
 updated_At date,
 primary key (id)
);

show tables;
describe project;