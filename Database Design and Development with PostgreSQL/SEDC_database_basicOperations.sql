SELECT * FROM employee;

-- Homework requirement 1/6 --

SELECT * FROM employee WHERE firstname = 'Marko';

SELECT * FROM employee WHERE dateofbirth > '01.01.1979';

SELECT * FROM employee WHERE gender = 'M';

SELECT * FROM employee WHERE lastname LIKE 'T%';

SELECT * FROM employee WHERE hiredate BETWEEN '2012.01.01' AND	'2012.12.31';

SELECT * FROM employee WHERE lastname LIKE 'T%' AND hiredate BETWEEN '2012.01.01' AND '2012.09.30';
	
-- Homework requirement 2/6 --

SELECT * FROM employee WHERE firstname = 'Marko' ORDER BY lastname ASC;

SELECT * FROM employee ORDER BY firstname ASC;

SELECT * FROM employee WHERE gender = 'M' ORDER BY hiredate DESC;

-- Homework requirement 3/6 --

SELECT region FROM businessentity
UNION ALL
SELECT regionname FROM customer;

SELECT region FROM businessentity
UNION
SELECT regionname FROM customer;

SELECT region FROM businessentity
INTERSECT
SELECT regionname FROM customer;

-- Homework requirement 4/6 --

CREATE TABLE NOT EXISTS "Order" (
	Id serial PRIMARY KEY NOT NULL,
    OrderDate date CHECK(OrderDate >= '2010-01-01'),
    Status smallint NULL,
    BusinessEntityId integer NULL,
    CustomerId integer NULL,
    EmployeeId integer NULL,
    TotalPrice float(2) NULL,
    Comment varchar(500) NULL
);

CREATE TABLE IF NOT EXISTS Product (
    Id serial PRIMARY KEY NOT NULL,
    Code varchar(50) NULL,
    Name varchar(100) NULL,
    Description varchar(5000) UNIQUE,
    Weight float(2) NULL,
    Cost float(2) NULL,
    Price float(2) CHECK (Price >= Cost * 1.2)
);
