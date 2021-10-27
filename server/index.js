require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authController = require('./controllers/authController');
const partsController = require('./controllers/partsController');

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

app.get('/api/Home', partsController.computerParts);
app.get('/api/Home', authController.logout);
app.post('/api/Home', authController.register);
app.post('/api/Home', authController.login);

app.get('/api/Case', )
app.post('/api/Case', )

app.get('/api/Motherboard', )
app.post('/api/Motherboard', )

app.get('/api/CPU', )
app.post('/api/CPU', )

app.get('/api/GPU', )
app.post('/api/GPU', )

app.get('/api/Cooler', )
app.post('/api/Cooler', )

app.get('/api/Memory', )
app.post('/api/Memory', )

app.get('/api/Fans', )
app.post('/api/Fans', )

app.get('/api/PSU', )
app.post('/api/PSU', )

app.get('/api/Checkout', )
app.delete('/api/Checkout', )

app.listen(PORT, ()=> console.log(`listening on ${PORT}`))