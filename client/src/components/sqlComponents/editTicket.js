import React, { Fragment, useState } from "react";
import { Button, Form } from 'react-bootstrap';

const EditTicket = ({ tickets }) => {

    const [ seat_number, setSeatNumber] = useState();
    const [ user_class, setClass] = useState();
    const [ pet_co, setPetco] = useState();
    const [ economy_price, setEconomyPrice] = useState();
    const [ business_price, setBusinessPrice] = useState();
    const [ firstclass_price, setFirstclass_price] = useState();

    const updateTicket = async e => {
        // console.log("in update ticket in ")
        e.preventDefault();
        try {
            const body = { seat_number, user_class, pet_co, economy_price, business_price, firstclass_price };
            // console.log()
            const response = await fetch(`http://localhost:4000/ticket/${tickets.ticket_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/ticket";
        } catch (err) {
            console.error(err.message);
        }
    }
    return <Fragment>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${tickets.ticket_id}`}>
        Edit
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id={`id${tickets.ticket_id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => {
            setSeatNumber(tickets.seat_number);
            setClass(tickets.class);
            setPetco(tickets.pet_co);
            setEconomyPrice(tickets.economy_price);
            setBusinessPrice(tickets.business_price);
            setFirstclass_price(tickets.firstclass_price)
        }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Flight</h5>
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={() => {
                    setSeatNumber(tickets.seat_number);
                    setClass(tickets.class);
                    setPetco(tickets.pet_co);
                    setEconomyPrice(tickets.economy_price);
                    setBusinessPrice(tickets.business_price);
                    setFirstclass_price(tickets.firstclass_price)
                    }}>
                {/* <span aria-hidden="true">&times;</span> */}
                </button>
            </div>
            <div className="modal-body">
            <Form onSubmit={updateTicket}>
            <Form.Group>
                <Form.Label className="h5">Seat Number</Form.Label>
                <Form.Control onChange={(e) => setSeatNumber(e.target.value)} className="scheduleControl" placeholder="#" />
            </Form.Group>
            <Form.Group>
                <Form.Label className="h5">Class</Form.Label>
                <Form.Control onChange={(e) => setClass(e.target.value)} className="originControl" placeholder="Economy, business, first class" />
            </Form.Group>
            <Form.Group>
                <Form.Label className="h5">Pet Carry-on</Form.Label>
                <Form.Control onChange={(e) => setPetco(e.target.value)} className="airlineControl" placeholder="True/False" />
            </Form.Group>
            <Form.Group>
                <Form.Label className="h5">Economy Price</Form.Label>
                <Form.Control onChange={(e) => setEconomyPrice(e.target.value)} className="exitTerminalControl" placeholder="$0.00" />
            </Form.Group>
            <Form.Group>
                <Form.Label className="h5">Business Price</Form.Label>
                <Form.Control onChange={(e) => setBusinessPrice(e.target.value)} className="entryTerminalControl" placeholder="$0.00" />
            </Form.Group><Form.Group>
                <Form.Label className="h5">First Class Price</Form.Label>
                <Form.Control onChange={(e) => setFirstclass_price(e.target.value)} className="asdf" placeholder="$0.00" />
            </Form.Group>
            <div className="btn-group d-flex mt-3 mb-2" role="group" aria-label="...">
                <Button className="loginButton mt-3 btn-block  w-90" variant="primary" type="submit"> Submit </Button>
            </div>
            </Form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => {
                    setSeatNumber(tickets.seat_number);
                    setClass(tickets.class);
                    setPetco(tickets.pet_co);
                    setEconomyPrice(tickets.economy_price);
                    setBusinessPrice(tickets.business_price);
                    setFirstclass_price(tickets.firstclass_price)
                    }}>Close</button>
                {/* <button type="button" className="btn btn-primary" onClick={e => updateData(e)}>Save changes</button> */}
            </div>
            </div>
        </div>
        </div>
    </Fragment>
}

export default EditTicket;