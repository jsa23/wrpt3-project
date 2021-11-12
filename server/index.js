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

app.get('/api/home', partsController.computerParts);
app.get('/api/logout', authController.logout);
app.post('/api/register', authController.register);
app.post('/api/login', authController.login);

app.get('/api/case', partsController.caseParts);
app.post('/api/case', )

app.get('/api/motherboard', partsController.motherboardParts);
app.post('/api/motherboard', )

app.get('/api/cpu', partsController.cpuParts);
app.post('/api/cpu', )

app.get('/api/gpu', partsController.gpuParts);
app.post('/api/gpu', )

app.get('/api/cooler', partsController.coolerParts);
app.post('/api/cooler', )

app.get('/api/memory', partsController.memoryParts);
app.post('/api/memory', )

app.get('/api/fans', partsController.fanParts);
app.post('/api/fans', )

app.get('/api/psu', partsController.psuParts);
app.post('/api/psu', )

app.get('/api/checkout', )
app.put('/api/checkout', )
app.delete('/api/checkout', )

app.listen(PORT, ()=> console.log(`listening on ${PORT}`))

// app.get('/api/PSU', (req,res) => {
//     const psus = req.app.get('db').get_psu_parts(1);
//     return res.status(200).send(psus);
// });