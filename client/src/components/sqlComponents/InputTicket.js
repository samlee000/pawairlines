import React, { Fragment, useState } from "react";
import { Button, Form } from 'react-bootstrap';

const InputTicket = () => {
    const [ seat_number, setSeatNumber] = useState();
    const [ user_class, setClass] = useState();
    const [ pet_co, setPetco] = useState();
    const [ economy_price, setEconomyPrice] = useState();
    const [ business_price, setBusinessPrice] = useState();
    const [ firstclass_price, setFirstclass_price] = useState();
    const [ user_id, setUser_id] = useState();
    const [ bill_id, setBill_id] = useState();
    const [ flight_id, setFlight_id] = useState();

    const onSubmitForm = async e => {
        try {
            // var user_id = localStorage.getItem("current_user_id");
            const body = { seat_number, user_class, pet_co, economy_price, business_price, firstclass_price, user_id, bill_id, flight_id };
            const response = await fetch(`http://localhost:4000/ticket`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/admin_ticket";
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            <Form onSubmit={onSubmitForm}>
            <Form.Group>
                <Form.Label className="h5">User ID</Form.Label>
                <Form.Control onChange={(e) => setUser_id(e.target.value)} className="1asdf4" placeholder="#" />
            </Form.Group><Form.Group>
                <Form.Label className="h5">Bill ID</Form.Label>
                <Form.Control onChange={(e) => setBill_id(e.target.value)} className="asv45" placeholder="#" />
            </Form.Group><Form.Group>
                <Form.Label className="h5">Flight ID</Form.Label>
                <Form.Control onChange={(e) => setFlight_id(e.target.value)} className="dssfgh56" placeholder="#" />
            </Form.Group>
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
        </Fragment>
    )
}
export default InputTicket;