-- 1 --

CREATE TABLE actors_logging_table(
	log_id SERIAL,
	actor_name VARCHAR,
	insertion_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE OR REPLACE FUNCTION actor_insert_trigger_function() RETURNS TRIGGER
AS $$ 

BEGIN
    INSERT INTO actors_logging_table(actor_name)
	VALUES(NEW.name);
	
	RETURN NEW;
	
END; $$ LANGUAGE plpgsql;

CREATE TRIGGER actor_insert_trigger
AFTER INSERT ON actors
FOR EACH ROW
EXECUTE FUNCTION actor_insert_trigger_function();


INSERT INTO actors(actor_id, name, nationality, birth_year)
VALUES(12,'Tom Hardy', 'British', 1977);



SELECT * FROM actors;

SELECT * FROM actors_logging_table;

-- 2 --

CREATE OR REPLACE FUNCTION actor_delete_trigger_function() RETURNS TRIGGER 
AS $$

BEGIN

   RAISE NOTICE 'Row with id: %, and actor with name: % was deleted', OLD.actor_id, OLD.name;
   
   RETURN OLD;
   
END; $$ LANGUAGE plpgsql;

CREATE TRIGGER actor_delete_trigger
AFTER DELETE ON actors
FOR EACH ROW 
EXECUTE FUNCTION actor_delete_trigger_function();

DELETE FROM actors WHERE actor_id = 2;

-- 3 -- 

CREATE OR REPLACE PROCEDURE AddActor (
	IN actor_id INTEGER,
	IN actor_name VARCHAR,
	IN actor_nationality VARCHAR,
	IN actor_birth_year INTEGER
)

AS $$ 

BEGIN 

   INSERT INTO actors(actor_id, name, nationality, birth_year)
   
   VALUES(actor_id, actor_name, actor_nationality, actor_birth_year);
   
   COMMIT;
   
   END;
   
   $$ LANGUAGE plpgsql;
   
   CALL AddActor(13,'Joaquin Phoenix', 'American', 1974);
   
   SELECT * FROM actors;



