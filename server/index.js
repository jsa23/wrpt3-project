const express = require('express');
const massive = require('massive');
require('dotenv').config();
const session = require('express-session');
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const { logout, register, login } = require('./controllers/authController')
const { caseParts, coolerParts, cpuParts, fanParts, gpuParts, memoryParts, motherboardParts,
    psuParts, updateUsername, deleteUser } = require('./controllers/partsController');
const cors = require('cors');


const app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret:process.env.SESSION_SECRET,
    cookie: {
        maxAge:(1000 * 60 * 100)
    }      
}))

massive({     
    connectionString:process.env.CONNECTION_STRING,
    ssl: { 
        rejectUnauthorized:false
    }
}).then((db)=> {
    app.set('db', db);  
    console.log('db connected');
}).catch((err) => {
     console.log('Datbase Connecton Error', err)
})

// if (process.env.NODE_ENV === 'production') {
//     // Exprees will serve up production assets
//     app.use(express.static('client/build'));
  
//     // Express serve up index.html file if it doesn't recognize route
//     const path = require('path');
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
//   }


app.use(express.static(`${__dirname}/../build`));

app.get('/api/logout', logout);
app.post('/api/register', register);
app.post('/api/login', login);

app.get('/api/cases', caseParts);

app.get('/api/motherboards', motherboardParts);

app.get('/api/cpus', cpuParts); 

app.get('/api/gpus', gpuParts);

app.get('/api/coolers', coolerParts);

app.get('/api/memory', memoryParts);

app.get('/api/fans', fanParts);

app.get('/api/psus', psuParts);

app.put(`/api/checkout`, updateUsername);

app.delete(`/api/checkout/:user_id`, deleteUser);

app.post('/api/payment', cors(), async (req, res) => {
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

const port = process.env.PORT || 5432;

app.listen(port, () => 
console.log(`listening on 5432`))
