import React, { Fragment, useState } from "react";
import Modal from "react-bootstrap/Modal";

const EditFlight = ({ flights }) => {
    
    const [ description, setDescription ] = useState(flights.description);

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/flight/${flights.flight_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${flights.flight_id}`}>
        Edit
        </button>

        <div class="modal fade" id={`id${flights.flight_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => setDescription(flights.description)}>
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Flight</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setDescription(flights.description)}></button>
            </div>
            <div class="modal-body">
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => setDescription(flights.description)}>Close</button>
                <button type="button" class="btn btn-primary" onClick={e => updateDescription(e)}>Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </Fragment>;
};

export default EditFlight;