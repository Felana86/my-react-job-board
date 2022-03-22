-- Verify jobboard:init on pg

BEGIN;

SELECT id FROM "user" WHERE false;
SELECT id FROM job WHERE false;

ROLLBACK;
