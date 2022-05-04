const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());


//Routes
//post a booking
app.post("/book", async (req, res) => {
    try {
        console.log("Entered post");
        const {fname, lname, seat_type} = req.body;
        const newBook = await pool.query(
            "INSERT INTO book (fname, lname, seat_type) VALUES ($1, $2, $3) RETURNING *",
            [fname, lname, seat_type]
        );
        res.json(newBook.rows[0]);
        console.log("Post Completed.");
    } catch (err) {
        console.error(err.message);
    }
});
//get a booking
app.get("/book", async (req, res) => {
    try {
        const allBook = await pool.query("SELECT * FROM book");
        res.json(allBook.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// //Create flight
app.post("/flight", async (req, res) => {
    try {
        var data = req.body;
        const newFlight = await pool.query(
            "INSERT INTO flights (schedule, destination, origin, airline, exit_terminal, entry_terminal) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [data.schedule, data.destination, data.origin, data.airline, data.exitTerminal, data.entryTerminal]
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
        var data = req.body;
        const updateFlight = await pool.query("UPDATE flights SET schedule = $1, destination = $2, origin = $3, airline = $4, exit_terminal = $5, entry_terminal = $6 WHERE flight_id = $7",
        [data.schedule, data.destination, data.origin, data.airline, data.exitTerminal, data.entryTerminal, id]
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
        console.log("user about to be created");
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
        console.log("about to get specific user");
        const { id } = req.params;
        console.log("user_id = ");
        console.log(id);
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1", 
            [id]
        );

        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// Get a user's user_id from phone number
app.get("/useridfromphone/:number", async (req, res) => {
    try {
        console.log("In useridfromemail");
        const { number } = req.params;
        console.log(number);
        const user_id = await pool.query("SELECT user_id FROM users WHERE phone_number = $1",
            [number]
        );
        res.json(user_id);
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