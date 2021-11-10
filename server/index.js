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
app.get('/api/logout', authController.logout);
app.post('/api/register', authController.register);
app.post('/api/login', authController.login);

app.get('/api/case', partsController.caseParts);
app.post('/api/case', )

app.get('/api/Motherboard', partsController.motherboardParts);
app.post('/api/Motherboard', )

app.get('/api/CPU', partsController.cpuParts);
app.post('/api/CPU', )

app.get('/api/GPU', partsController.gpuParts);
app.post('/api/GPU', )

app.get('/api/Cooler', partsController.coolerParts);
app.post('/api/Cooler', )

app.get('/api/Memory', partsController.memoryParts);
app.post('/api/Memory', )

app.get('/api/Fans', partsController.fanParts);
app.post('/api/Fans', )

app.get('/api/PSU', partsController.psuParts);
app.post('/api/PSU', )

app.get('/api/Checkout', )
app.put('/api/Checkout', )
app.delete('/api/Checkout', )

app.listen(PORT, ()=> console.log(`listening on ${PORT}`))

// app.get('/api/PSU', (req,res) => {
//     const psus = req.app.get('db').get_psu_parts(1);
//     return res.status(200).send(psus);
// });