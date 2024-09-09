import "./TopBarNavStyles.scss";
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../images/logo512.png";

import { useTranslation } from "react-i18next";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

function TopBarNav() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLanguage = i18n.language;
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "gr" : "en";
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("lang", newLanguage);
    navigate({ search: searchParams.toString() });
  };

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
              {t("header.home")}
            </Link>
            {/* className="nav-link font-class" for other font styles*/}
            <NavDropdown
              title="Projects"
              // id="basic-nav-dropdown"
              className="nav-dropdown"
              style={{ color: "#e7dbdb" }}
            >
              <NavDropdown.Item className="dropdown-item">
                <Link to="/projects/hotels">{t("header.projects.hotels")}</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item">
                <Link to="/projects/houses">{t("header.projects.houses")}</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item">
                <Link to="/projects/stores">{t("header.projects.stores")}</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="link" to="/info">
              {t("header.info")}
            </Link>
            <Link className="link" to="/contact">
              {t("header.contact")}
            </Link>
            {/* DEV */}
            <Link className="link" to="/18927358297659876345987263">
              Upload Project
            </Link>
          </Nav>
        </Container>
        <div className="language-toggle-btn">
          <Button onClick={toggleLanguage} variant="light">
            {currentLanguage === "en" ? "EN" : "GR"}
          </Button>
        </div>
      </Navbar>
    </div>
  );
}

export default TopBarNav;
