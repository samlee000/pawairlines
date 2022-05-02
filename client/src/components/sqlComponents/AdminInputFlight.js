import React, { Fragment, useState } from "react";

const AdminInputFlight = () => {

    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [airline, setAirline] = useState("");
    const [departure, setDeparture] = useState("");
    const [plane, setPlane] = useState("");

    const onSubmitForm = async e => {
        try {
            // const body = { description };
            const response = await fetch("http://localhost:4000/brandon", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({origin, destination, airline, departure, plane})
            });
            
            window.location = "/brandon";
        } catch (err) {
            console.error(err.message);
        }
    };


    return (
        <Fragment>
            <h1 className="mt-3">Flight List</h1>
            <form className="mt-2 mb-5" onSubmit={onSubmitForm}>
                <div class="form-group">
                    <label>Origin</label>
                    <input type="text" class="form-control" placeholder="Origin" value={origin} onChange={e => setOrigin(e.target.value)} />
                </div>
                <div class="form-group">
                    <label>Destination</label>
                    <input type="text" class="form-control" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
                </div>
                <div class="form-group">
                    <label>Airline</label>
                    <input type="text" class="form-control" placeholder="Airline" value={airline} onChange={e => setAirline(e.target.value)} />
                </div>
                <div class="form-group">
                    <label>Departure</label>
                    <input type="text" class="form-control" placeholder="Departure" value={departure} onChange={e => setDeparture(e.target.value)} />
                </div>
                <div class="form-group">
                    <label>Plane ID</label>
                    <input type="text" class="form-control" placeholder="Plane ID" value={plane} onChange={e => setPlane(e.target.value)} />
                </div>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
};

export default AdminInputFlight;