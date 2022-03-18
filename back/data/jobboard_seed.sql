BEGIN;

INSERT INTO "user"(firstname, lastname, email, password, role) VALUES
('Felana', 'Letrange', 'felana@oclock.io', 'Felana', 'admin'),
('Caroline', 'Wiese', 'caroline@oclock.io', 'Caroline', 'admin'),
('Florian', 'Brun-Buisson', 'florian@oclock.io', 'Florian', 'admin'),
('Florian', 'Delobelle', 'flodelo@oclock.io', 'Florian', 'admin'),
('Alexandre', 'Chochois', 'alexandre@oclock.io', 'Alexandre', 'admin');

INSERT INTO job(title, description, company, technology, locality, contract, salary, user_id) VALUES
('ReactJOb', 'lorem ipsum', 'M&M','react', 'à domicile', 'CDI', 50, 1),
('React', 'lorem ipsum', 'ME','react', 'POITIERS', 'CDI', 50, 1),
('React', 'lorem ipsum', 'M&M','react', 'à domicile', 'CDI', 50, 1),
('ReactJOb', 'lorem ipsum', 'M&M','react', 'à domicile', 'CDI', 50, 1);

COMMIT;

