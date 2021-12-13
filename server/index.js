require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
// const cors = require('cors')
const authController = require('./controllers/authController');
const partsController = require('./controllers/partsController');


const { CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

// app.use(cors())

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
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: { maxAge: 60000 },
    })
);

// app.use(express.static(`${__dirname}/../build`));

app.get('/api/home', partsController.computerParts);
app.get('/api/logout', authController.logout);
app.post('/api/register', authController.register);
app.post('/api/login', authController.login);

app.get('/api/cases', partsController.caseParts);

app.get('/api/motherboards', partsController.motherboardParts);

app.get('/api/cpus', partsController.cpuParts); 

app.get('/api/gpus', partsController.gpuParts);

app.get('/api/coolers', partsController.coolerParts);

app.get('/api/memory', partsController.memoryParts);

app.get('/api/fans', partsController.fanParts);

app.get('/api/psus', partsController.psuParts);

app.get('/api/checkout', )
app.put('/api/checkout', )
app.delete('/api/checkout', )

app.listen(4500, ()=> console.log(`listening on 4500`))
