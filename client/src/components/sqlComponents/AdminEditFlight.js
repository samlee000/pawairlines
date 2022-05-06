import React, { Fragment, useState } from "react";
// import Modal from "react-bootstrap/Modal";

const AdminEditFlight = ({ flights }) => {
    
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [airline, setAirline] = useState("");
    const [departure, setDeparture] = useState("");
    const [plane, setPlane] = useState("");
    const [economy_price, setEcoPrice] = useState("");
    const [business_price, setBusPrice] = useState("");
    const [firstclass_price, setFCPrice] = useState("");

    const updateFlight = async e => {
        e.preventDefault();
        try {
            // const body = { description };
            const response = await fetch(`http://localhost:4000/flight/${flights.flight_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({origin, destination, airline, departure, plane, economy_price, business_price, firstclass_price})
            });
            
            window.location = "/admin_flights";
        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${flights.flight_id}`}>
        Edit
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id={`id${flights.flight_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => { setOrigin(flights.origin); setDestination(flights.destination); setAirline(flights.airline); setDeparture(flights.departure); setPlane(flights.plane_id); setEcoPrice(flights.economy_price); setBusPrice(flights.business_price); setFCPrice(flights.firstclass_price);}}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Flight</h5>
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={() => { setOrigin(flights.origin); setDestination(flights.destination); setAirline(flights.airline); setDeparture(flights.departure); setPlane(flights.plane_id); setEcoPrice(flights.economy_price); setBusPrice(flights.business_price); setFCPrice(flights.firstclass_price);}}>
                {/* <span aria-hidden="true">&times;</span> */}
                </button>
            </div>
            <div className="modal-body">
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
                <label>Economy Class Price</label>
                <input type="text" className="form-control" onChange={e => setEcoPrice(e.target.value)}/>
                <label>Business Class Price</label>
                <input type="text" className="form-control" onChange={e => setBusPrice(e.target.value)}/>
                <label>First Class Price</label>
                <input type="text" className="form-control" onChange={e => setFCPrice(e.target.value)}/>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => { setOrigin(flights.origin); setDestination(flights.destination); setAirline(flights.airline); setDeparture(flights.departure); setPlane(flights.plane_id); setEcoPrice(flights.economy_price); setBusPrice(flights.business_price); setFCPrice(flights.firstclass_price);}}>Close</button>
                <button type="button" className="btn btn-primary" onClick={e => updateFlight(e)}>Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </Fragment>;
};

export default AdminEditFlight;