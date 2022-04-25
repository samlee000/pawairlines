const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./project_sdk.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
// --- DB Data Population ----
async function populate_customer(cusID, memID, admin, fname, lname) {
    const customer = db.collection('user').doc('test_user1');
    await customer.set({
        "customerID": cusID,
        "membershipID": memID,
        "isAdmin": admin,
        "customerFName": fname,
        "customerLName": lname
    })
}

async function populate_membership(memID, cusID, memType, memDuration) {
    const membership = db.collection('membership').doc('test_membership1')
    await membership.set({
        "membershipID": memID,
        "customerID": cusID,
        "membershipType": memType,
        "membershipDuration": memDuration
    })
}

async function populate_billing(billID, userID, routingNo, subtotal, total) {
    const billing = db.collection("billing").doc("test_bill1")
    await billing.set({
        "billID": billID,
        "userID": userID,
        "routingNo": routingNo,
        "subtotal": subtotal,
        "total": total
    })
}

async function populate_tickets() {
    
}

async function populate_pet() {
    
}

async function populate_baggage() {
    
}

async function populate_flight() {
    
}

async function populate_plane() {
    
}

async function populate_pilot() {
    
}
// const customer2 = db.collection('user').doc('test_user1');
// await customer2.set({
//     customerID: 2,
//     membershipID: 2,
//     isAdmin: false,
//     customerFName: "Sullivan",
//     customerLName: "Ross"
// })
//middleware
app.use(cors());
app.use(express.json());

//Routes

//Create flight
app.post("/flight", async (req, res) => {
    try {
        const { description } = req.body;
        const newFlight = await pool.query(
            "INSERT INTO flights (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newFlight.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get all flight
app.get("/flight", async (req, res) => {
    try {
        const allFlights = await pool.query("SELECT * FROM flights");
        res.json(allFlights.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//Get a flight
app.get("/flight/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const flight = await pool.query("SELECT * FROM flights WHERE flight_id = $1", 
            [id]
        );

        res.json(flight.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//Update a flight
app.put("/flight/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateFlight = await pool.query("UPDATE flights SET description = $1 WHERE flight_id = $2",
            [description, id]
        );

        res.json("Flight was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//Delete a flight
app.delete("/flight/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const deleteFlight = await pool.query("DELETE FROM flights WHERE flight_id = $1",
            [id]
        );

        res.json("Flight was deleted.");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});

populate_customer(1, 1, false, "John", "Doe")
populate_customer(2, 2, false, "Sullivan", "Ross")

