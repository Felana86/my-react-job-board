-- Revert jobboard:userFunctions from pg

BEGIN;

DROP FUNCTION add_user(json);
DROP FUNCTION update_user(json);

COMMIT;
