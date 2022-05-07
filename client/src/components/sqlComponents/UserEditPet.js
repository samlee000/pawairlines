
// CONTRIBUTED BY BRANDON NEWMAN

import React, { Fragment, useState } from "react";
// import Modal from "react-bootstrap/Modal";

const UserEditPet = ({ pets }) => {
    
    const [ticket, setTicket] = useState("");
    const [species, setSpecies] = useState("");
    const [breed, setBreed] = useState("");

    const updatePet = async e => {
        e.preventDefault();
        try {
            // const body = { description };
            const response = await fetch(`http://localhost:4000/pet/${pets.pet_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ticket, species, breed})
            });
            
            window.location = "/pet";
        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${pets.pet_id}`}>
        Edit
        </button>

        {/* <!-- Modal --> */}
        <div class="modal fade" id={`id${pets.pet_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => { setTicket(pets.ticket_id); setSpecies(pets.species); setBreed(pets.breed);}}>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Pet</h5>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" onClick={() => { setTicket(pets.ticket_id); setSpecies(pets.species); setBreed(pets.breed);}}>
                {/* <span aria-hidden="true">&times;</span> */}
                </button>
            </div>
            <div class="modal-body">
                <label>Ticket</label>
                <input type="text" className="form-control" onChange={e => setTicket(e.target.value)}/>
                <label>Species</label>
                <input type="text" className="form-control" onChange={e => setSpecies(e.target.value)}/>
                <label>Breed</label>
                <input type="text" className="form-control" onChange={e => setBreed(e.target.value)}/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => { setTicket(pets.ticket_id); setSpecies(pets.species); setBreed(pets.breed);}}>Close</button>
                <button type="button" class="btn btn-primary" onClick={e => updatePet(e)}>Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </Fragment>;
};

export default UserEditPet;