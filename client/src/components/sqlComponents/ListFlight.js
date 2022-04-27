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
        <table class="table">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {flight.map(flights => (
                    <tr key={flights.flight_id}>
                        <td>{flights.description}</td>
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