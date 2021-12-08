SELECT *
FROM transactions
JOIN users ON users.user_id = transactions.user_id;