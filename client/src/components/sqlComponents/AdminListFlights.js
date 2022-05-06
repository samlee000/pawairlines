import React, { Fragment, useEffect, useState, Button } from "react";

import AdminEditFlight from "./AdminEditFlight";

const AdminListFlights = () => {

    const [flight, setFlight] = useState([]);

    const deleteFlight = async (id) => {
        try {
            const deleteFLight = await fetch(`http://localhost:4000/flight/${id}`, {
                method: "DELETE"
            });

            setFlight(flight.filter(flights => flights.flight_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getFlight = async () => {
        try {
            const response = await fetch("http://localhost:4000/flight");
            const jsonData = await response.json();

            setFlight(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getFlight();
    }, []);

    console.log(flight);
    return <Fragment>
        <h1 className="mt-3">Manage All Flights</h1>
        <table class="table mt-4">
            <thead>
            <tr>
                <th>Flight ID</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Airline</th>
                <th>Departure</th>
                <th>Plane ID</th>
                <th>Economy Price</th>
                <th>Business Price</th>
                <th>First Class Price</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {flight.map(flights => (
                    <tr key={flights.flight_id}>
                        <td>{flights.flight_id}</td>
                        <td>{flights.origin}</td>
                        <td>{flights.destination}</td>
                        <td>{flights.airline}</td>
                        <td>{flights.departure}</td>
                        <td>{flights.plane_id}</td>
                        <td>{flights.economy_price}</td>
                        <td>{flights.business_price}</td>
                        <td>{flights.firstclass_price}</td>
                        <td>
                            <AdminEditFlight flights={flights} />
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteFlight(flights.flight_id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>;
};

export default AdminListFlights;