import React, { Fragment, useState } from "react";
import { Button, Form } from 'react-bootstrap';
// import Modal from "react-bootstrap/Modal";

const EditFlight = ({ flights }) => {
    
    const [ description, setDescription ] = useState(flights.description);
    const [schedule, setSchedule] = useState("");
    const [destination, setDestination] = useState("");
    const [origin, setOrigin] = useState("");
    const [airline, setAirline] = useState("");
    const [exitTerminal, setExitTerminal] = useState("");
    const [entryTerminal, setEntryTerminal] = useState("");

    const updateData = async e => {
        e.preventDefault();
        try {
            const body = { schedule, destination, origin, airline, exitTerminal, entryTerminal };
            const response = await fetch(`http://localhost:4000/flight/${flights.flight_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            window.location = "/flight";
        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${flights.flight_id}`}>
        Edit
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id={`id${flights.flight_id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => setDescription(flights.description)}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Flight</h5>
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={() => {
                    setSchedule(flights.schedule);
                    setDestination(flights.destination);
                    setOrigin(flights.origin);
                    setAirline(flights.airline);
                    setExitTerminal(flights.exit_terminal);
                    setEntryTerminal(flights.entry_terminal);
                    }}>
                {/* <span aria-hidden="true">&times;</span> */}
                </button>
            </div>
            <div className="modal-body">
            <Form onSubmit={updateData}>
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
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => {
                    setSchedule(flights.schedule);
                    setDestination(flights.destination);
                    setOrigin(flights.origin);
                    setAirline(flights.airline);
                    setExitTerminal(flights.exit_terminal);
                    setEntryTerminal(flights.entry_terminal);
                    }}>Close</button>
                {/* <button type="button" className="btn btn-primary" onClick={e => updateData(e)}>Save changes</button> */}
            </div>
            </div>
        </div>
        </div>
    </Fragment>;
};

export default EditFlight;