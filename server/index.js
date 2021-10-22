require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');

const PORT = 5050;

const { CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('db connected');
});

app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET,
    })
);

app.listen(PORT, ()=> console.log(`listening on ${PORT}`))