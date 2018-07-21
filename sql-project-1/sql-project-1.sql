-- Level 1 ----------------------------------------------------------------

create database employees_demo;
use employees_demo;

CREATE TABLE `employees` (
    `emp_no` INT(11) NOT NULL AUTO_INCREMENT,
    `birth_date` DATE NOT NULL,
    `first_name` VARCHAR(14) NOT NULL,
    `last_name` VARCHAR(16) NOT NULL,
    `gender` ENUM('M', 'F') NOT NULL,
    `hire_date` DATE NOT NULL,
    PRIMARY KEY (`emp_no`)
);

INSERT INTO `employees_demo`.`employees`
(
`birth_date`,
`first_name`,
`last_name`,
`gender`,
`hire_date`)
VALUES
(
'1991-12-01',
'Surya',
'Raja',
'M',
'2004-02-02'),(
'2010-12-01',
'Jonathan',
'Sugiarto',
'M',
'2015-02-02'),(
'2010-12-01',
'Komarudin',
'Yaochuan',
'M',
'2015-02-02'),
(
'1994-12-01',
'Gommaar',
'Jonker',
'M',
'2014-02-02'),
(
'1977-01-01',
'Susi',
'Susanti',
'F',
'2014-02-02')
;

select * from employees;

-- Level 2 -------------------------------------------

CREATE TABLE `titles` (
  `emp_no` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `from_date` date NOT NULL,
  PRIMARY KEY (`emp_no`,`title`),
  CONSTRAINT `titles_ibfk_1` FOREIGN KEY (`emp_no`) REFERENCES `employees` (`emp_no`) ON DELETE CASCADE
) ;

INSERT INTO `titles`
(`emp_no`,
`title`,
`from_date`)
VALUES
('1', 'Senior Engineer', '2004-02-02'),
('2', 'Staff', '2015-02-02'),
('3', 'Senior Engineer', '2015-02-02'),
('4', 'Senior Staff', '2014-02-02'),
('5', 'Staff', '2014-02-02');

-- Level 2 -------------------------------------------

alter table titles add column `to_date` date DEFAULT '9999-01-01';
ALTER TABLE  `titles` DROP PRIMARY KEY , ADD PRIMARY KEY (emp_no,title,from_date);
select * from employees;

-- Level 3 -------------------------------------------

update  titles set to_date = '2014-02-22' where emp_no=5 ;

-- Level 4 -------------------------------------------
/*

1.Clone this source code from github:
https://github.com/datacharmer/test_db.git

2.Navigate to that folder.

3.And then run from terminal:
mysql < employees.sql

4.Watch sql-project-1-level-4-solution.gif

*/

-- Level 5 -------------------------------------------

use employees;

SELECT 
    e.emp_no,
    e.first_name,
    e.last_name,
    t.title,
    t.from_date,
    t.to_date
FROM
    employees e,
    titles t
WHERE
    e.emp_no = t.emp_no
        AND from_date <= '2018-07-20'
        AND to_date >= '2018-07-20';
        
-- Level 6 -------------------------------------------

SELECT 
    COUNT(e.emp_no) AS current_active_employee
FROM
    employees e,
    titles t
WHERE
    e.emp_no = t.emp_no
        AND from_date <= '2018-07-20'
        AND to_date >= '2018-07-20';
        
-- Level 7 -------------------------------------------

SELECT 
    t.title,count(e.emp_no) total
FROM
    employees e,
    titles t
WHERE
    e.emp_no = t.emp_no
        AND from_date <= '2018-07-20'
        AND to_date >= '2018-07-20' 
group by t.title;

-- Level 8 -------------------------------------------

SELECT 
    d.dept_name,
SUM(CASE WHEN e.gender='M' THEN 1 ELSE 0 END) AS Male,
SUM(CASE WHEN e.gender='F' THEN 1 ELSE 0 END) AS Female
FROM
    dept_emp de,
    departments d,
    employees e
WHERE
    e.emp_no = de.emp_no
        AND de.dept_no = d.dept_no
        AND de.from_date <= '2018-07-20'
        AND de.to_date >= '2018-07-20'
GROUP BY d.dept_no;

-- Level 9 -------------------------------------------


SELECT 
    d.dept_name,
SUM(CASE WHEN e.gender='M' THEN 1 ELSE 0 END) AS Male,
SUM(CASE WHEN e.gender='F' THEN 1 ELSE 0 END) AS Female
FROM
    dept_emp de,
    departments d,
    employees e
WHERE
    e.emp_no = de.emp_no
        AND de.dept_no = d.dept_no
        AND de.from_date <= '2018-07-20'
        AND de.to_date >= '2018-07-20'
GROUP BY d.dept_no
UNION ALL
SELECT 
    'TOTAL',
    SUM(CASE
        WHEN e.gender = 'M' THEN 1
        ELSE 0
    END) AS Male,
    SUM(CASE
        WHEN e.gender = 'F' THEN 1
        ELSE 0
    END) AS Female
FROM
    employees e,
         dept_emp de
WHERE
     e.emp_no = de.emp_no
        AND de.from_date <= '2018-07-20'
         AND de.to_date >= '2018-07-20'
;

-- Notes -------------------------------------------


