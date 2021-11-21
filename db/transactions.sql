SELECT *
FROM users
JOIN transactions ON users.user_id = transactions.user_id;