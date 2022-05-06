import React, { Fragment, useEffect, useState } from "react";
import { Button, Form } from 'react-bootstrap';

const EditTicket = ({ tickets }) => {

    const [ seat_number, setSeatNumber] = useState(tickets.seat_number);
    const [ user_class, setClass] = useState(tickets.class);
    const [ pet_co, setPetco] = useState(tickets.pet_co);
    const [ price, setPrice] = useState(tickets.price);
    const [ flight_id, setFlight_id] = useState(tickets.flight_id);
    // const [ user_id, setUser_id] = useState(tickets.user_id);

    const updateTicket = async e => {
        // console.log("in update ticket in ")
        e.preventDefault();
        try {
            var ticket_id = String(tickets.ticket_id);
            var user_id = String(tickets.user_id);
            var flight_id = String(tickets.flight_id);
            const body = { seat_number, user_class, pet_co, price, ticket_id, user_id, flight_id };
            console.log(tickets.ticket_id);
            console.log(price);
            const response = await fetch(`http://localhost:4000/ticket/${tickets.ticket_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/admin_ticket";
        } catch (err) {
            console.error(err.message);
        }
    }

    const getFlight = async () => {
        try {
            console.log("flight_id=", flight_id);
            const response = await fetch(`http://localhost:4000/flight/${flight_id}`
            // , {
            //     method: "GET",
            //     headers: { "Content-Type": "Access-Control-Allow-Origin"}
            // }
            );
            const jsonData = await response.json();
            // console.log(jsonData);
            if (user_class == "Economy") {
                setPrice(jsonData.economy_price);
                // jsonData.price = jsonData.economy_price;
            } else if (user_class == "Business") {
                setPrice(jsonData.business_price);
                // jsonData.price = jsonData.business_price;
            } else {
                setPrice(jsonData.firstclass_price);
                // jsonData.price = jsonData.firstclass_price;
            }
            // console.log(price);
            // return(jsonData);
            console.log("reaches the end");
        } catch(err) {
            console.error(err.message);
            // alert(err.message);
        }
    }

    // const printFunction = () => {
    //     console.log("It's called");
    // }

    useEffect(() => {
        getFlight();
    }, [user_class])

    return <Fragment>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${tickets.ticket_id}`}>
        Edit
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id={`id${tickets.ticket_id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => {
            setSeatNumber(seat_number);
            setClass(user_class);
            setPetco(pet_co);
            // setEconomyPrice(economy_price);
            // setBusinessPrice(business_price);
            // setFirstclass_price(firstclass_price)
        }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Flight</h5>
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={() => {
                    setSeatNumber(tickets.seat_number);
                    setClass(tickets.class);
                    setPetco(tickets.pet_co);
                    // setEconomyPrice(tickets.economy_price);
                    // setBusinessPrice(tickets.business_price);
                    // setFirstclass_price(tickets.firstclass_price)
                    }}>
                {/* <span aria-hidden="true">&times;</span> */}
                </button>
            </div>
            <div className="modal-body">
                <Form onSubmit={updateTicket}>
                    <Form.Group>
                        <Form.Label className="h5">Seat Number</Form.Label>
                        <Form.Control onChange={e => setSeatNumber(e.target.value)} className="seatnumberControl" placeholder="#" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="h5">Class</Form.Label>
                        <Form.Control onChange={e => setClass(e.target.value)} className="classControl" placeholder="Economy, business, first class" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="h5">Pet Carry-on</Form.Label>
                        <Form.Control onChange={e => setPetco(e.target.value)} className="petcoControl" placeholder="True/False" />
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
                    }}>Close</button>
                {/* <button type="button" className="btn btn-primary" onClick={e => updateData(e)}>Save changes</button> */}
            </div>
            </div>
        </div>
        </div>
    </Fragment>
}

export default EditTicket;