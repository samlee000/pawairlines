import React, { Fragment, useEffect, useState, Button } from "react";

import EditTicket from "./EditTicket";

const ListTicket = () => {

    const [ticket, setTicket] = useState([]);
    
    const getTickets = async () => {
        try {
            const response = await fetch("http://localhost:4000/ticket");
            const jsonData = await response.json();

            setTicket(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTickets();
    }, []);

    const deleteTicket = async (id) => {
        try {
            const deleteTicket = await fetch(`http://localhost:4000/ticket/${id}`, {
                method: "DELETE"
            });

            setTicket(ticket.filter(tickets => tickets.ticket_id !== {id}));
            window.location = "/admin_ticket";
        } catch (err) {
            console.error(err.message);
        }
    }
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
                <th>Economy Price</th>
                <th>Business Price</th>
                <th>First Class Price</th>
                <th>Edit</th>
                <th>Delete</th>
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
                        <td>{tickets.economy_price}</td>
                        <td>{tickets.business_price}</td>
                        <td>{tickets.firstclass_price}</td>
                        <td>
                            <EditTicket tickets={tickets}/>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteTicket(tickets.ticket_id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
}

export default ListTicket;