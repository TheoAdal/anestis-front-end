import "./TopBarNavStyles.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/sitelogo2.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function TopBarNav() {
  const navbarStyle = {
    // backgroundColor: "#00A98F",
  };

  return (
    <div className="nav-bar-container">
      <Navbar  data-bs-theme="dark">
        <Container className="container">
          <Navbar.Brand className="nav logo">
            <Nav.Link to="/">
               <img src={logo} alt="LOGO" className="nav-logo font-class" />
             </Nav.Link>
          </Navbar.Brand>
          <Nav className="top-bar-nav">
             <Nav.Link to="/" >Home</Nav.Link> {/* className="nav-link font-class" for other font styles*/} 
            <NavDropdown title="Projects" id="basic-nav-dropdown" className="nav-dropdown">
              <NavDropdown.Item as="div" className="dropdown-item">
                <Nav.Link to="/hotels">Hotels</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div" className="dropdown-item">
                <Nav.Link to="/houses">Houses</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div" className="dropdown-item">
                <Nav.Link to="/stores">Stores</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/info">Info</Nav.Link>
            <Nav.Link to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBarNav;
