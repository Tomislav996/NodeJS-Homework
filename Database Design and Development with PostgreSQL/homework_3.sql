-1-

SELECT * FROM facilities;

-2-

SELECT * FROM facilities
INNER JOIN bookings ON facilities.facid = bookings.facid
WHERE facilities.membercost > 0;

-3-

SELECT facid, name, membercost, monthlymaintenance 
FROM facilities
WHERE membercost < monthlymaintenance/50;

-4-

SELECT * FROM facilities
WHERE name LIKE '%2';

-5-

SELECT MAX(joindate) AS last_join_date
FROM members;

-6-

SELECT surname, firstname, joindate
FROM members
INNER JOIN (
    SELECT MAX(joindate) AS last_join_date
    FROM members
) last_joined ON joindate = last_joined.last_join_date;

-7-

SELECT facid, COUNT(facid) AS total_slots
FROM bookings
GROUP BY facid
ORDER BY facid ASC;

-8-

SELECT COUNT(DISTINCT memid) AS total_members
FROM bookings;

-9-

SELECT ROW_NUMBER() OVER (ORDER BY joindate ASC) AS member_number, *
FROM members;

--The ROW_NUMBER() function generates a unique number for each row (monotonicallyincreasing), 
--The OVER clause specifies the ordering criteria. 
--In this case, ORDER BY joindate is used to order the rows by the joindate column.

-10-

SELECT starttime FROM bookings
INNER JOIN
members on bookings.memid = members.memid
WHERE members.surname = 'Farrell' AND members.firstname = 'David';

-11-

SELECT bookings.starttime, facilities.name as facility_name
FROM bookings
INNER JOIN facilities ON bookings.facid = facilities.facid
WHERE facilities.name LIKE 'Tennis Court%'
AND DATE(bookings.starttime) = '2012-09-21'
ORDER BY starttime ASC;

-12-

SELECT DISTINCT recommended.surname, recommended.firstname 
FROM members recommender
INNER JOIN members recommended ON recommender.memid = recommended.recommendedby
ORDER BY recommended.surname, recommended.firstname;
