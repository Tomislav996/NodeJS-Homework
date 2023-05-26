-- 1 -- 

SELECT COUNT(grade) as total_grades
FROM grade;

-- 2 --

SELECT teacherid, COUNT(grade) as grades_per_teacher
FROM grade
GROUP BY teacherid;

-- 3 --

SELECT teacherid, COUNT(grade) as grades_per_teacher
FROM grade
WHERE studentid < 5
GROUP BY teacherid;

-- 4 --

SELECT studentid, MAX(grade) as maximal_grade , AVG(grade) as average_grade
FROM grade
GROUP BY studentid;

-- 5 -- 

SELECT teacherid, COUNT(grade) as grades_per_teacher
FROM grade
GROUP BY teacherid
HAVING COUNT(grade) < 6;

-- 6 --

SELECT teacherid, COUNT(grade) as grades_per_teacher
FROM grade
WHERE studentid < 5
GROUP BY teacherid
HAVING COUNT(grade) < 5;

-- 7,8 --

SELECT studentid, firstname, lastname,  COUNT(grade) as total_grades,
MAX(grade) as maximum_grade, AVG(grade) as average_grade
FROM grade
INNER JOIN student ON grade.studentid = student.id
GROUP BY studentid, firstname, lastname
HAVING MAX(grade) = AVG(grade);

-- VIEWS --

-- 9 --

CREATE VIEW vw_StudentGrades as
SELECT studentid, COUNT(grade) as total_grades
FROM grade
GROUP BY studentid;

SELECT * FROM vw_StudentGrades;

-- 10 --

DROP VIEW vw_StudentGrades;

CREATE OR REPLACE VIEW  vw_StudentGrades as
SELECT firstname, lastname, COUNT(grade) as total_grades
FROM grade
INNER JOIN student ON grade.studentid = student.id
GROUP BY studentid, firstname, lastname;

-- 11 --

SELECT * FROM vw_StudentGrades 
ORDER BY total_grades DESC;

-- 12 -- 

CREATE OR REPLACE VIEW  vw_StudentGradesDetails as
SELECT student.firstname, student.lastname, COUNT(grade.courseid) as passed_courses
FROM student
INNER JOIN grade on student.id = grade.studentid
WHERE grade > 67
GROUP BY student.firstname, student.lastname;

SELECT * FROM vw_StudentGradesDetails;

-- Built-in functions --

-- 13 --

SELECT name, (price + cost) /weight as calculation
FROM product;

-- 14 --

SELECT ceil(cost) as cost_ceil,
floor(price) as price_floor
FROM product;

-- 15 --

SELECT id, floor(random() * 100) as random_number
FROM product;

-- 16 --

SELECT concat(name, ',', region, ',', zipcode, ',') as info
FROM businessentity;

-- 17 -- 

CREATE TEMPORARY TABLE test_table (
	lastname VARCHAR(500),
	hiredate DATE CHECK(hiredate <= '2010-01-01')
);

INSERT INTO test_table (lastname, hiredate)
VALUES
  ('Smith', '2009-05-10'),
  ('Johnson', '2008-12-15'),
  ('Williams', '2006-01-01'),
  ('Brown', '2005-02-20'), 
  ('Jones', '2007-07-01');
  
SELECT * FROM test_table;

-- FUNCTIONS -- 

-- 18 --

CREATE FUNCTION get_employees_hired_later_than(hire_date DATE) RETURNS TABLE (full_name text, Age_of_employee_on_hiring numeric(2,5), National_ID_and_Gender text)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT CONCAT(firstname, ' ', lastname) AS full_name,
           EXTRACT(YEAR FROM AGE(hiredate, dateofbirth)) AS Age_of_employee_on_hiring,
           CONCAT(nationalidnumber, '; ', gender) AS National_ID_and_Gender
    FROM employee
    WHERE hiredate > hire_date;
END $$;

SELECT * FROM get_employees_hired_later_than('2013-01-01');


-- 19 --

CREATE FUNCTION get_employee_orders(employee_id INT) RETURNS TABLE (Product_info text, quantity_of_order INT, business_entity_name  VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
RETURN QUERY
    SELECT LEFT(product.name, 3) || '; ' || RIGHT(product.code, 3) || '; ' || product.description AS Product_info,
           orderdetails.quantity AS quantity_of_order,
           businessentity.name AS business_entity_name
    FROM "Order"
    INNER JOIN orderdetails ON "Order".id = orderdetails.orderid
    INNER JOIN product ON orderdetails.productid = product.id
    INNER JOIN businessentity ON "Order".businessentityid = businessentity.id
    WHERE "Order".employeeid = employee_id;
END $$

SELECT * FROM get_employee_orders(1);
