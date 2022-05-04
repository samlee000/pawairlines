import React, { useState, Fragment, useEffect } from 'react'
import { Navbar, Container, Nav, NavDropdown, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import NavBar from './NavBar.js'


export const Book = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [seat_type, setSeatType] = useState("");
  const [flights, setFlights] = useState([]);
  const [flight_id, setFlightID] = useState(null);
  const [flight, setFlight] = useState([]);
  var price = seat_type === 'Economy' ? "$100" : seat_type === 'Business' ? "$200" : "$300";
  /* add flight id, booking id, departure, arrival */
  const onSubmitForm = async e => {
    try {
      const response = await fetch("http://localhost:4000/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fname, lname, seat_type, flight_id, price })
      });
      window.location = "/seat";
      { }
    } catch (err) {
      console.error(err.message);
    }
  };

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
  const deleteBooking = async (id) => {
    try {
      const deleteFLight = await fetch(`http://localhost:4000/book/${id}`, {
        method: "DELETE"
      });

      setFlight(flight.filter(flights => flights.flight_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    getFlightList();
  }, []);

  return (
    <div>
      <NavBar />


      {/* Write Code Here */}
      <header className="App-header">
        <h1 className="mb-4">Book Your Flight</h1>
        <Fragment>
          <form className="mt-3 mb-5" onSubmit={onSubmitForm}>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="John" value={fname} onChange={e => setFName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="Doe" value={lname} onChange={e => setLName(e.target.value)} />
            </div>
            <div>
              <h3>Select Flight:
                <select className="form-select form-select-lg mb-3 mt-3" value={flight_id} aria-label=".form-select-lg example" onChange={e => { const flight_id = e.target.value; setFlightID(flight_id); }}>
                  <option value="null"></option>
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
              <div><button className="btn btn-success" onClick={event => window.location.href = '/seat'}>Proceed to Seat Selection</button></div>
              <div><button className="btn btn-danger" onClick={() => deleteBooking(flights.flight_id)}>Cancel Booking</button></div>
            </div>
          </form>
        </Fragment>
      </header>
    </div>
  )
}


export default Book