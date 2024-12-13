use library;


insert into book value('133312345','Learning SQL','O Reilly','2009-05-08',' Computing','25.00');
select * from book where ISBN='133312345';

insert into bookcopy (ISBN, dateAcquired) value ('133312345','2023-09-01'),('133312345','2023-09-01'),('133312345','2023-09-01');
select * from bookcopy where ISBN='133312345';

insert into author(aName,ISBN) value ('Adam Beauleau', '133312345');
select * from author where aName='Adam Beauleau' ;

commit;


