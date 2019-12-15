const express = require('express');
const cors_proxy = require('cors-anywhere');
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

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

const getCurrent = async (req, res) => {
    const currency = req.header('currency') || 'USD';

    if (!CURRENCY_EXCHANGE.hasOwnProperty(currency)) {
        return res.status(400).json({error: "We currently do not support this type of currency"});
    }
    const newData = {...storedSubscription};
    newData.cost *= CURRENCY_EXCHANGE[currency];

    await timeout(2000);
    return res.json(newData);
};

const getPreview = async (req, res) => {
    const body = req.body;
    const seats = parseInt(body.seats, 10);
    const currency = req.header('currency') || 'USD';

    if (!body.plan || !PLAN_COSTS.hasOwnProperty(body.plan)) {
        return res.status(400).json({error: "Please provide a correct plan"});
    }

    if (isNaN(seats)) {
        return res.status(400).json({error: "Please provide an integer for number of seats"});
    }

    if (!CURRENCY_EXCHANGE.hasOwnProperty(currency)) {
        return res.status(400).json({error: "We currently do not support this type of currency"});
    }

    const response = {
        plan: body.plan,
        name: PLAN_NAMES[body.plan],
        seats,
        cost: seats * PLAN_COSTS[body.plan] * CURRENCY_EXCHANGE[currency]
    };

    await timeout(1000);
    return res.json(response);
};

const updateCurrent = async (req, res) => {
    const body = req.body;
    const seats = parseInt(body.seats, 10);
    const currency = req.header('currency') || 'USD';

    if (!body.plan || !PLAN_COSTS.hasOwnProperty(body.plan)) {
        return res.status(400).json({error: "Please provide a correct plan"});
    }

    if (isNaN(seats)) {
        return res.status(400).json({error: "Please provide an integer for number of seats"});
    }

    if (!CURRENCY_EXCHANGE.hasOwnProperty(currency)) {
        return res.status(400).json({error: "We currently do not support this type of currency"});
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

    await timeout(1000);
    return res.json(responseData);
};

// Define routes
server.get("/api/current", getCurrent);
server.put("/api/current", updateCurrent);
server.post("/api/preview", getPreview);

// start the server
cors_proxy.createServer({
    originWhitelist: ['http://localhost:3000'],
    requireHeader: ['Content-Type', 'currency']
}).listen(3002, () => console.log("cors anywhere server is running on port 3002"));
server.listen(8080, () => console.log("API server is running on port 8080"));
