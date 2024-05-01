import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImage from '../../../assets/Health Life Medical Center Logo (1).png';
import '../Navbar/navbarC.css';

function Navbar1(props) {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container fluid>
        <Navbar.Brand href="/" className="brand-margin-right">
          <div className="logo-wrapper">
            <img src={logoImage} alt="Logo" className="logo-image" />
            <span className="title">{props.title}</span>
          </div>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" className="nav-link-centered">Home</Nav.Link>
          <Nav.Link href="/about" className="nav-link-centered">About</Nav.Link>
          <Nav.Link href="/services" className="nav-link-centered">Services</Nav.Link>         
        </Nav>
        <Nav>
          <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown" drop="start">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
