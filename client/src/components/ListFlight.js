import React, { Fragment, useEffect, useState } from "react";

const ListFlight = () => {

    const [flight, setFlight] = useState([]);

    const getFlight = async () => {
        try {
            const response = await fetch("http://localhost:5000/flight");
            const jsonData = await response.json();

            setFlight(jsonData);
        } catch (err) {
            console.log(err);
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
                    <tr>
                        <td>{flights.description}</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>;
};

export default ListFlight;