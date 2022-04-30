import React, { Fragment, useState } from "react";
// import Modal from "react-bootstrap/Modal";

const EditFlight = ({ flights }) => {
    
    const [ description, setDescription ] = useState(flights.description);

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:4000/flight/${flights.flight_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            window.location = "/flight";
        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${flights.flight_id}`}>
        Edit
        </button>

        {/* <!-- Modal --> */}
        <div class="modal fade" id={`id${flights.flight_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => setDescription(flights.description)}>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Flight</h5>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" onClick={() => setDescription(flights.description)}>
                {/* <span aria-hidden="true">&times;</span> */}
                </button>
            </div>
            <div class="modal-body">
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(flights.description)}>Close</button>
                <button type="button" class="btn btn-primary" onClick={e => updateDescription(e)}>Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </Fragment>;
};

export default EditFlight;