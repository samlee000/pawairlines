import React, { useState, useEffect, Link } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export const Book = (bookFlight) => {
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
  const [booking_request, setBooking] = useState([]);
  const [ticket_id, setticket_id] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');
  let optionTickets = tickets.map(ticket => (
    <option key={ticket.ticket_id} value={ticket.ticket_id}>{ticket.ticket_id}</option>
  ));

  const [name_response, setName] = useState("");
  const [classType, setClassType] = useState(bookFlight.classType)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      navigate('/seat')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
      alert('Incorrect username or password.')

    }
  };

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
                            <h5 className='cart-title'>Economy</h5>
                            <p className='card-text'>You will find the most problematic people here</p>
                          </Card.Body>
                        </Card>
                      </div>

                      <div className='numone col-4' >
                        <Card className='card2 h-100' onClick={() => setClassType("BusinessClass")}>
                          <Card.Body>
                            <h5 className='cart-title'>Business Class </h5>
                            <p className='card-text'>This will make you feel very cash money</p>
                          </Card.Body>
                        </Card>
                      </div>

                      <div className='numone col-4'>
                        <Card className='card3 h-100' onClick={() => setClassType("FirstClass")}>
                          <Card.Body>
                            <h5 className='cart-title'>First Class </h5>
                            <p className='card-text'>Reveille takes this</p>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <div className="row1 mt-3 ">
                <Form.Group controlId="dob">
                  <Form.Label>Select Departure Date</Form.Label>
                  <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                </Form.Group>
              </div>
            </Form>
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