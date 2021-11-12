CREATE TABLE transactions (
    user_id SERIAL PRIMARY KEY,
    number_of_items INTEGER,
    created_at DATE,
    total INTEGER
);

INSERT INTO transactions
(number_of_items, created_at, total)
VALUES
();


CREATE TABLE items (
    item_number SERIAL PRIMARY KEY,
    item_image VARCHAR(500),
    item_name VARCHAR(240),
    item_type VARCHAR(50),
    stars INTEGER,
    price INTEGER
);

INSERT INTO items
(item_image, item_name, item_type, stars, price)
VALUES
()


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(120),
    hash text
);

INSERT INTO users
(username, hash)
VALUES
();