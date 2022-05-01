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


// //Get all tickets
app.get("/seat", async (req, res) => {
    try {
        const allTickets = await pool.query("SELECT * FROM tickets");
        res.json(allTickets.rows);
    } catch (err) {
        console.error(err.message);
    }
});


// //Get a ticket
app.get("/seat/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const ticket = await pool.query("SELECT * FROM tickets WHERE ticket_id = $1", 
            [id]
        );

        res.json(ticket.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})


// //Update seat number of ticket
app.put("/seat/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { seat_number } = req.body;
        const updateSeat = await pool.query("UPDATE tickets SET seat_number = $1 WHERE ticket_id = $2",
            [seat_number, id]
        );

        res.json("Seat number was updated!");
    } catch (err) {
        console.error(err.message);
    }
});


// //Create a baggage
app.post("/baggage", async (req, res) => {
    try {
        const { ticket_id } = req.body;
        const newBaggage = await pool.query(
            "INSERT INTO baggage (ticket_id) VALUES($1) RETURNING *",
            [ticket_id]
        );

        res.json(newBaggage.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// //Get all baggage
app.get("/baggage", async (req, res) => {
    try {
        const allBaggage = await pool.query("SELECT * FROM baggage");
        res.json(allBaggage.rows);
    } catch (err) {
        console.error(err.message);
    }
});


// //Get a baggage
app.get("/baggage/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const baggage = await pool.query("SELECT * FROM baggage WHERE baggage_id = $1", 
            [id]
        );

        res.json(baggage.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})


// //Update baggage type
app.put("/baggage/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { baggage_type } = req.body;
        const updateBaggage = await pool.query("UPDATE baggage SET baggage_type = $1 WHERE baggage_id = $2",
            [baggage_type, id]
        );

        res.json("Baggage was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

// //Delete baggage option
app.delete("/baggage/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { baggage_type } = req.body;
        const deleteBaggage = await pool.query("DELETE FROM baggage WHERE baggage_id = $1",
            [id]
        );

        res.json("Baggage was deleted.");
    } catch (err) {
        console.error(err.message);
    }
});




app.listen(4000, () => {
    console.log("server has started on port 4000");
});