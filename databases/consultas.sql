CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT,
    password VARCHAR(40),
    address VARCHAR(40),
    image TEXT
);

INSERT INTO users (name, email, password) VALUES
        ('tes1', 'test1@email.com', '123456'),
        ('tes2', 'test2@email.com', '123456'),
        ('tes3', 'test3@email.com', '123456'),
        ('tes4', 'test4@email.com', '123456'),
        ('tes5', 'test5@email.com', '123456');