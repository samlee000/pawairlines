import React, { Fragment, useState } from "react";

const AdminInputFlight = () => {

    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [airline, setAirline] = useState("");
    const [departure, setDeparture] = useState("");
    const [plane, setPlane] = useState("");
    const [economy_price, setEcoPrice] = useState("");
    const [business_price, setBusPrice] = useState("");
    const [firstclass_price, setFCPrice] = useState("");

    const onSubmitForm = async e => {
        try {
            // const body = { description };
            const response = await fetch("http://localhost:4000/flight", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({origin, destination, airline, departure, plane, economy_price, business_price, firstclass_price})
            });
            // console.log(response);
            
            window.location = "/admin_flights";
        } catch (err) {
            console.error(err.message);
        }
    };


    return (
        <Fragment>
            <h1 className="mt-3">Create a Flight</h1>
            <form className="mt-2 mb-5" onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label>Origin</label>
                    <input type="text" className="form-control" placeholder="Origin" value={origin} onChange={e => setOrigin(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Destination</label>
                    <input type="text" className="form-control" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Airline</label>
                    <input type="text" className="form-control" placeholder="Airline" value={airline} onChange={e => setAirline(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Departure</label>
                    <input type="text" className="form-control" placeholder="Departure" value={departure} onChange={e => setDeparture(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Plane ID</label>
                    <input type="text" className="form-control" placeholder="Plane ID" value={plane} onChange={e => setPlane(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Economy Class Price</label>
                    <input type="text" className="form-control" placeholder="0.00" value={economy_price} onChange={e => setEcoPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Business Class Price</label>
                    <input type="text" className="form-control" placeholder="0.00" value={business_price} onChange={e => setBusPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>First Class Price</label>
                    <input type="text" className="form-control" placeholder="0.00" value={firstclass_price} onChange={e => setFCPrice(e.target.value)} />
                </div>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
};

export default AdminInputFlight;