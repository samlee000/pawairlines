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
        console.log(description)
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


// //Create user
app.post("/user", async (req, res) => {
    try {
        var data = req.body;
        const newUser = await pool.query(
            "INSERT INTO users (first_name, last_name, age, gender, user_address, user_email, phone_number) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [data.first_name, data.last_name, data.age, data.gender, data.user_address, data.user_email, data.phone_number]
        );

        res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// //Get all users
app.get("/user", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// //Get a user
app.get("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1", 
            [id]
        );

        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// Get a user's user_id from email
app.get("/useridfromemail/:email", async (req, res) => {
    try {
        console.log("In useridfromemail");
        const { email } = req.params;
        console.log(email);
        const user_id = await pool.query("SELECT user_id FROM users WHERE email = $1",
            [email]
        );
    } catch (err) {
        console.error(err.message);
    }
});

// //Update a user
app.put("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        var data = req.body;
        const updateUser = await pool.query("UPDATE users SET first_name = $1, last_name = $2, age = $3, gender = $4, user_address = $5, user_email = $6, phone_number =$7 WHERE user_id = $8",
            [data.first_name, data.last_name, data.age, data.gender, data.user_address, data.user_email, data.phone_number, id]
        );

        res.json("Flight was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

// //Delete a user
app.delete("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { first_name } = req.body;
        const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1",
            [id]
        );

        res.json("User was deleted.");
    } catch (err) {
        console.error(err.message);
    }
});


// Insert new bill (admin only)
app.post("/admin_bill", async (req, res) => {
    try {
        var data = req.body;
        var total = parseFloat(data.subtotal) * 1.1;
        const newBill = await pool.query(
            "INSERT INTO billing (subtotal, total, user_id) VALUES($1, $2, $3) RETURNING *",
            [data.subtotal, total, data.user_id]
        );

        res.json(newBill.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Get all bills for all users (admin only)
app.get("/admin_bill", async (req, res) => {
    try {
        const allBills = await pool.query(
            "SELECT * FROM billing"
        );
        res.json(allBills.rows);
    } catch (err) {
        console.error(err.message)
    }
});

// Get bills for current user (user)
app.get("/user_bill/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const userBills = await pool.query(
            "SELECT * FROM billing WHERE user_id = $1",
            [id]
        );
        res.json(userBills.rows);
    } catch (err) {
        console.error(err.message)
    }
});

// Get a bill from any user (admin only)
app.get("/admin_bill/:id", async (req, res) => {
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

// Get a current bill (user)

// Update bill (admin only)
app.put("/admin_bill/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { subtotal } = req.body;
        var total = parseFloat(subtotal) * 1.1;
        const updateBill = await pool.query(
            "UPDATE billing SET subtotal = $1, total = $2 WHERE bill_id = $3",
            [subtotal, total, id]
        );

        res.json("Bill was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

// Delete bill (admin only)
app.delete("/admin_bill/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBill = await pool.query(
            "DELETE FROM billing WHERE bill_id = $1",
            [id]
        );
        res.json("Bill was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});



// Create a new ticket with a new price (admin)
app.post("/ticketing", async (req, res) => {

});

// Get all current tickets (admin)
app.post("/ticketing/:id", async (req, res) => {

});

// Get a ticket from any user (admin)
app.get("/ticketing/:id", async (req, res) => {

});

// Get all tickets currently owned (user)

// Buy a ticket not currently owned (user)

// Update a ticket price (admin)
app.put("/ticketing/:id", async (req, res) => {

});

// Delete a ticket (admin)
app.delete("/ticketing/:id", async (req, res) => {

});

// Delete a ticket owned (user)



app.listen(4000, () => {
    console.log("server has started on port 4000");
});