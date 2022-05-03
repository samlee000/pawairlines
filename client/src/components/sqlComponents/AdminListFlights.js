import React, { Fragment, useEffect, useState, Button } from "react";

import AdminEditFlight from "./AdminEditFlight";

const AdminListFlights = () => {

    const [flight, setFlight] = useState([]);

    const deleteFlight = async (id) => {
        try {
            const deleteFLight = await fetch(`http://localhost:4000/brandon/${id}`, {
                method: "DELETE"
            });

            setFlight(flight.filter(flights => flights.flight_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getFlight = async () => {
        try {
            const response = await fetch("http://localhost:4000/brandon");
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
                <th>Origin</th>
                <th>Destination</th>
                <th>Airline</th>
                <th>Departure</th>
                <th>Plane ID</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {flight.map(flights => (
                    <tr key={flights.flight_id}>
                        <td>{flights.origin}</td>
                        <td>{flights.destination}</td>
                        <td>{flights.airline}</td>
                        <td>{flights.departure}</td>
                        <td>{flights.plane_id}</td>
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