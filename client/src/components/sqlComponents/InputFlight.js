import React, { Fragment, useState } from "react";
import { Button, Form } from 'react-bootstrap';

const InputFlight = () => {

    // const [description, setDescription] = useState("");
    const [schedule, setSchedule] = useState("");
    const [destination, setDestination] = useState("");
    const [origin, setOrigin] = useState("");
    const [airline, setAirline] = useState("");
    const [exitTerminal, setExitTerminal] = useState("");
    const [entryTerminal, setEntryTerminal] = useState("");

    const onSubmitForm = async e => {
        try {
            const body = { schedule, destination, origin, airline, exitTerminal, entryTerminal };
            const response = await fetch("http://localhost:4000/flight", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            window.location = "/flight";
        } catch (err) {
            console.error(err.message);
        }
    };

    
    return (
        <Fragment>
            <h1 className="mt-3">Flight List</h1>
            <Form onSubmit={onSubmitForm}>
            <Form.Group>
                <Form.Label className="h5">Schedule</Form.Label>
                <Form.Control onChange={(e) => setSchedule(e.target.value)} className="scheduleControl" placeholder="Enter Schedule" />
            </Form.Group>
            <Form.Group>
                <Form.Label className="h5">Destination</Form.Label>
                <Form.Control onChange={(e) => setDestination(e.target.value)} className="destinationControl" placeholder="Enter Destination" />
            </Form.Group>
            <Form.Group>
                <Form.Label className="h5">Origin</Form.Label>
                <Form.Control onChange={(e) => setOrigin(e.target.value)} className="originControl" placeholder="Enter Origin" />
            </Form.Group>
            <Form.Group>
                <Form.Label className="h5">Airline</Form.Label>
                <Form.Control onChange={(e) => setAirline(e.target.value)} className="airlineControl" placeholder="Enter Airline" />
            </Form.Group>
            <Form.Group>
                <Form.Label className="h5">Exit Terminal</Form.Label>
                <Form.Control onChange={(e) => setExitTerminal(e.target.value)} className="exitTerminalControl" placeholder="Enter Exit Terminal" />
            </Form.Group>
            <Form.Group>
                <Form.Label className="h5">Entry Terminal</Form.Label>
                <Form.Control onChange={(e) => setEntryTerminal(e.target.value)} className="entryTerminalControl" placeholder="Enter Entry Terminal" />
            </Form.Group>
            <div className="btn-group d-flex mt-3 mb-2" role="group" aria-label="...">
                <Button className="loginButton mt-3 btn-block  w-90" variant="primary" type="submit"> Submit </Button>
            </div>
            </Form>
            {/* <form className="d-flex mt-2 mb-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" 
                value={description} 
                onChange={e => setDescription(e.target.value)} />
                <button className="btn btn-success">Add</button>
            </form> */}
        </Fragment>
    )
};

export default InputFlight;