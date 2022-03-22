-- Revert jobboard:jobFunctions from pg

BEGIN;

DROP FUNCTION add_job(json);
DROP FUNCTION update_job(json);

COMMIT;
