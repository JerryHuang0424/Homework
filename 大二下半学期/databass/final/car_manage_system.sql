drop database if exists car_manage_system;

create database if not exists car_manage_system;

use car_manage_system;buyfrom

create table if not exists carManufacture(
manufacturerId int auto_increment primary key not null,
manufactureName varchar(20),
yearFounded DATE,
location varchar(20)
);

create table if not exists manufacturerPhone(
phoneNumber int primary key not null,
manufacturerId int ,
constraint fk_manufacturerId1 foreign key (manufacturerId) references carManufacture(manufacturerId)
on update cascade on delete cascade
);

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

create table if not exists models(
carModelId int auto_increment primary key,
carModels varchar(20),
brandId int,
foreign key (brandId) references carBrand(brandId)
on update cascade on delete cascade
);
drop table models;

create table if not exists carPart(
partId int auto_increment primary key,
partName varchar(20),
partType varchar(20)
);

create table if not exists carMaterialNeed(
rawMaterialNeedId int auto_increment primary key,
rawMaterialNeed varchar(20),
partId int not null,
constraint fk_partIdForCarPart foreign key (partId) references carPart(partId)
on update cascade on delete cascade
);
drop table carMaterialNeed;

create table if not exists buyFrom(
partId int not null,
manufacturerId int not null,
primary key (partId,manufacturerId),
foreign key (partId) references carPart(partId)on update cascade on delete cascade,
foreign key (manufacturerId) references carManufacture(manufacturerId)
on update cascade on delete cascade
);
drop table buyFrom;

create table if not exists partSupplier(
partSupplierId int auto_increment primary key,
supplierName varchar(20),
supplierPhone int);
drop table partSupplier;

create table if not exists proBy(
partId int not null,
partSupplierId int not null,
primary key (partId,partSupplierId),
foreign key(partId) references carPart(partId) on update cascade on delete cascade,
foreign key(partSupplierId) references partSupplier(partSupplierId)
on update cascade on delete cascade
);
drop table proBy;


create table if not exists rawMaterial(
materialId int auto_increment primary key,
materialName varchar(20),
matericalType varchar(20)
);

create table if not exists proFrom(
partId int not null,
materialId int not null,
primary key(partId, materialId),
constraint fk_partId foreign key(partId) references carPart(partId) on update cascade on delete cascade,
constraint fk_matericalId foreign key(materialId) references rawMaterial(materialId)
on update cascade on delete cascade
);
drop table proFrom;


create table if not exists rawMaterialSupplier (
rawSupplierId int auto_increment primary key,
rawSupplierName varchar(20),
rawMaterial  varchar(20)
);

create table if not exists make(
materialId int not null,
rawSupplierId int not null,
primary key (materialId,rawSupplierId),
constraint fk_materialIdMake foreign key(materialId) references rawMaterial(materialId) on update cascade on delete cascade,
constraint fk_rawSupplierIdMake foreign key(rawSupplierId) references rawMaterialSupplier(rawSupplierId)
on update cascade on delete cascade
);
drop table make;

create table if not exists carDealer(
dealerId int auto_increment primary key,
dealerName varchar(20),
location varchar(50),
brandId int not null,
employeeId int not null,
foreign key (brandId) references carBrand(brandId)
on update cascade on delete cascade
);
drop table carDealer;
alter table carDealer add constraint fk_employeeId foreign key (employeeId) references employee(employeeId) on update cascade on delete cascade ;
alter table carDealer add startDate DATE;
alter table carDealer drop foreign key fk_employeeId;

create table if not exists haveSold(
brandSoldId int auto_increment primary key,
brandSold varchar(20),
dealerId int not null,
foreign key (dealerId) references carDealer(dealerId)
on update cascade on delete cascade
);
drop table haveSold;


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
drop table employee;

create table if not exists branch(
branchId int auto_increment primary key,
branchName varchar(20)
);
drop table branch;

create table if not exists workingHour(
employeeId int not null,
branchId int not null,
primary key(employeeId, branchId),
constraint fk_employeeIdWork foreign key (employeeId) references employee(employeeId),
constraint fk_branchIdWork foreign key (branchId) references branch(branchId)
on update cascade on delete cascade
);
drop table workingHour;

create table if not exists employeeFamMem(
employeeId int not null primary key,
fName varchar(20),
lName varchar(20),
constraint fk_employeeFam foreign key (employeeId) references employee(employeeId)
on update cascade on delete cascade
);
drop table employeeFamMem;

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
drop table carOwner;

create table if not exists ownerPhone(
phoneNum int auto_increment primary key,
phone int,
ownerId int not null,
constraint fk_ownerId foreign key (ownerId) references carOwner(ownerId)
on update cascade on delete cascade
);
drop table ownerPhone;

create table if not exists ownerCar(
ownerCarId int auto_increment primary key,
ownerCarBrand varchar(20),
ownerCarModel varchar(20),
buyDate DATE,
ownerId int not null,
constraint fk_ownerIdCar foreign key (ownerId) references carOwner(ownerId)
on update cascade on delete cascade
);
drop table ownerCar;

create table if not exists repairStation(
stationId int auto_increment primary key,
stationName varchar(20),
location varchar(50)
);
drop table repairStation;

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
drop table repairRel;

create table if not exists  haveServed(
serveBrandId int auto_increment primary key,
serveBrand varchar(20),
stationId int not null,
constraint fk_stationIdBrand foreign key (stationId) references repairStation(stationId)
on update cascade on delete cascade
);
drop table haveServed;

create table if not exists insuranceProvider (
providerId int auto_increment primary key,
providerName varchar(20)
);
drop table insuranceProvider;

create table if not exists insurancePhone(
phoneNumber int primary key,
providerId int not null,
constraint fk_providerId foreign key(providerId) references insuranceProvider(providerId)
on update cascade on delete cascade
);
drop table insurancePhone;

create table if not exists insure(
ownerId int not null,
providerId int not null,
constraint fk_ownerIdInsure foreign key (ownerId) references carOwner(ownerId)
on update cascade on delete cascade,
constraint fk_providerIdInsure foreign key (providerId) references insuranceProvider(providerId)
on update cascade on delete cascade
);
drop table insure;

create table if not exists provideType(
insuranceType varchar(20) primary key not null,
providerId int not null,
constraint fk_providerIdType foreign key (providerId) references insuranceProvider(providerId)
on update cascade on delete cascade
);
drop table providerType;

create table if not exists insurancePolicy(
policyId int auto_increment primary key,
descriptionOfPolicy varchar(200)
);
drop table insurancePolicy;

create table if not exists provide(
providerId int not null,
policyId int not null,
primary key(policyId,providerId),
constraint fk_providerIdProvide foreign key (providerId) references insuranceProvider(providerId)
on update cascade on delete cascade,
constraint fk_policyIdProvide foreign key (policyId) references insurancePolicy(policyId)
on update cascade on delete cascade
);
drop table provide;









