import React, { Fragment, useEffect, useState } from "react";
import { Button, Form } from 'react-bootstrap';

const InputTicket = () => {
    const [ seat_number, setSeatNumber] = useState();
    const [ user_class, setClass] = useState();
    const [ pet_co, setPetco] = useState();
    const [ price, setPrice] = useState();
    const [ user_id, setUser_id] = useState();
    const [ bill_id, setBill_id] = useState();
    const [ flight_id, setFlight_id] = useState();

    const [flight, setFlight] = useState();

    const getFlightPrice = async () => {
        try {
            console.log("flight_id=", flight_id);
            const response = await fetch(`http://localhost:4000/flight/${flight_id}`
            // , {
            //     method: "GET",
            //     headers: { "Content-Type": "Access-Control-Allow-Origin"}
            // }
            );
            const jsonData = await response.json();
            console.log(jsonData);
            setFlight(jsonData);
            if (user_class == "Economy") {
                setPrice(jsonData.economy_price);
                jsonData.price = jsonData.economy_price;
            } else if (user_class == "Business") {
                setPrice(jsonData.business_price);
                jsonData.price = jsonData.business_price;
            } else {
                setPrice(jsonData.firstclass_price);
                jsonData.price = jsonData.firstclass_price;
            }
            console.log(price);
            return(jsonData);
        } catch(err) {
            console.error(err.message);
            alert(err.message);
        }
    }

    const pushNewTicket = async e => {
        try {
            const json_response = await getFlightPrice(flight_id);
            console.log(json_response);
            console.log(price);
            console.log(json_response.price);
            var new_price = json_response.price;
            // console.log("flight=", flight);
            // console.log("price=", price);
            // var user_id = localStorage.getItem("current_user_id");
            const body = { seat_number, user_class, pet_co, new_price, user_id, bill_id, flight_id };
            const response = await fetch(`http://localhost:4000/ticket`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(price);
            alert("Finished running");
            window.location = "/admin_ticket";
        } catch (err) {
            console.error(err.message);
            alert(err.message);
        }
    }

    // useEffect(() => {
    //     pushNewTicket();
    // }, [flight])


    return (
        <Fragment>
            <Form onSubmit={pushNewTicket}>
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
                <Form.Control onChange={(e) => setClass(e.target.value)} className="originControl" placeholder="Economy, Business, First-Class" />
            </Form.Group>
            <Form.Group>
                <Form.Label className="h5">Pet Carry-on</Form.Label>
                <Form.Control onChange={(e) => setPetco(e.target.value)} className="airlineControl" placeholder="True/False" />
            </Form.Group>

            {/* <Form.Group>
                <Form.Label className="h5">Economy Price</Form.Label>
                <Form.Control onChange={(e) => setEconomyPrice(e.target.value)} className="exitTerminalControl" placeholder="$0.00" />
            </Form.Group> */}

            <div className="btn-group d-flex mt-3 mb-2" role="group" aria-label="...">
                <Button className="loginButton mt-3 btn-block  w-90" variant="primary" type="submit"> Submit </Button>
            </div>
            </Form>
        </Fragment>
    )
}
export default InputTicket;