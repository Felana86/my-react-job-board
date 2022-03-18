-- Deploy jobboard:userFunctions to pg

BEGIN;

CREATE FUNCTION add_user(json) RETURNS "user" AS $$
    INSERT INTO "user" (firstname, lastname, email, password, role)
    VALUES(
		$1->>'firstname', 
		$1->>'lastname', 
		$1->>'email', 
		$1->>'password', 
		$1->>'role'
	)
	RETURNING *
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION update_user(json) RETURNS void AS $$
    UPDATE "user" SET
		firstname=$1->>'firstname', 
		lastname=$1->>'lastname', 
		email=$1->>'email', 
		password=$1->>'password', 
		role=$1->>'role'
	WHERE id=($1->>'id')::int
$$ LANGUAGE SQL STRICT;

COMMIT;
