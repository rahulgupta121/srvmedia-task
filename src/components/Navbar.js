import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mainLogo from '../logos/logo.png'
export default function NavbarHead() {
  return (
    <>
        <Navbar bg="light" expand="lg">
      <Container>
      <Row className="w-100">
        <Col md={6}>
        <Navbar.Brand href="#home">
          <img src={mainLogo} className="main-logo" alt="brand-logo"/>
          </Navbar.Brand>
        </Col>

        <Col md={6} className="d-flex">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#link">Courses</Nav.Link>
            <Nav.Link href="#home">Facilities</Nav.Link>
            <Nav.Link href="#link">Campus</Nav.Link>
            <Nav.Link href="#home">Events</Nav.Link>
            <Nav.Link href="#link">Recruiters</Nav.Link>
             
          </Nav>
        </Navbar.Collapse>
        </Col>
      </Row>
      </Container>
    </Navbar>
      <br />
    </>
  )
}
