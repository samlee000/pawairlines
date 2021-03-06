import React, { Fragment, useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Form, Card } from 'react-bootstrap';

const InputBill = () => {

    const [subtotal, setSubtotal] = useState("");
    const [user_id, setUserID] = useState("");
    const [flight_id, setFlightID] = useState("");

    // const [flights, setFlights] = useState([]);
    // const [flight_id,setFlightID] = useState(null);
    // let optionFlights = flights.map(flight => {
    //     <option key={flight.flight_id} value={flight.flight_id}>{flight.flight_id}</option>
    // });
    // const getFlightList = async () => {
    //     try {
    //         const response = await fetch("http://localhost:4000/flight");
    //         const jsonData = await response.json();

    //         setFlights(jsonData);
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // };

    const onSubmitForm = async e => {
        try {
            const body = { subtotal, user_id };
            const response = await fetch("http://localhost:4000/admin_bill", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/admin_bill";
        } catch (err) {
            console.error(err.message);
        }
    };


    return (
        <Fragment>
            <h1 className="mt-3">Bill List</h1>
            <Form onSubmit={onSubmitForm}>
            <Form.Group>
                <Form.Label className="h5">Subtotal</Form.Label>
                <Form.Control onChange={(e) => setSubtotal(e.target.value)} className="subtotalControl" placeholder="0.00" />
            </Form.Group>
            <Form.Group>
                <Form.Label className="h5">User ID</Form.Label>
                <Form.Control onChange={(e) => setUserID(e.target.value)} className="useridControl" placeholder="#" />
            </Form.Group>
            <Form.Group>
                <Form.Label className="h5">Flight ID</Form.Label>
                <Form.Control onChange={(e) => setFlightID(e.target.value)} className="flightidControl" placeholder="#" />
            </Form.Group>
            <div className="btn-group d-flex mt-3 mb-2" role="group" aria-label="...">
                <Button className="loginButton mt-3 btn-block  w-90" variant="primary" type="submit"> Submit </Button>
            </div>
            </Form>
            
            {/* <form className="d-flex mt-2 mb-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" 
                value={subtotal} 
                onChange={e => setSubtotal(e.target.value)} />
                <input type="text" className="form-control" 
                value={user_id} 
                onChange={e => setSubtotal(e.target.value)} />
                <button className="btn btn-success">Add</button>
            </form> */}
        </Fragment>
    )
}

export default InputBill;