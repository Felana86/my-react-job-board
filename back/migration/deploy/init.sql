-- Deploy jobboard:init to pg

BEGIN;

CREATE TABLE "user" (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL 
);

CREATE TABLE job (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    company TEXT NOT NULL,
    technology TEXT NOT NULL,
    locality TEXT NOT NULL,
    contract TEXT NOT NULL,
    salary TEXT NOT NULL,
    user_id INT NOT NULL REFERENCES "user"(id)
);

COMMIT;
