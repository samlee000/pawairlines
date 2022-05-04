import React, { useState, useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import AppContext from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Account = () => {
  const myContext = useContext(AppContext);

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

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [user_address, setUser_address] = useState("");
  const [user_email, setUser_email] = useState("");
  const [phone_number, setPhone_number] = useState("");

  console.log(myContext.current_user_email);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError('');
  //   try {
  //     const body = { first_name, last_name, age, gender, user_address, user_email, phone_number };
  //     const response = await fetch(`http://localhost:4000/user/${users.flight_id}`, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(body)
  //     });

  //     await createUser(email, password);
  //     // navigate('/book')
  //     window.location = "/book";
  //   } catch (e) {
  //     setError(e.message);
  //     console.log(e.message);
  //   }
  // };

  // const location = useLocation();

  return (
    <div>
      <Navbar bg="navbar navbar-dark bg-dark" expand="lg">
        <Container >
          <Navbar.Brand > Paw Airlines </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="account">My Account</Nav.Link>
              <Nav.Link href="book">Book A Flight</Nav.Link>
              <Nav.Link href="pet">Pet Selection</Nav.Link>
              <Nav.Link href="seat">Seat Selection</Nav.Link>
              <Nav.Link href="baggage">Baggage</Nav.Link>
              <NavDropdown title="Logout" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <header className="App-header">

        <h1 className="mb-4">My Account</h1>

        <Card style={{ color: "#000" }}>
          {/* <Card.Imgs src= {logo} /> */}
          <Card.Body>
          <Form>
            <h1>sdfasfasf</h1>
            {/* <h1>{location.state.current_user_email}</h1> */}
          {/* <div className="row">
              <div className="form-group col-md-6">
                <label for="inputFName" className="h5">First Name</label>
                <input onChange={(e) => setFirst_name(e.target.value)} type="text" className="form-control" id="inputFName" placeholder="First Name" required="true"/>
              </div>
              <div className="form-group col-md-6">
                <label for="inputLName" className="h5">Last Name</label>
                <input onChange={(e) => setLast_name(e.target.value)} type="text" className="form-control" id="inputLName" placeholder="Last Name" required="true"/>
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress" className="h5">Address</label>
              <input onChange={(e) => setUser_address(e.target.value)} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required="true"/>
            </div>
            <div className="form-group">
              <label for="phonenumber" className="h5">Phone Number</label>
              <input onChange={(e) => setPhone_number(e.target.value)} type="text" className="form-control" id="phonenumber" placeholder="000-000-0000" required="true"/>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label for="inputEmail4" className="h5">Email</label>
                <input onChange={(e) => setEmail(e.target.value) & setUser_email(e.target.value)} type="email" className="form-control" id="inputEmail4" placeholder="Email" required="true"/>
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4" className="h5">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="inputPassword4" placeholder="Password" required="true"/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="gender" className="h5">Gender</label>
                <select id="gender" className="form-control" onChange={(e) => setGender(e.target.value)} required="true">
                  <option selected className="h5">Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputAge" className="h5">Age</label>
                <input onChange={(e) => setAge(e.target.value)} type="text" className="form-control" id="inputAge" required="true"/>
              </div>
            </div> */}
          </Form>
          </Card.Body>  
        </Card>
      </header>

    </div>
  )
}

export default Account