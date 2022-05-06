import React, { useState, Fragment, useEffect } from 'react'
import { Navbar, Container, Nav, NavDropdown, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import NavBar from "./NavBar";


export const Book = () => {

  const [fname, setFName] = useState(localStorage.getItem('current_fname'));
  const [lname, setLName] = useState(localStorage.getItem('current_lname'));
  const [seat_type, setSeatType] = useState("");
  const [flights, setFlights] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [booking_id, setBookingID] = useState(null);
  const [flight_id, setFlightID] = useState(null);
  const [flight, setFlight] = useState([]);
  const navigate = useNavigate();

  var price = seat_type === 'Economy' ? "100" : seat_type === 'Business' ? "200" : "300";
  var user_id = localStorage.getItem('current_user_id');

  /* add flight id, booking id, departure, arrival */
  const onSubmitForm = async e => {
    try {
      const response = await fetch("http://localhost:4000/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fname, lname, seat_type, flight_id, price, user_id})
      });
      // console.log(response);
      const response1 = await fetch("http://localhost:4000/seat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flight_id, user_id, seat_type, price})
      });

      // navigate('/seat');
      navigate("/seat");
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

  });

  console.log(localStorage.getItem('current_user_id'));
  console.log(localStorage.getItem('current_fname'));

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
                        <Card className='card1 h-100' value={seat_type} onClick={() => setSeatType("Economy")}>
                          <Card.Body>

                            <h5 className='cart-title'>Economy Class</h5>
                            <p className='card-text'>The largest size available on all flights.</p>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className='numtwo col-4'>
                        <Card className='card2 h-100' value={seat_type} onClick={() => setSeatType("Business")}>
                          <Card.Body>

                            <h5 className='cart-title'>Business Class</h5>
                            <p className='card-text'>The medium size available on all flights.</p>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className='numthree col-4'>
                        <Card className='card3 h-100' value={seat_type} onClick={() => setSeatType("First")}>
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
              <button className="btn btn-success">Confirm and Proceed to Seat Selection</button>
            </div>
          </form>
          {/* <div><button className="btn btn-danger" onClick={() => deleteBooking(bookings.flight_id)}>Cancel Booking</button></div> */}
        </Fragment>
      </header>
    </div>
  )
}


export default Book