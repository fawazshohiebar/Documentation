SELECT name from students;
select * from students  WHERE Age>30;
select name from students WHERE  Gender="female" AND Age>30;
select Points from students WHERE name="Alex"
INSERT INTO students (name, Age,Gender,Points) VALUES ("fawaz",21, "male", 681);

UPDATE students SET Points = 500 where Name='Basma'

UPDATE students SET Points = 150 where Name='Alex'




CREATE TABLE graduates (
    ID int NOT NULL  ,
    Name varchar(255) NOT NULL UNIQUE,
    Age INT,
    Gender varchar(255),
    Points varchar(255),
	Graduation varchar(255),
	  PRIMARY KEY (ID)
);


INSERT INTO graduates VALUES (1,'Layal' , 18 , 'M',300, 08/09/2018) ; 


DELETE  FROM students WHERE (name = 'layla');


SELECT employees.Name , companies.Name
From employees ,companies

Where companies.name=employees.company ;






SELECT employees.Name ,companies.Date
From employees ,companies

Where companies.name=employees.company  And companies.Date<2000;




SELECT Company ,Role
    FROM employees
	WHERE Role="Graphic Designer";
    




	SELECT Name ,  max(Points) from students ;


    SELECT avg(Points) from students;



    SELECT count(Points) from students where Points=500;


    SELECT name FROM students
WHERE name LIKE '%s%';


select * from students
ORDER By Points DESC;