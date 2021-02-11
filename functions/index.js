const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51IJQr5Asms3PohRp4qcznuTgiU2u3b9SLWmAcBOn1hA8B8LquEWp8PwMhXoNLEQY3wJ0QL6FSReRr62zcZFbc4dS00wFCpzut5"
);

// API

// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received: ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/blossoms-warehouse/us-central1/api