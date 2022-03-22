-- Deploy jobboard:jobFunctions to pg

BEGIN;

CREATE FUNCTION add_job(json) RETURNS job AS $$
    INSERT INTO job (title, description, company, technology, locality, contract, salary, user_id)
    VALUES(
		$1->>'title', 
		$1->>'description', 
		$1->>'company', 
		$1->>'technology', 
		$1->>'locality',
        $1->>'contract',
        $1->>'salary', 
		($1->>'user_id')::int
	)
    RETURNING *
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION update_job(json) RETURNS void AS $$
    UPDATE job SET
		title=$1->>'title', 
		description=$1->>'description', 
		company=$1->>'company', 
		technology=$1->>'technology', 
		locality=$1->>'locality',
        contract=$1->>'contract',
        salary=$1->>'salary', 
		user_id=($1->>'user_id')::int
		WHERE id=($1->>'id')::int
$$ LANGUAGE SQL STRICT;

COMMIT;
