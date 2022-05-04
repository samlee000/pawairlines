import React, { useState, Fragment } from 'react'
import { Navbar, Container, Nav, NavDropdown, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { v4 as uuid } from 'uuid';
//import AdminListFlights from './sqlComponents/AdminListFlights';

export const Book = () => {
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
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [seat_type, setSeatType] = useState("");

  /* add flight id, booking id, departure, arrival */
  const onSubmitForm = async e => {
    try {
      const response = await fetch("http://localhost:4000/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fname, lname, seat_type })
      });
      window.location = "/book";
    } catch (err) {
      console.error(err.message);
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
              <Nav.Link href="brandon">Admin Flight Page</Nav.Link>
              <Nav.Link href="pet">User Pet Page</Nav.Link>
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
        <h1 className="mb-4">Book Your Flight</h1>
        <Fragment>
          <form className="mt-2 mb-5" onSubmit={onSubmitForm}>
            <div class="form-group">
              <label>First Name</label>
              <input type="text" class="form-control" placeholder="John" value={fname} onChange={e => setFName(e.target.value)} />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" class="form-control" placeholder="Doe" value={lname} onChange={e => setLName(e.target.value)} />
            </div>
            <div>
              <h1 className="mb-4">Select Your Seat Type</h1>
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
                  <h2 className='mt-3'>Selected Seat Type: {seat_type}</h2>
                  {/* <a type='button' href='' onClick={e => deleteBaggage(e)}>I do not want baggage.</a> */}
                </Card.Body>
              </Card>
            </div>
            <button className="btn btn-success">Add</button>
          </form>
        </Fragment>
      </header>
    </div>
  )
}


export default Book