import React, { Fragment, useEffect, useState, Button } from "react";

const ListTicket = () => {

    const [ticket, setTicket] = useState([]);
    
    const getTickets = async () => {
        try {
            var user_id = localStorage.getItem("current_user_id");
            var encoded_user_id = encodeURIComponent(user_id);
            const response = await fetch(`http://localhost:4000/ticket/${encoded_user_id}`);
            const jsonData = await response.json();

            setTicket(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTickets();
    }, []);

    return <Fragment>
        <table className="table">
            <thead>
            <tr>
                <th>Ticket ID</th>
                <th>Flight ID</th>
                <th>User ID</th>
                <th>Bill ID</th>
                <th>Seat Number</th>
                <th>Class</th>
                <th>Pet Carry-on</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
                {ticket.map(tickets => (
                    <tr key={tickets.ticket_id}>
                        <td>{tickets.ticket_id}</td>
                        <td>{tickets.flight_id}</td>
                        <td>{tickets.user_id}</td>
                        <td>{tickets.bill_id}</td>
                        <td>{tickets.seat_number}</td>
                        <td>{tickets.class}</td>
                        <td>{tickets.pet_co}</td>
                        <td>{tickets.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
}

export default ListTicket;