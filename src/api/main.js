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

let prevSubscription;
let storedSubscription = {
    plan: 'good',
    name: 'Good',
    seats: 5,
    cost: 50
};

const getCurrent = async (req, res) => {
    return res.json(storedSubscription);
};

const getPreview = async (req, res) => {
    const body = req.body;
    const seats = parseInt(body.seats, 10);

    if (!body.plan || !PLAN_COSTS.hasOwnProperty(body.plan)) {
        res.status(400).json({error: "Please provide a correct plan"});
    }

    if (!body.seats) {
        res.status(400).json({error: "Please provide the number of seats"});
    }

    if (isNaN(seats)) {
        res.status(400).json({error: "Please provide an integer for number of seats"});
    }

    const response = {
        plan: body.plan,
        name: PLAN_NAMES[body.plan],
        seats,
        cost: seats * PLAN_COSTS[body.plan]
    };
    return res.json(response);
};

const updateCurrent = async (req, res) => {
    const body = req.body;
    const seats = parseInt(body.seats, 10);

    if (!body.plan || !PLAN_COSTS.hasOwnProperty(body.plan)) {
        res.status(400).json({error: "Please provide a correct plan"});
    }

    if (!body.seats) {
        res.status(400).json({error: "Please provide the number of seats"});
    }

    if (isNaN(seats)) {
        res.status(400).json({error: "Please provide an integer for number of seats"});
    }

    const newData = {
        plan: body.plan,
        name: PLAN_NAMES[body.plan],
        seats,
        cost: seats * PLAN_COSTS[body.plan]
    };

    prevSubscription = storedSubscription;
    storedSubscription = newData;
    return res.json(storedSubscription);
};

// Define routes
server.get("/api/current", getCurrent);
server.put("/api/current", updateCurrent);
server.post("/api/preview", getPreview);

// start the server
server.listen(8080, () => console.log("API server is running on port 8080"));
