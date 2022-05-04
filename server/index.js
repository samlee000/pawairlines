const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());


//Routes

// //Create flight
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

// //Get all flight
app.get("/flight", async (req, res) => {
    try {
        const allFlights = await pool.query("SELECT * FROM flights");
        res.json(allFlights.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// //Get a flight
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

// //Update a flight
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

// //Delete a flight
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



// Create AdminBill
app.post("/adminbilling", async (req, res) => {
    try {
        const { subtotal } = req.body;
        const { total } = subtotal*1.1;
        const newBill = await pool.query(
            "INSERT INTO billing (subtotal, total) VALUES($1, $2) RETURNING *",
            [subtotal, total]
        );

        res.json(newBill.rows[0])
    } catch (err) {
        console.error(err.message);
    }
});

// Get all AdminBills (Bills for all users)
app.get("/adminbilling", async (req, res) => {
    try {
        const allBills = await pool.query(
            "SELECT * FROM billing"
        );
        res.json(allBills.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Get a bill
app.get("/adminbilling/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const bill = await pool.query(
            "SELECT * FROM billing WHERE bill_id = $1",
            [id]
        );

        res.json(flight.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Update a bill
app.put("/adminbilling/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { subtotal } = req.body;
        const { total } = subtotal*1.1;
        const updateBill = await pool.query(
            "UPDATE billing SET subtotal = $1, total = $2 WHERE bill_id = $3",
            [subtotal, total, id]
        );

        res.json("Bill was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

// Delete a bill
app.delete("/adminbilling/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBill = await pool.query(
            "DELETE FROM billing WHERE bill_id = $1",
            [id]
        );

        req.json("Bill was deleted");
    } catch (err) {
        console.error(err.message);
    }
});



// Create a new ticket with a new price
app.post("/ticketing", async (req, res) => {

});

// Get all current tickets
app.get("/ticketing", async (req, res) => {

});

// Get a ticket
app.get("/ticketing/:id", async (req, res) => {

});

// Update a ticket price
app.put("/ticketing/:id", async (req, res) => {

});

// Delete a ticket
app.delete("/adminbilling/:id", async (req, res) => {

});




app.listen(4000, () => {
    console.log("server has started on port 4000");
});