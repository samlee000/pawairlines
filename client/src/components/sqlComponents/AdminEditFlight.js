import React, { Fragment, useState } from "react";
// import Modal from "react-bootstrap/Modal";

const AdminEditFlight = ({ flights }) => {
    
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [airline, setAirline] = useState("");
    const [departure, setDeparture] = useState("");
    const [plane, setPlane] = useState("");

    const updateFlight = async e => {
        e.preventDefault();
        try {
            // const body = { description };
            const response = await fetch(`http://localhost:4000/brandon/${flights.flight_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({origin, destination, airline, departure, plane})
            });
            
            window.location = "/brandon";
        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${flights.flight_id}`}>
        Edit
        </button>

        {/* <!-- Modal --> */}
        <div class="modal fade" id={`id${flights.flight_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => { setOrigin(flights.origin); setDestination(flights.destination); setAirline(flights.airline); setDeparture(flights.departure); setPlane(flights.plane_id);}}>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Flight</h5>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" onClick={() => { setOrigin(flights.origin); setDestination(flights.destination); setAirline(flights.airline); setDeparture(flights.departure); setPlane(flights.plane_id);}}>
                {/* <span aria-hidden="true">&times;</span> */}
                </button>
            </div>
            <div class="modal-body">
                <label>Origin</label>
                <input type="text" className="form-control" onChange={e => setOrigin(e.target.value)}/>
                <label>Destination</label>
                <input type="text" className="form-control" onChange={e => setDestination(e.target.value)}/>
                <label>Airline</label>
                <input type="text" className="form-control" onChange={e => setAirline(e.target.value)}/>
                <label>Departure</label>
                <input type="text" className="form-control" onChange={e => setDeparture(e.target.value)}/>
                <label>Plane</label>
                <input type="text" className="form-control" onChange={e => setPlane(e.target.value)}/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => { setOrigin(flights.origin); setDestination(flights.destination); setAirline(flights.airline); setDeparture(flights.departure); setPlane(flights.plane_id);}}>Close</button>
                <button type="button" class="btn btn-primary" onClick={e => updateFlight(e)}>Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </Fragment>;
};

export default AdminEditFlight;