/*
Created by: Prisha
Edited  by: Nick

Description:
Prisha's Edits: Responsible for adding a new booking, query from book and flights relation
Make sure of finding the right relations, setting up postgres for book relation 
On submit form that inserts all query into the relation 

Nick's edits: Fixed bug in onSubmitForm so no more fetch errors are created. 
Also added in two more fetch commands in there for automatic ticket and billing creation when a new booking is made.



*/

/* imports here */
import React, { useState, Fragment, useEffect } from 'react'
import { Button, Container, Nav, NavDropdown, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import NavBar from "./NavBar";
import Flights from './Flights';


export const Book = () => {

  const [fname, setFName] = useState(localStorage.getItem('current_fname'));
  const [lname, setLName] = useState(localStorage.getItem('current_lname'));
  const [seat_type, setSeatType] = useState("");
  const [flights, setFlights] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [booking_id, setBookingID] = useState(null);
  const [flight_id, setFlightID] = useState(null);
  const [flight, setFlight] = useState([]);
  const [economy_price, setEcoPrice] = useState();
  const [business_price, setBusPrice] = useState();
  const [firstclass_price, setFCPrice] = useState();
  const navigate = useNavigate();

  var price = seat_type === 'Economy' ? economy_price : seat_type === 'Business' ? business_price : firstclass_price;

  var user_id = localStorage.getItem('current_user_id');

  /* add flight id, booking id, departure, arrival */
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
        // Create a new book entry
        const response = await fetch(`http://localhost:4000/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fname, lname, seat_type, flight_id, price, user_id})
      });
      // create a new bill entry
      var subtotal = price;
      const response2 = await fetch(`http://localhost:4000/admin_bill`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subtotal, user_id, flight_id })
      });
      const billJsonData = await response2.json();
      // console.log(billJsonData);
      // create a new ticket entry 
      var bill_id = billJsonData.bill_id;
      // console.log(bill_id);
      // alert("Pause");
      const response1 = await fetch(`http://localhost:4000/seat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flight_id, user_id, seat_type, price, bill_id })
      });
      
      // alert("second post done");
      // second_flag = true;
      // navigate('/seat');
      window.location = "/seat";
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }
  };

  // const onSubmitForm1 = async e => {
  //   try {
  //     const response1 = await fetch("http://localhost:4000/seat", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ flight_id, user_id, seat_type, price})
  //     });

  //     // navigate('/seat');
  //     // window.location = "/seat";
  //     { }
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  const onFlightIDChange = async () => {
    try {
      for (var i = 0; i < flights.length; i++) {
        if (flights[i].flight_id == flight_id) {
          setEcoPrice(flights[i].economy_price);
          setBusPrice(flights[i].business_price);
          setFCPrice(flights[i].firstclass_price);
        }
      }
    } catch (err) {
      console.error(err.message);
    }
  }


  let optionFlights = flights.map(flight => (
    <option key={flight.flight_id} value={flight.flight_id}>{flight.flight_id}</option>
  ));
  const getFlightList = async () => {
    try {
      const response = await fetch("http://localhost:4000/flight");
      const jsonData = await response.json();

      setFlights(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  


  useEffect(() => {
    getFlightList();
    // getBookings();
  }, []);

  // Update the ticket prices depending on what the current flight_id is since each flight has different prices for the different classes
  useEffect(() => {
    onFlightIDChange();
  }, [flight_id]);

  return (
    <div>
      <NavBar />


      {/* Write Code Here */}
      <header className="App-header">
        <h1 className="mb-4">Book Your Flight</h1>
        <Fragment>
          <form className="mt-3 mb-5" onSubmit={onSubmitForm}>
            {/* <div class="form-group">
              <label>First Name</label>
              <input type="text" class="form-control" placeholder="John" value={fname} onChange={e => setFName(e.target.value)} />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" class="form-control" placeholder="Doe" value={lname} onChange={e => setLName(e.target.value)} />
            </div> */}
            <div>
              <h3>Select Flight:
                <select className="form-select form-select-lg mb-3 mt-3" value={flight_id} aria-label=".form-select-lg example" onChange={e => { const flight_id = e.target.value; setFlightID(flight_id); }}>
                  <option value="#"></option>
                  {optionFlights}
                </select>
              </h3>
            </div>
            <div>
              <h3 className="mb-4">Select Your Seat Type</h3>
              <Card style={{ color: "#000" }}>
                <Card.Body>
                  <div className="container">
                    <div className='row'>
                      <div className='numone col-4'>
                        <Card className='card1 h-100' type="button" value={seat_type} onClick={() => setSeatType("Economy")}>
                          <Card.Body>

                            <h5 className='cart-title'>Economy Class</h5>
                            <p className='card-text'>The largest size available on all flights.</p>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className='numtwo col-4'>
                        <Card className='card2 h-100' type="button" value={seat_type} onClick={() => setSeatType("Business")}>
                          <Card.Body>

                            <h5 className='cart-title'>Business Class</h5>
                            <p className='card-text'>The medium size available on all flights.</p>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className='numthree col-4'>
                        <Card className='card3 h-100' type="button" value={seat_type} onClick={() => setSeatType("First")}>
                          <Card.Body>
                            <h5 className='cart-title'>First Class</h5>
                            <p className='card-text'>The smallest size available on all flights.</p>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                  <h3 className='mt-3'>Selected Seat Type: {seat_type}</h3>
                  {/* <a type='button' href='' onClick={e => deleteBaggage(e)}>I do not want baggage.</a> */}
                </Card.Body>
              </Card>
            </div>
            <div>
              <h3 className="mb-4">Review Your Booking:</h3>
              <Card style={{ background: "#CDEBDC", color: "#000", weight: 600 }}>
                <h3 className='mt-3'>First Name: {fname}</h3>
                <h3 className='mt-3'>Last Name: {lname}</h3>
                <h3 className='mt-3'>Flight Number: {flight_id}</h3>
                <h3 className='mt-3'>Selected Seat Type: {seat_type}</h3>
                <h3 className='mt-3'>Total Amount: {price}</h3>
              </Card>
              <div className="btn-group d-flex mt-3 mb-2" role="group" aria-label="...">
                <Button className="loginButton mt-3 btn-block  w-90" variant="primary" type="submit"> Confirm and Proceed to Seat Selection </Button>
            </div>
            </div>
          </form>
          {/* <div><button className="btn btn-danger" onClick={() => deleteBooking(bookings.flight_id)}>Cancel Booking</button></div> */}
        </Fragment>
      </header>
    </div>
  )
}


export default Book