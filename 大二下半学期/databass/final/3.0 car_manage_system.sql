create database if not exists car_manage_system;

use car_manage_system;        /*buyfrom*/

create table if not exists carManufacture(
manufacturerId int auto_increment primary key not null,
manufactureName varchar(20),
yearFounded DATE,
location varchar(20)
);
INSERT INTO carManufacturer(manufactureName,yearFounded,location) VALUES
('FAW GROUP','1953','Changchun, Jilin Province,China'),
('SAIC Motor Corporation','1955','ShangHai,China'),
('Dongfeng Motor Corporation','1969','Wuhan, Hubei,China'),
('Changan Automoblie','1996','Chong Qing Province,China'),
('Geely Auto','1986','HangZhou, ZheJiang Province,China'),
('BMW','1916','Munich, Germany'),
('Volkswagen','1937','Wolfsburg, Germany'),
('Renault','1899','Boulogne Billancourt, France'),
('Peugeot','1889','Paris,France'),
('FIAT','1899','Turin, Italy'),
('Toyota Motor Corporation','1937','Toyota, Aichi Prefecture, Japan'),
('Honda Motor Co','1948','Tokyo,Jaoen'),
('Nisson Motor Co','1933','Yokohama City, Kanagawa Prefecture, Japan'),
('Ford Motor Company','1903','Michigan'),
('General Motor Company','1908','Michigan'),
('Tesla','2003','California'),
('Hyundai Motor Company','1967','Seoul, South Korea'),
('Kia Motors','1944','Seoul, South Korea'),
('Volvo Cars','1927','Gothenburg, Sweden'),
('Ferrari','1939','Maranello, Italy'),
('Lamborghini','1963','Italy'),
('XiaoMI','2022','BeiJing,China');
create table if not exists manufacturerPhone(
phoneNumber VARCHAR(20) primary key not null,
manufacturerId int,
constraint fk_manufacturerId1 foreign key (manufacturerId) references carManufacture(manufacturerId)
on update cascade on delete cascade
);

INSERT INTO manufacturerPhone VALUES
('+86-431-8572-8000',1),
('+86-431-8572-3440',1),
('+86-21-2201-8000',2),
('+86-21-2201-9000',2),
('+86-27-8428-5000',3),
('+86-27-8428-5225',3),
('+86-400-888-6677',4),
('+86-23-6759-8211',4),
('+86-400-886-9888',5),
('+86-571-2809-5111',5),
('+49-89-1250-16000',6),
('+49-5361-9-0',7),
('+1-800-822-8987',7),
('+33-1-76-84-04-04',8),
('+44-800-085-8005',8),
('+33-9-70-80-91-20',9),
('+44-800-042-2422',9),
('+39-011-003-1111',10),
('+81-565-28-2121',11),
('+1-800-331-4331',11),
('+81-3-3423-1111',12),
('+1-800-999-1009',12),
('+81-45-523-5523',13),
('+1-800-647-7261',13),
('+1-800-392-3673',14),
('+1-313-322-3000',14),
('+1-800-462-8782',15),
('+1-313-556-5000',15),
('+1-888-518-3752',16),
('+1-650-681-5000',16),
('+82-2-3464-1114',17),
('+1-800-633-5151',17),
('+82-2-3464-1114',18),
('+1-800-333-4542',18),
('+46-31-325-0000',19),
('+1-800-458-1552',19),
('+39-0536-949111',20),
('+1-201-816-2600',20),
('+39-051-959-7282',21),
('+1-703-364-7000',21),
('+86-400-182-6888',22);

create table if not exists manufacturerPart(
needPartId int auto_increment primary key,
partName varchar(20) not null,
manufacturerId int ,
foreign key (manufacturerId) references carManufacture(manufacturerId)
on update cascade on delete cascade
);

create table if not exists carBrand (
brandId int auto_increment primary key,
brandName varchar(20),
releaseYear DATE,
discontinuedYear DATE,
manufacturerId int,
foreign key (manufacturerId) references carManufacture(manufacturerId)
on update cascade on delete cascade
);

INSERT INTO carBrand(brandName,manufacturerId,releaseYear,discontinuedYear) VALUES
('Hongqi',1,'1958'),
('Besturn',1,'2006'),
('Roewe',2,'2006'),
('MG',2,'1924'),
('Fengshen',3,'2009'),
('Changan',4,'1996'),
('Oshan',4,'2016'),
('Geely',5,'1997'),
('Lynk',5,'2016'),
('Zeeker',5,'2016'),
('BMW',6,'1916'),
('MINI',6,'1959'),
('Rolls-Royce',6,'1904'),
('Volkswangen',7,'1937'),
('Audi',7,'1909'),
('Porsche',7,'1931'),
('Skoda',7,'1895'),
('SEAT',7,'1950'),
('Bentley',7,'1919'),
('Bugatti',7,'1909'),
('Renault',8,'1899'),
('Dacia',8,'1966'),
('Alpine',8,'1955','1995'),
('Peugeot',9,'1889'),
('Citroen',9,'1919'),
('DS',9,'2009','2017'),
('FIAT',10,'1899'),
('Alfa Romen',10,'1910'),
('Lancia',10,'1906','2014'),
('Toyota',11,'1937'),
('lexus',11,'1989'),
('Scion',11,'2003','2016'),
('Honda',12,'1948'),
('Acura',12,'1986'),
('Nissan',13,'1933'),
('Infiniti',13,'1989'),
('Datsun',13,'1931','1986'),
('Ford',14,'1903'),
('Lincoln',14,'1917'),
('Chevrolet',15,'1911'),
('Buick',15,'1903'),
('Cadillac',15,'1902'),
('GMC',15,'1912'),
('Pontiac',15,'1926','2010'),
('Saab',15,'1945','2011'),
('Saturn',15,'1985','2010'),
('Hummer',15,'1992'),
('Tesla',16,'2003'),
('Hyundai',17,'1967'),
('Genesis',17,'2015'),
('Kia',18,'1944'),
('Volve',19,'1927'),
('Ferrari',20,'1939'),
('Lamborghini',21,'1963'),
('Xiaomi',22,'2022');
create table if not exists models(
carModelId int auto_increment primary key,
carModels varchar(20),
brandId int,
foreign key (brandId) references carBrand(brandId)
on update cascade on delete cascade
);

INSERT INTO models(carModels,brandId) VALUES
('H5',1),
('H7',1),
('H9',1),
('HS5',1),
('HS7',1),
('B30',2),
('B70',2),
('T77',2),
('T99',2),
('RX5',3),
('i5',3),
('i6',3),
('Ei5',3),
('MG6',4),
('MG5',4),
('ZS',4),
('HS',4),
('Cyberster',4),
('AX7',5),
('AX4',5),
('A60',5),
('E70',5),
('CS35 Plus',6),
('CS55 Plus',6),
('CS75 Plus',6),
('CS95',6),
('X5',7),
('X7',7),
('COS1°',7),
('Emgrand',8),
('Binyue',8),
('Boyue',8),
('Xingrui',8),
('Emgrand',9),
('01',10),
('02',10),
('03',10),
('05',10),
('001',11),
('007',11),
('009',11),
('3 Series',12),
('5 Series',12),
('7 Series',12),
('X5',12),
('X3',12),
('MINI Cooper',13),
('MINI Countryman',13),
('MINI Clubman',13),
('Phantom',14),
('Ghost',14),
('Cullinan',14),
('Golf',15),
('Passat',15),
('Tiguan',15),
('Touareg',15),
('A3',16),
('A4',16),
('A6',16),
('Q5',16),
('Q7',16),
('A8L',16),
('911',17),
('Panamera',17),
('Cayenne',17),
('Macan',17),
('Taycan',17),
('Octavia',18),
('Superb',18),
('Kodiaq',18),
('Karoq',18),
('Ibiza',19),
('Leon',19),
('Ateca',19),
('Tarraco',19),
('Continental GT',20),
('Flying Spur',20),
('Bentayga',20),
('Chiron',21),
('Veyron',21),
('Clio',22),
('Megane',22),
('Captur',22),
('Kadjar',22),
('Duster',23),
('Sandero',23),
('Logan',23),
('A110',24),
('208',25),
('308',25),
('3008',25),
('5008',25),
('C3',26),
('C4',26),
('C5 Aircross',26),
('Berlingo',26),
('DS 3 Crossback',27),
('DS 7 Crossback',27),
('DS 9',27),
('500',28),
('Panda',28),
('Tipo',28),
('124 Spider',28),
('Giulia',29),
('Stelvio',29),
('Giulietta',29),
('Ypsilon',30),
('Corolla',31),
('Camry',31),
('RAV4',31),
('Highlander',31),
('IS',32),
('ES',32),
('RX',32),
('LX',32),
('Civic',33),
('Accord',33),
('CR-V',33),
('Pilot',33),
('ILX',34),
('TLX',34),
('RDX',34),
('MDX',34),
('Altima',35),
('Maxima',35),
('Rogue',35),
('Pathfinder',35),
('Q50',36),
('Q60',36),
('QX50',36),
('QX80',36),
('510',37),
('Focus',38),
('Fusion',38),
('Mustang',38),
('Escape',38),
('F-150',38),
('MKZ',39),
('Navigator',39),
('Aviator',39),
('Corsair',39),
('Spark',40),
('Malibu',40),
('Camaro',40),
('Silverado',40),
('Equinox',40),
('Regal',41),
('Enclave',41),
('Encore',41),
('CT4',42),
('CT5',42),
('Escalade',42),
('Sierra',43),
('Yukon',43),
('Acadia',43),
('Model S',44),
('Model 3',44),
('Model X',44),
('Model Y',44),
('Elantra',45),
('Sonata',45),
('Tucson',45),
('Santa Fe',45),
('G70',46),
('G80',46),
('G90',46),
('Forte',47),
('Optima',47),
('Sportage',47),
('Sorento',47),
('S60',48),
('S90',48),
('XC40',48),
('XC90',48),
('488',49),
('F8 Tributo',49),
('Portofino',49),
('Roma',49),
('Huracán',50),
('Aventador',50),
('Urus',50),
('SU7',51);


create table if not exists carPart(
partId int auto_increment primary key,
partName varchar(20),
partType varchar(20)
);

INSERT INTO carPart(partName,partType) VALUES
('Engine','Gasoline engine'),
('Engine','diesel engine'),
('Engine','electric motor'),
('Engine','hybrid engine'),
('Fuel System','Fuel injection system'),
('Fuel System','carburetor system'),
('Cooling System','Liquid cooling system'),
('Cooling System','air cooling system'),
('Lubrication System','Pressure lubrication system'),
('Lubrication System','splash lubrication system'),
('Transmission','MT'),
('Transmission','AT'),
('Transmission','CVT'),
('Transmission','DCT'),
('Drive Shaft','Front drive shaft'),
('Drive Shaft','rear drive shaft'),
('Suspension System','Independent suspension'),
('Suspension System','non-independent suspension'),
('Brake System','Disc brake'),
('Brake System','drum brake'),
('Brake System','ABS anti-lock braking system'),
('Steering System','Mechanical steering'),
('Steering System','hydraulic power steering'),
('Steering System','electric power steering'),
('Battery','Lead-acid battery'),
('Battery','lithium-ion battery'),
('Alternator','Unidirectional generator'),
('Alternator','multidirectional generator'),
('Starting System','Electric start'),
('Starting System','manual start'),
('Lighting System','Halogen lamp'),
('Lighting System','Xenon lamp'),
('Lighting System','LED lamp'),
('Body Frame','Single body'),
('Body Frame','frame body'),
('Windows and Glass','Front windshield'),
('Windows and Glass','side window'),
('Windows and Glass','rear windshield'),
('Interior','Dashboard'),
('Interior','seats'),
('Interior','carpet'),
('Interior','canopy'),
('Airbag','Driver air bag'),
('Airbag','co-pilot air bag'),
('Airbag','side air bag'),
('Airbag','curtain air bag'),
('Seatbelt','Three-point seat belt'),
('Seatbelt','two-point seat belt'),
('Navigation System','Car navigation'),
('Navigation System','mobile Internet navigation'),
('Audio System','Basic sound system'),
('Audio System','surround sound system');

create table if not exists carMaterialNeed(
rawMaterialNeedId int auto_increment primary key,
rawMaterialNeed varchar(20),
partId int not null,
constraint fk_partIdForCarPart foreign key (partId) references carPart(partId)
on update cascade on delete cascade
);

INSERT INTO carMaterialNeed(rawMaterialNeed,partId) VALUES
('Steel',1),
('Aluminum',1),
('Magnesium',1),
('Copper',1),
('Titanium',1),
('Steel',2),
('Aluminum',2),
('Plastics',2),
('Rubber',2),
('Aluminum',3),
('Copper',3),
('Plastic',3),
('Rubber',3),
('Steel',4),
('Aluminum',4),
('Rubber',4),
('Steel',5),
('Aluminum',5),
('Brass',5),
('Plastic',5),
('Steel',6),
('Aluminum',6),
('Composites',6),
('Steel',7),
('Aluminum',7),
('Rubber',7),
('Steel',8),
('Aluminum',8),
('Rubber',8),
('Steel',9),
('Aluminum',9),
('Plastic',9),
('Lithium',10),
('Cobalt',10),
('Copper',11),
('Aluminum',11),
('Steel',11),
('Plastic',11),
('Copper',12),
('Steel',12),
('Aluminum',12),
('Plastic',12),
('Glass',13),
('Plastic',13),
('Steel',14),
('Aluminum',14),
('Plastic',14),
('Composite',14),
('Glass',15),
('Plastic',15),
('Plastic',16),
('Fabric',16),
('Leather',16);

create table if not exists buyFrom(
partId int not null,
manufacturerId int not null,
primary key (partId,manufacturerId),
foreign key (partId) references carPart(partId)on update cascade on delete cascade,
foreign key (manufacturerId) references carManufacture(manufacturerId)
on update cascade on delete cascade
);


create table if not exists partSupplier(
partSupplierId int auto_increment primary key,
supplierName varchar(50),
supplierPhone VARCHAR(20)
);

INSERT INTO partSupplier(supplierName,supplierPhone) VALUES
('Bosch','+49-711-811-0'),
('Continental AG','+49-511-938-01'),
('Denso Corporation','+81-566-25-5511'),
('ZF Friedrichshafen AG','+49-7541-77-0'),
('Valeo','+33-1-40-55-20-20'),
('Magna International','+1-905-726-2462'),
('Tesla','+1-313-556-5000');

create table if not exists proBy(
partId int not null,
partSupplierId int not null,
primary key (partId,partSupplierId),
foreign key(partId) references carPart(partId) on update cascade on delete cascade,
foreign key(partSupplierId) references partSupplier(partSupplierId)
on update cascade on delete cascade
);



create table if not exists rawMaterial(
materialId int auto_increment primary key,
materialName varchar(20),
matericalType varchar(20)
);

INSERT INTO rawMaterial VALUES
('Steel','Metallic material'),
('Aluminum','Metallic material'),
('Magnesium','Metallic material'),
('Copper','Metallic material'),
('Titanium','Metallic material'),
('Plastics','Non-metallic material'),
('Rubber','Non-metallic material'),
('Glass','Non-metallic material'),
('Composites','Non-metallic material'),
('Paints and Coatings','Chemical material'),
('Adhesives and Sealants','Chemical material'),
('Lithium','Electrical material'),
('Rare Earth Elements','Electrical material'),
('Cobalt','Electrical material'),
('Fabrics','Textile material'),
('Leather','Textile material');

create table if not exists proFrom(
partId int not null,
materialId int not null,
primary key(partId, materialId),
constraint fk_partId foreign key(partId) references carPart(partId) on update cascade on delete cascade,
constraint fk_matericalId foreign key(materialId) references rawMaterial(materialId)
on update cascade on delete cascade
);

INSERT INTO proFrom VALUES
(
);

create table if not exists rawMaterialSupplier (
rawSupplierId int auto_increment primary key,
rawSupplierName varchar(50),
rawMaterial  varchar(20)
);

INSERT INTO rawMaterialSupplier VALUES
('Baosteel','steel'),
('ArcelorMittal','steel'),
('POSCO','steel'),
('jkf company','steel'),
('Chalco','Aluminum'),
('Novelis','Aluminum'),
('Rio Tinto','Aluminum'),
('China Magnesium Corporation','Magnesium'),
('U.S. Magnesium','Magnesium'),
('jkf company','Magnesium'),
('Jiangxi Copper','Copper'),
('Freeport-McMoRan','Copper'),
('VSMPO-AVISMA','Titanium'),
('Timet','Titanium'),
('Dow Chemical','Plastics'),
('BASF','Plastics'),
('DuPont','Plastics'),
('Goodyear Tire and Rubber Company','Rubber'),
('Michelin','Rubber'),
('AGC Inc.','Glass'),
('Saint-Gobain','Glass'),
('Toray Industries','Composites'),
('jkf company','Composites'),
('Hexcel Corporation','Composites'),
('Axalta Coating Systems','Paints and Coatings'),
('Sherwin-Williams','Paints and Coatings'),
('Henkel AG & Co. KGaA','Adhesives and Sealants'),
('3M Company','Adhesives and Sealants'),
('Albemarle Corporation','Lithium'),
('Tianqi Lithium','Lithium'),
('China Northern Rare Earth Group High-Tech Co.','Rare Earth Elements'),
('Lynas Corporation','Rare Earth Elements'),
('Lear Corporation','Fabrics'),
('jkf company','Fabrics'),
('Hayashi Telempu Corporation','Fabrics'),
('Bader GmbH & Co. KG','Leather'),
('Eagle Ottawa','Leather');


create table if not exists make(
materialId int not null,
rawSupplierId int not null,
primary key (materialId,rawSupplierId),
constraint fk_materialIdMake foreign key(materialId) references rawMaterial(materialId) on update cascade on delete cascade,
constraint fk_rawSupplierIdMake foreign key(rawSupplierId) references rawMaterialSupplier(rawSupplierId)
on update cascade on delete cascade
);


create table if not exists carDealer(
dealerId int auto_increment primary key,
dealerName varchar(20),
location varchar(50),
brandId int not null,
employeeId int not null,
foreign key (brandId) references carBrand(brandId)
on update cascade on delete cascade
);




create table if not exists haveSold(
brandSoldId int auto_increment primary key,
brandSold varchar(20),
dealerId int not null,
foreign key (dealerId) references carDealer(dealerId)
on update cascade on delete cascade
);



create table if not exists employee(
employeeId int auto_increment primary key,
fName varchar(20),
lName varchar(20),
street varchar(20),
town varchar(20),
county varchar(20),
salary int,
DOB DATE,
supervisor int,
dealerId int not null,
foreign key (supervisor) references employee(employeeId) on update cascade on delete cascade,
foreign key (dealerId) references carDealer(dealerId)
on update cascade on delete cascade
);

/*    Since carDealer and employee are interdependent, foreign keys need to be added          */
alter table carDealer add constraint fk_employeeId foreign key (employeeId) references employee(employeeId) on update cascade on delete cascade ;
alter table carDealer add startDate DATE;




create table if not exists branch(
branchId int auto_increment primary key,
branchName varchar(20)
);


create table if not exists workingHour(
employeeId int not null,
branchId int not null,
primary key(employeeId, branchId),
constraint fk_employeeIdWork foreign key (employeeId) references employee(employeeId),
constraint fk_branchIdWork foreign key (branchId) references branch(branchId)
on update cascade on delete cascade
);


create table if not exists employeeFamMem(
employeeId int not null primary key,
fName varchar(20),
lName varchar(20),
constraint fk_employeeFam foreign key (employeeId) references employee(employeeId)
on update cascade on delete cascade
);


create table if not exists carOwner(
ownerId int auto_increment primary key,
fName varchar(20),
lName varchar(20),
street varchar(20),
Town varchar(20),
county varchar(20),
employeeId int not null,
constraint fk_employeeSold foreign key (employeeId) references employee(employeeId) 
on update cascade on delete cascade
);

INSERT INTO rawMaterialSupplier(fName,lName,street,Town,county,employeeId) VALUES
('John','Smith','123 Maple Street','Springfield','Greene County'),
('Emily','Johnson','456 Oak Avenue','Madison','Dane County'),
('Michael','Brown','789 Pine Road','Greenville','Pitt County'),
('Sarah','Davis','101 Cedar Lane','Albany','Dougherty County'),
('David','Wilson','234 Birch Boulevard','Clifton','Passaic County'),
('Jessica','Moore','567 Elm Street','Bristol','Bristol County'),
('Daniel','Taylor','123 Maple Street','Franklin','Williamson County'),
('Laura','Anderson','111 Cherry Circle','Hamilton','Butler County'),
('James','Thomas','222 Aspen Way','Kingston','Ulster County'),
('Megan','White','333 Magnolia Court','Richmond','Henrico County'),
('Robert','Harris','444 Palm Drive','Salem','Tarrant County'),
('Olivia','Martin','555 Cypress Lane','Arlington','Greene County'),
('William','Jackson','666 Poplar Street','Aurora','Kane County'),
('Ava','Thompson','777 Spruce Road','Charleston','Kanawha County'),
('Christopher','Garcia','888 Redwood Avenue','Concord','Contra Costa County'),
('Sophia','Martinez','999 Ash Boulevard','Raleigh','Wake County'),
('Andrew','Robinson','1010 Beech Lane','Lincoln','Lancaster County'),
('Chloe','Clark','2020 Fir Street','Orlando','Orange County'),
('Ethan','Lewis','3030 Hemlock Way','Buffalo','Erie County'),
('Isabella','Walker','4040 Cedar Avenue','Boulder','Boulder County');

create table if not exists ownerPhone(
phoneNum VARCHAR(20) primary key,
ownerId int not null,
constraint fk_ownerId foreign key (ownerId) references carOwner(ownerId)
on update cascade on delete cascade
);

INSERT INTO ownerPhone VALUES
('13912345678',1),
('13912345679',1),
('12345678910',2),
('12345678911',3),
('13245678910',3),
('14245678910',4),
('14245678912',5),
('14245678913',5),
('14425678912',6),
('14425678914',7),
('14425679912',7),
('14445678912',7),
('14422678912',8),
('17382890021',9),
('17382890022',9),
('17382891121',10),
('17482891121',11),
('17482891121',11),
('17378980104',12),
('17778980104',13),
('17778980105',13),
('17778980144',14),
('17778980164',15),
('17778981194',15),
('17778981184',16),
('17776981184',16),
('18776981184',17),
('18776981184',18),
('18176981184',19),
('18176983894',20);

create table if not exists ownerCar(
ownerCarId int auto_increment primary key,
ownerCarBrand varchar(20),
ownerCarModel varchar(20),
buyDate DATE,
ownerId int not null,
constraint fk_ownerId foreign key (ownerId) references carOwner(ownerId)
on update cascade on delete cascade
);

INSERT INTO ownerCar(ownerCarBrand,ownerCarModel,buyDate,ownerId) VALUES
('Hongqi','H9','2013-01-02',1),
('Besturn','B70','2016-02-02',1),
('Roewe','RX5','2016-07-02',2),
('Changan','CS55 Plus','2008-07-11',3),
('Oshan','X7','2015-12-22',3),
('Geely','Emgrand','2021-11-24',4),
('Lynk','05','2015-05-30',5),
('Zeeker','007','2023-08-01',6),
('BMW','7 Series','2006-02-13',7),
('MINI','MINI Countryman','2015-02-26',8),
('Rolls-Royce','Ghost','2015-02-02',8),
('Volvo','S90','2017-12-02',8),
('Volkswagen','Tiguan','2014-11-12',9),
('Hyundai','Sonata','2015-11-12',9),
('Audi','A8L','2007-01-02',10),
('Porsche','911','2009-09-07',11),
('Nissan','Rogue','2019-09-07',11),
('Bentley','Flying Spur','1999-12-02',12),
('Bugatti','Chiron','2024-02-02',12),
('Peugeot','3008','2008-01-08',13),
('FIAT','Panda','2018-07-08',13),
('Alfa Romeo','Giulia','2018-01-08',14),
('Ford','CR-V','2011-11-08',15),
('Honda','Focus','2019-11-08',15),
('Lincoln','Corsair','2018-11-28',16),
('Lincoln','Navigator','2016-01-18',16),
('Chevrolet','Camaro','2020-01-08',17),
('Xiaomi','SU7','2024-04-08',17),
('Cadillac','CT5','2016-11-08',18),
('Lexus','RX','2015-11-08',18),
('GMC','Sierra','2006-12-08',19),
('Lamborghini','Huracán','2013-11-08',19),
('Tesla','Model S','2016-01-08',20),
('Ferrari','488','2011-01-08',20);

create table if not exists repairStation(
stationId int auto_increment primary key,
stationName varchar(20),
location varchar(50)
);
INSERT INTO repairStation(stationName,location) VALUES
('Mercedes-Benz Service Center','100 Mercedes Drive, Stuttgart, Germany'),
('Toyota Service Center','1 Toyota-Cho, Toyota City, Aichi Prefecture, Japan'),
('Ford Service Center','16800 Executive Plaza Drive, Dearborn, Michigan, USA'),
('BMW Service Center','Petuelring 130, Munich, Germany'),
('Volkswagen Service Center','Berliner Ring 2, Wolfsburg, Germany'),
('Audi Service Center','850 Stephenson Highway, Troy, Michigan, USA'),
('Honda Service Center','1-1-1 Minami-Aoyama, Minato-ku, Tokyo, Japan');

create table if not exists repairRel(
stationId int not null,
ownerId int not null,
repairDate date,
primary key(stationId, ownerId),
constraint fk_stationId foreign key (stationId) references repairStation(stationId)
on update cascade on delete cascade,
constraint fk_ownerIdRepair foreign key (ownerId) references carOwner(ownerId)
on update cascade on delete cascade
);


create table if not exists  haveServed(
serveBrandId int auto_increment primary key,
serveBrand varchar(20),
stationId int not null,
constraint fk_stationIdBrand foreign key (stationId) references repairStation(stationId)
on update cascade on delete cascade
);


create table if not exists insuranceProvider (
providerId int auto_increment primary key,
providerName varchar(20)
);
INSERT INTO insuranceProvider(providerName) VALUES
('AIG'),
('Allianz'),
('AXA'),
('Zurich Insurance Group'),
('Prudential Financial'),
('MetLife'),
('Ping An Insurance Group'),
('Manulife Financial'),
('China Life Insurance Co. LTD'),
('China Pacific Insurance (Group) Co. LTD');

create table if not exists insurancePhone(
phoneNumber VARCHAR(20) primary key,
providerId int not null,
constraint fk_providerId foreign key(providerId) references insuranceProvider(providerId)
on update cascade on delete cascade
);
INSERT INTO insurancePhone VALUES
('1-800-888-2452',1),
('1-800-888-2453',1),
('49-89-3800-0',2),
('49-89-3800-1',2),
('33-1-40-75-57-00',3),
('33-1-40-75-57-01',3),
('41-44-625-25-25',4),
('1-800-778-2255',5),
('1-800-638-5433',6),
('86-95511',6),
('1-888-626-8543',7),
('86-95519',8),
('86-95500',9);

create table if not exists insure(
ownerId int not null,
providerId int not null,
constraint fk_ownerIdInsure foreign key (ownerId) references carOwner(ownerId)
on update cascade on delete cascade,
constraint fk_providerIdInsure foreign key (providerId) references insuranceProvider(providerId)
on update cascade on delete cascade
);


create table if not exists provideType(
insuranceType varchar(20) primary key not null,
providerId int not null,
constraint fk_providerIdType foreign key (providerId) references insuranceProvider(providerId)
on update cascade on delete cascade
);


create table if not exists insurancePolicy(
policyId int auto_increment primary key,
descriptionOfPolicy varchar(200)
);

INSERT INTO insurancePhone(descriptionOfPolicy) VALUES
('This insurance covers the cost of damages and injuries caused to third parties in an accident that you are legally liable for.'),
('This type of insurance covers damages to your vehicle from incidents other than collisions, such as theft, vandalism, fire, and natural disasters.'),
('Collision insurance pays for damages to your vehicle caused by a collision with another vehicle or object, regardless of fault.'),
('Comprehensive coverage is a combination of various insurance types, typically including comprehensive, theft, and fire coverage.'),
('PIP covers medical expenses, lost wages, and other damages for you and your passengers in the event of an accident, regardless of fault.'),
('No-fault insurance covers medical expenses and other damages for you and your passengers, regardless of who caused the accident.'),
('These are optional additional coverages such as roadside assistance, rental car reimbursement, and glass coverage, which can be added to your policy based on your needs.');

create table if not exists provide(
providerId int not null,
policyId int not null,
primary key(policyId,providerId),
constraint fk_providerIdProvide foreign key (providerId) references insuranceProvider(providerId)
on update cascade on delete cascade,
constraint fk_policyIdProvide foreign key (policyId) references insurancePolicy(policyId)
on update cascade on delete cascade
);

INSERT INTO provide VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(1,6),
(1,7),
(2,1),
(2,2),
(2,3),
(2,5),
(2,6),
(3,1),
(3,2),
(3,4),
(3,5),
(3,7),
(4,2),
(4,3),
(4,6),
(4,7),
(5,1),
(5,3),
(5,5),
(5,6),
(6,1),
(6,3),
(6,6),
(6,7),
(7,1),
(7,2),
(7,3),
(7,7),
(7,1),
(8,3),
(8,6),
(9,3),
(9,4),
(9,5),
(9,6),
(9,7),
(10,1),
(10,2),
(10,3),
(10,5),
(10,6);








