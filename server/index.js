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

// //Create flight
app.post("/brandon", async (req, res) => {
    try {
        const { origin, destination, airline, departure, plane } = req.body;
        const newFlight = await pool.query(
            "INSERT INTO flights (origin, destination, airline, departure, plane_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [origin, destination, airline, departure, plane]
        );

        res.json(newFlight.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// //Get all flight
app.get("/brandon", async (req, res) => {
    try {
        const allFlights = await pool.query("SELECT * FROM flights");
        res.json(allFlights.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// //Get a flight
app.get("/brandon/:id", async (req, res) => {
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
app.put("/brandon/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { origin, destination, airline, departure, plane } = req.body;
        const updateFlight = await pool.query("UPDATE flights SET origin = $1, destination = $2, airline = $3, departure = $4, plane_id = $5 WHERE flight_id = $6",
            [origin, destination, airline, departure, plane, id]
        );

        res.json("Flight was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

// //Delete a flight
app.delete("/brandon/:id", async (req, res) => {
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
            "SELECT pet_co FROM ticket WHERE ticket_id = $1",
            [ticket]
        );
        console.log(petCO.rows[0].pet_co);

        if (petCO.rows[0].pet_co) {
            console.log("already has pet carry on");
        }
        else {
            console.log("does not have pet carry on")

            const newPet = await pool.query(
                "INSERT INTO pet (ticket_id, species, breed) VALUES ($1, $2, $3) RETURNING *",
                [ticket, species, breed]
            );
    
            res.json(newPet.rows[0]);
    
            const updateTicket = await pool.query(
                "UPDATE ticket SET pet_co = true WHERE ticket_id = $1",
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




app.listen(4000, () => {
    console.log("server has started on port 4000");
});