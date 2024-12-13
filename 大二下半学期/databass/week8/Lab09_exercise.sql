drop schema lab9;

create database if not exists lab09;
use lab09;
CREATE TABLE IF NOT EXISTS MANUFACTURER 
( 
MCODE INT AUTO_INCREMENT, 
MNAME ENUM('Audi', 'BMW', 'Opel', 'Volkswagen', 'Peugeot', 
'Renault', 'Alfa Romeo', 'Ford', 'Hyundai', 'Kia', 
'Saab', 'SsangYong', 'Honda', 'Lexus', 'Mazda', 
'Mitsubishi', 'Nissan', 'Suzuki', 'Toyota') NOT NULL, 
MCOUNTRY VARCHAR(20), 
PRIMARY KEY(MCODE) 
);

INSERT INTO MANUFACTURER (MNAME, MCOUNTRY) VALUES
('Audi','Germany'),
('BMW','Germany'), 
('Opel','Germany'),
('Volkswagen','Germany'),
('Peugeot','France'),
('Renault','France'),
('Alfa Romeo','Italy'),
('Ford','USA'),
('Hyundai','South Korea'),
('Kia','South Korea'),
('Saab','Swedan'),
('SsangYong','Swedan'),
('Honda','Japan'),
('Lexus','Japan'),
('Mazda','Japan'),
('Mitsubishi','Japan'),
('Nissan','Japan'),
('Suzuki','Japan'),
('Toyota', 'Japan');

CREATE TABLE IF NOT EXISTS CAR 
( 
REG VARCHAR(15), 
MODEL VARCHAR(10) NOT NULL, 
COST DOUBLE(7,2), 
MCODE INT, 
PRIMARY KEY(REG), 
CONSTRAINT FK_MCODE FOREIGN KEY(MCODE) 
REFERENCES MANUFACTURER(MCODE) 
ON UPDATE CASCADE ON DELETE SET NULL 
);

INSERT INTO CAR VALUES 
('141-KK-345','i30',20760, 9),
('11-WD-1876','i35',14500, 9),
('151-KK-100','Astra',24800, 3),
('12-WX-222','Corolla',19870, 19),
('142-WD-7811','Vectra',28900, 3),
('08-KK-1234','Polo',6500, 4),
('10-WX-9875','Golf',9500, 4);

create table if not exists customer(
customerId int primary key auto_increment,
fName varchar(15),
lName varchar(15),
emailAddress varchar(40)
);

create table if not exists viewings(
customerId int zerofill not null,
reg varchar(15) not null,
viewingDate date,
comments varchar(250),
primary key(customerId, reg),
constraint fk_customer foreign key(customerId) references customer(customerId),
constraint fk_car foreign key(reg) references car(reg)
on update cascade
on delete cascade
);

insert into customer(fName,lName,emailAddress) value ('	Ziheng','Wang','123456@qq.com'),('Kaifengg','Jin','23456@qq.com');
 
 select * from customer;
 select * from car;
 
 insert into viewings(customerId,reg) value ('1','08-KK-1234'),('1','10-WX-9875'),('2','141-KK-345'),('2','11-WD-1876'),('2','12-WX-222');
select * from viewings;

select MODEl, viewingDate, comments
from viewings
join car
on car.reg=viewings.reg;

select concat(fName,lName) as 'fullName', MODEl, viewingDate, comments
from viewings
join car
on car.reg=viewings.reg
join customer
on viewings.customerId=customer.customerId;

update viewings 
set viewingDate =curdate()
where customerId='1';

