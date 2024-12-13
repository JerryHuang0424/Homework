use employeeDetails;

SELECT * FROM Employee;

SELECT * FROM Employee WHERE dName IN ('HR', 'Computing');

SELECT * FROM Employee WHERE DOB BETWEEN '1980-01-01' AND '1990-12-31';

SELECT * FROM Employee WHERE lName LIKE '%son%';

SELECT  concat(fName,' ', lName) as 'Name', TIMESTAMPDIFF(YEAR, DOB, CURDATE()) AS age FROM Employee;

select fName, lName ,project.projCode, department.dName, loaction
from employee join project 
on employee.dName=project.dName
join department on employee.dName=department.dName;

SELECT d.dName, AVG(e.salary) AS avg_salary
FROM Employee e
JOIN Department d ON e.dName = d.dName
GROUP BY d.dName;


SELECT d.dName, AVG(e.salary) AS avg_salary
FROM Employee e
JOIN Department d ON e.dName = d.dName
GROUP BY d.dName;

SELECT d.dName, AVG(e.salary) AS avg_salary
FROM Employee e
JOIN Department d ON e.dName = d.dName
GROUP BY d.dName
HAVING avg_salary > 70000;

SELECT * FROM Employee ORDER BY salary DESC;

SELECT p.description, p.budget, d.dName
FROM Project p
LEFT JOIN Department d ON p.dName = d.dName;