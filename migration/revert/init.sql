-- Revert jobboard:init from pg

BEGIN;

DROP TABLE "user", job;

COMMIT;
