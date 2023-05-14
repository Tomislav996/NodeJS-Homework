CREATE TABLE Teacher (
	ID integer PRIMARY KEY NOT NULL,
	FirstName varchar(20) NOT NULL,
	LastName varchar (30) NOT NULL,
	DateOfBirth date NOT NULL,
	AcademicRank varchar(20) NOT NULL,
	HireDate date NOT NULL
);

CREATE TABLE Grade (
	ID integer PRIMARY KEY NOT NULL,
	StudentID integer NOT NULL,
	CourseID integer NOT NULL,
	TeacherID integer NOT NULL,
	Grade smallint NOT NULL,
	Comment varchar(100) NOT NULL,
	CreateDate date NOT NULL
);

CREATE TABLE Student (
	ID integer PRIMARY KEY NOT NULL,
	FirstName varchar(20) NOT NULL,
	LastName varchar (30) NOT NULL,
	DateOfBirth date NOT NULL,
	EnrolledDate date NOT NULL,
	Gender nchar(1) NOT NULL,
	NationalIDNumber integer NOT NULL,
	StudentCardNumber integer NOT NULL
);

CREATE TABLE Course (
	ID integer PRIMARY KEY NOT NULL,
	Name varchar (50) NOT NULL,
	Credit integer NOT NULL,
	AcademicYear integer NOT NULL,
	Semester integer NOT NULL
);

CREATE TABLE AchievementType (
	ID integer PRIMARY KEY NOT NULL,
	Name varchar (50) NOT NULL,
	Description varchar (50) NOT NULL,
	ParticipationRate numeric(5,2) NOT NULL
);

CREATE TABLE GradeDetails (
	ID integer PRIMARY KEY NOT NULL,
	GradeID integer NOT NULL,
	AchievementTypeID integer NOT NULL,
	AchievementPoints integer NOT NULL,
	AchievementMaxPoints integer NOT NULL,
	AchievementDate date NOT NULL
);

SELECT * FROM teacher
SELECT * FROM grade
SELECT * FROM student
SELECT * FROM course
SELECT * FROM achievementtype
SELECT * FROM gradedetails
