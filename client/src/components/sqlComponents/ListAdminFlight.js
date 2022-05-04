import React, { Fragment, useEffect, useState, Button } from "react";

import EditFlight from "./EditFlight";

const ListFlight = () => {

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
        <table className="table">
            <thead>
            <tr>
                <th>Flight ID</th>
                <th>Schedule</th>
                <th>Destination</th>
                <th>Origin</th>
                <th>Airline</th>
                <th>Exit Terminal</th>
                <th>Entry Terminal</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {flight.map(flights => (
                    <tr key={flights.flight_id}>
                        <td>{flights.flight_id}</td>
                        <td>{flights.schedule}</td>
                        <td>{flights.destination}</td>
                        <td>{flights.origin}</td>
                        <td>{flights.airline}</td>
                        <td>{flights.exit_terminal}</td>
                        <td>{flights.entry_terminal}</td>
                        <td>
                            <EditFlight flights={flights} />
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

export default ListFlight;