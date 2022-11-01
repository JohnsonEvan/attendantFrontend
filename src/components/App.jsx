import React, { Component } from 'react';
import Home from './Home';
// import Login from './Login';
// import Logout from './Logout';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Display from './display';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} /> */}
          <Route exact path="/display" element={<Display />} />
        </Routes>
    </BrowserRouter>
    );
  }
}

const Navigation = () => (
  <Navbar bg="light" expand="lg">
  <Container>
  <Navbar.Brand href="/">DU-Attendance</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link exact className="nav-link" ClassName="active" href="/">Home</Nav.Link>
    <Nav.Link exact className="nav-link" ClassName="active" href="/display">Attendants</Nav.Link>
    {/* {
        localStorage.getItem("jwt") ?
          <Nav.Link exact className="nav-link" href="/logout">Log Out</Nav.Link>
        :
          <Nav.Link exact className="nav-link" ClassName="active" href="/login">Log In</Nav.Link>
      } */}
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default App;
