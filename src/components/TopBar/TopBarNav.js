import "./TopBarNavStyles.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/sitelogo2.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function TopBarNav() {
  return (
    <div className="nav-bar-container">
      <Navbar data-bs-theme="dark">
        <Container className="container">
          <Navbar.Brand className="nav logo">
            <Link to="/">
              <img src={logo} alt="LOGO" className="nav-logo font-class" />
            </Link>
          </Navbar.Brand>
          <Nav className="top-bar-nav">
            <Link className="link" to="/">
              Home
            </Link>
            {/* className="nav-link font-class" for other font styles*/}
            <NavDropdown
              title="Projects"
              // id="basic-nav-dropdown"
              className="nav-dropdown"
              style={{ color: "#e7dbdb" }}
            >
              <NavDropdown.Item as="div" className="dropdown-item">
                <Link to="/projects/hotels">Hotels</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div" className="dropdown-item">
                <Link to="/projects/houses">Houses</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div" className="dropdown-item">
                <Link to="/projects/stores">Stores</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="link" to="/info">
              Info
            </Link>
            <Link className="link" to="/contact">
              Contact
            </Link>
            {/* DEV */}
            <Link className="link" to="/18927358297659876345987263"> 
              Upload Project
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBarNav;
