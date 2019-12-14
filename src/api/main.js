const express = require('express');
const server = express();
server.use(express.json());
// Define requests

const PLAN_COSTS = {
    basic: 1,
    good: 10,
    better: 100,
    best: 1000
};

const PLAN_NAMES = {
    basic: 'Basic',
    good: 'Good',
    better: 'Better',
    best: 'Best'
};

const CURRENCY_EXCHANGE = {
    USD: 1,
    CNY: 7,
    HKD: 7.81
};

let prevSubscription;
let storedSubscription = {
    plan: 'good',
    name: 'Good',
    seats: 5,
    cost: 50
};

const getCurrent = async (req, res) => {
    const currency = req.header('currency') || 'USD';

    if (!CURRENCY_EXCHANGE.hasOwnProperty(currency)) {
        res.status(400).json({error: "We currently do not support this type of currency"});
    }
    const newData = {...storedSubscription};
    newData.cost *= CURRENCY_EXCHANGE[currency];
    return res.json(newData);
};

const getPreview = async (req, res) => {
    const body = req.body;
    const seats = parseInt(body.seats, 10);
    const currency = req.header('currency') || 'USD';

    if (!body.plan || !PLAN_COSTS.hasOwnProperty(body.plan)) {
        res.status(400).json({error: "Please provide a correct plan"});
    }

    if (!body.seats) {
        res.status(400).json({error: "Please provide the number of seats"});
    }

    if (isNaN(seats)) {
        res.status(400).json({error: "Please provide an integer for number of seats"});
    }

    if (!CURRENCY_EXCHANGE.hasOwnProperty(currency)) {
        res.status(400).json({error: "We currently do not support this type of currency"});
    }

    const response = {
        plan: body.plan,
        name: PLAN_NAMES[body.plan],
        seats,
        cost: seats * PLAN_COSTS[body.plan] * CURRENCY_EXCHANGE[currency]
    };
    return res.json(response);
};

const updateCurrent = async (req, res) => {
    const body = req.body;
    const seats = parseInt(body.seats, 10);
    const currency = req.header('currency') || 'USD';

    if (!body.plan || !PLAN_COSTS.hasOwnProperty(body.plan)) {
        res.status(400).json({error: "Please provide a correct plan"});
    }

    if (!body.seats) {
        res.status(400).json({error: "Please provide the number of seats"});
    }

    if (isNaN(seats)) {
        res.status(400).json({error: "Please provide an integer for number of seats"});
    }

    if (!CURRENCY_EXCHANGE.hasOwnProperty(currency)) {
        res.status(400).json({error: "We currently do not support this type of currency"});
    }

    const newData = {
        plan: body.plan,
        name: PLAN_NAMES[body.plan],
        seats,
        cost: seats * PLAN_COSTS[body.plan]
    };

    prevSubscription = storedSubscription;
    storedSubscription = newData;
    const responseData = {...newData};
    responseData.cost *= CURRENCY_EXCHANGE[currency];
    return res.json(responseData);
};

// Define routes
server.get("/api/current", getCurrent);
server.put("/api/current", updateCurrent);
server.post("/api/preview", getPreview);

// start the server
server.listen(8080, () => console.log("API server is running on port 8080"));
