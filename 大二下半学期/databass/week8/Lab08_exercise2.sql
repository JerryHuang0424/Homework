use library;
select * from book;

update book 
set price ='28.00'
where ISBN='133312345';

update bookcopy
set dateAcquired ='2023-09-13'
where ISBN='133312345';

select * from bookcopy;

commit;

rollback;

delete from bookcopy where ISBN ='133312345';
commit;

