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
        var data = req.body;
        // console.log(data);
        const newBook = await pool.query(
            "INSERT INTO book (fname, lname, seat_type, flight_id, price, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [data.fname, data.lname, data.seat_type, data.flight_id, data.price, data.user_id]
        );
        res.json(newBook.rows[0]);
        // console.log(newBook.rows[0]);
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

// Get bookings for current user (user)
app.get("/book/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const userBooks = await pool.query(
            "SELECT * FROM book WHERE user_id = $1",
            [id]
        );
        res.json(userBooks.rows);
    } catch (err) {
        console.error(err.message)
    }
});


//delete a booking, need help with flight_id and fname
app.delete("/book/:id/:id2", async (req, res) => {
    try {
        const { id, id2 } = req.params;
        // console.log(id, id2)
        const { description } = req.body;
        const deleteFlight = await pool.query("DELETE FROM book WHERE bookingid = $1 AND flight_id = $2",
            [id, id2]
        );

        res.json("Flight was deleted.");
    } catch (err) {
        console.error(err.message);
    }
});


// //Create a ticket
app.post("/seat", async (req, res) => {
    try {
        var data = req.body;
        const newTicket = await pool.query(
            "INSERT INTO tickets (flight_id, user_id, class, price) VALUES($1, $2, $3, $4) RETURNING *",
            [data.flight_id, data.user_id, data.classtype, data.price]
        );

        res.json(newTicket.rows[0]);
        // console.log("newTicket=");
        // console.log(newTicket.rows[0]);

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


// //Create flight
app.post("/flight", async (req, res) => {
    try {
        var data = req.body;
        const newFlight = await pool.query(
            "INSERT INTO flights (origin, destination, airline, departure, plane_id, economy_price, business_price, firstclass_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [data.origin, data.destination, data.airline, data.departure, data.plane, data.economy_price, data.business_price, data.firstclass_price]
        );
        // console.log(newFlight.rows[0]);
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
        // console.log(cors().)
        const { id } = req.params;
        // console.log("id=", id);
        const flight = await pool.query("SELECT * FROM flights WHERE flight_id = $1", 
            [id]
        );
        // console.log(flight.rows[0]);
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
        const updateFlight = await pool.query("UPDATE flights SET origin = $1, destination = $2, airline = $3, departure = $4, plane_id = $5, economy_price = $6, business_price = $7, firstclass_price = $8 WHERE flight_id = $9",
        [data.origin, data.destination, data.airline, data.departure, data.plane, data.economy_price, data.business_price, data.firstclass_price, id]
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

// //Create pet
app.post("/pet", async (req, res) => {
    try {
        const { ticket, species, breed } = req.body;

        const petCO = await pool.query(
            "SELECT pet_co FROM tickets WHERE ticket_id = $1",
            [ticket]
        );

        if (petCO.rows[0].pet_co == 'true') {
            console.log("already has pet carry on");
        }
        else {
            const newPet = await pool.query(
                "INSERT INTO pet (ticket_id, species, breed) VALUES ($1, $2, $3) RETURNING *",
                [ticket, species, breed]
            );
    
            res.json(newPet.rows[0]);
    
            const updateTicket = await pool.query(
                "UPDATE tickets SET pet_co = 'true' WHERE ticket_id = $1",
                [ticket]
            );
    
            res.json(updateTicket.rows[0]);
        }
    } catch (err) {
        console.error(err.message);
    }
});

// //Get all flight
app.get("/pet", async (req, res) => {
    try {
        const allPets = await pool.query("SELECT * FROM pet");
        res.json(allPets.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// //Get a pet
app.get("/pet/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await pool.query("SELECT * FROM pet WHERE pet_id = $1", 
            [id]
        );

        res.json(pet.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// //Update a pet
app.put("/pet/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { ticket, species, breed } = req.body;
        const updatePet = await pool.query("UPDATE pet SET ticket_id = $1, species = $2, breed = $3 WHERE pet_id = $4",
            [ticket, species, breed, id]
        );

        res.json("Pet was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

// //Delete a pet
app.delete("/pet/:id", async (req, res) => {
    try {
        const { id } = req.params;
        // const { description } = req.body;
        const deletePet = await pool.query("DELETE FROM pet WHERE pet_id = $1",
            [id]
        );

        res.json("Pet was deleted.");

        /*
        TODO: update ticket pet_co attribute to false
        
        const updateTicket = await pool.query(
                "UPDATE ticket SET pet_co = false WHERE ticket_id = $1",
                [ticket]
            );
    
            res.json(updateTicket.rows[0]);
        */
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

// //Get a user by user_id
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

// //Get a user by email
// app.get("/useremail", async (req, res) => {
//     try {
//         const { email } = req.body;
//         const userOne = await pool.query(`SELECT * FROM users WHERE user_email = 'quyen@gmail.com'`
//         );

//         res.json(userOne.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//     }
// })

// //Get a user by email
// app.get("/user/:name", async (req, res) => {
//     try {
//         const { name } = req.body;
//         const userOne = await pool.query(`SELECT * FROM users WHERE first_name = $1`,
//             [name]
//         );

//         res.json(userOne.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//     }
// })

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

// Create a new ticket (admin)
app.post("/ticket", async (req, res) => {
    try {
        var data = req.body;
        // data.user_id = 2;
        // data.bill_id = 4;
        // data.flight_id = 5;
        // console.log(data);
        const newBill = await pool.query(
            "INSERT INTO tickets (flight_id, user_id, bill_id, seat_number, class, pet_co, price) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [data.flight_id, data.user_id, data.bill_id, data.seat_number, data.user_class, data.pet_co, data.new_price]
        );

        res.json(newBill.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Get all current tickets (admin)
app.get("/ticket", async (req, res) => {
    try {
        const allTickets = await pool.query(
            "SELECT * FROM tickets"
        );
        res.json(allTickets.rows);
    } catch (err) {
        console.error(err.message)
    }
});

// Get all tickets from a user (admin/user)
app.get("/ticket/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const allTickets = await pool.query(
            "SELECT * FROM tickets WHERE user_id = $1",
            [id]
        );
        res.json(allTickets.rows);
    } catch (err) {
        console.error(err.message)
    }
});

// Buy a ticket not currently owned (user)

// Update a ticket (admin)
app.put("/ticket/:id", async (req, res) => {
    try {
        const { id } = req.params;
        var data = req.body;
        // console.log(data);
        // data.user_id = 2;
        // data.bill_id = 4;
        // data.flight_id = 5;
        const newBill = await pool.query(
            "UPDATE tickets SET flight_id = $1, user_id = $2, bill_id = $3, seat_number = $4, class = $5, pet_co = $6, price = $7 WHERE ticket_id = $8",
            [data.flight_id, data.user_id, 4, data.seat_number, data.user_class, data.pet_co, data.price, id]
        );
        // console.log(newBill.rows[0]);
        res.json(newBill.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Delete a ticket (admin)
app.delete("/ticket/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTicket = await pool.query(
            "DELETE FROM tickets WHERE ticket_id = $1",
            [id]
        );
        res.json("Ticket was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});

// Delete a ticket owned (user)


app.listen(4000, () => {
    console.log("server has started on port 4000");
});