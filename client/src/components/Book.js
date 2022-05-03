import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import economy_img from "./images/econ_seat.jpg";
import business_img from "./images/bzn_seat.jpg";
import first_image from "./images/first_seat.png";

export const Book = (ticket) => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
  /*const [booking_request, setBooking] = useState([]);*/
  const [ticket_id, setticket_id] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');
  let optionTickets = tickets.map(ticket => (
    <option key={ticket.ticket_id} value={ticket.ticket_id}>{ticket.ticket_id}</option>
  ));

  const [name_response, setName] = useState("");
  const [classtype, setClassType] = useState("");
  const updateClassType = async e => {
    e.preventDefault();
    try {
      const body = { classtype };
      const response = await fetch(`http://localhost:4000/book}`, {
        method: "POST",
        headers: { "Content-Type": "applications/json" },
        body: JSON.stringify(body)
      });
      window.location = "/book";
    } catch (err) {
      console.error(err.message);
    }
  }
  

  return (
    <div>
      <Navbar bg="navbar navbar-dark bg-dark" expand="lg">
        <Container >
          <Navbar.Brand > Paw Airlines </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="book">Book A Flight</Nav.Link>
              <Nav.Link href="membership">Membership</Nav.Link>
              <Nav.Link href="flight">Flight Status</Nav.Link>
              <Nav.Link href="seat">Seat Selection</Nav.Link>
              <Nav.Link href="baggage">Baggage</Nav.Link>
              <NavDropdown title="Logout" id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="register">Register</NavDropdown.Item>
                <NavDropdown.Item href="login">Login</NavDropdown.Item>
                <NavDropdown.Divider /> */}
                <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* Write Code Here */}
      <header className="App-header">
        <h1 className="mb-4">Book your Flight</h1>
        <Card style={{ color: "#000" }}>
          <Card.Body>
            <Form>
              <h2 className="mt-3">Select Flight Option:
                <select className="form-select form-select-lg mb-3 mt-3" aria-label=".form-select-lg example" onChange={e => { const ticket_id = e.target.value; setticket_id(ticket_id); }}>
                  <option value="null">
                    {optionTickets}
                  </option>
                </select>
              </h2>
              <div className="row1 mt-3 ">
                <h2 className="">Passenger First Name </h2>
                <form className="d-flex mt-2 mb-5">
                  <input type="text" className="form-control"
                    value={name_response}
                    onChange={e => setName(e.target.value)} />
                </form>
              </div>
              <h2 className="mt-3">Select Your Seat Type</h2>
              <Card style={{ color: "#000" }}>
                <Card.Body>
                  <div className="container">
                    <div className='row'>
                      <div className='numone col-4'>
                        <Card className='card1 h-100' onClick={() => setClassType("Economy")}>
                          <Card.Body>
                            <Card.Img src = {economy_img} />
                            <h5 className='cart-title'>Economy</h5>
                            <p className='card-text'>You will find the most problematic people here</p>
                          </Card.Body>
                        </Card>
                      </div>

                      <div className='numone col-4' >
                        <Card className='card2 h-100' onClick={() => setClassType("Business Class")}>
                          <Card.Body>
                            <Card.Img src = {business_img} />
                            <h5 className='cart-title'>Business Class </h5>
                            <p className='card-text'>This will make you feel very cash money</p>
                          </Card.Body>
                        </Card>
                      </div>

                      <div className='numone col-4'>
                        <Card className='card3 h-100' onClick={() => setClassType("First Class")}>
                          <Card.Body>
                            <Card.Img src = {first_image} />
                            <h5 className='cart-title'>First Class </h5>
                            <p className='card-text'>Reveille takes this</p>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <h3 className='mt-3'>Selected Class Type: {classtype}</h3>
              </Card>
              <div className="row1 mt-3 ">
                <Form.Group controlId="dob">
                  <Form.Label>Select Departure Date</Form.Label>
                  <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                </Form.Group>
              </div>
            </Form>
            <div className="btn-group d-flex mt-3 mb-2" role="group" aria-label="...">
              <Button className="baggageButton mt-3 btn-block  w-90" variant="primary" onClick={e => updateClassType(e)}> Select this Seat Type </Button>
            </div>
            <div className="row1 mt-3 center ">
              <Button className="seatButton mt-3 btn-block  w-90" variant="primary" onClick={event => window.location.href = '/seat'}> Go to Seat Selection </Button>
            </div>
          </Card.Body>
        </Card>
      </header>

    </div>
  )
}


export default Book