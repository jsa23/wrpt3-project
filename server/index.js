require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authController = require('./controllers/authController');
const partsController = require('./controllers/partsController');
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const bodyParser = require('body-parser');
const cors = require('cors');


const { CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

// app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

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
        cookie: {
             maxAge: 1000 * 60 * 60 
            }
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

app.put(`/api/checkout/:username`, partsController.updateUsername);
app.delete(`/api/checkout/:user_id`, partsController.deleteUser);

app.post('/payment', cors(), async (req, res) => {
let { amount, id} = req.body
try {
    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        payment_method: id,
        confirm: true
    })
    console.log("Payment", payment)
    res.json({
        message: "Payment successful",
        success: true
    })
    } catch (error) {
        console.log("Error", error)
        res.json({
            message: "Payment failed",
            success: false
        })
    }
})

app.listen(4500, ()=> 
console.log(`listening on 4500`))
