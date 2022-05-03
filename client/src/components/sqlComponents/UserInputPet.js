import React, { Fragment, useState } from "react";

const UserInputPet = () => {

    const [ticket, setTicket] = useState("");
    const [species, setSpecies] = useState("");
    const [breed, setBreed] = useState("");

    const onSubmitForm = async e => {
        try {
            // const body = { description };
            const response = await fetch("http://localhost:4000/pet", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ticket, species, breed})
            });
            
            window.location = "/pet";
        } catch (err) {
            console.error(err.message);
        }
    };


    return (
        <Fragment>
            <h1 className="mt-3">Pet List</h1>
            <form className="mt-2 mb-5" onSubmit={onSubmitForm}>
                <div class="form-group">
                    <label>Ticket</label>
                    <input type="text" class="form-control" placeholder="Ticket" value={ticket} onChange={e => setTicket(e.target.value)} />
                </div>
                <div class="form-group">
                    <label>Species</label>
                    <input type="text" class="form-control" placeholder="Species" value={species} onChange={e => setSpecies(e.target.value)} />
                </div>
                <div class="form-group">
                    <label>Breed</label>
                    <input type="text" class="form-control" placeholder="Breed" value={breed} onChange={e => setBreed(e.target.value)} />
                </div>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
};

export default UserInputPet;