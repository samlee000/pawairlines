import React, { Fragment, useEffect, useState, Button } from "react";

import EditFlight from "./EditFlight";

const ListFlight = () => {

    const [flight, setFlight] = useState([]);

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
        <table class="table">
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
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>;
};

export default ListFlight;