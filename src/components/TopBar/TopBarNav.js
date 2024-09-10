import "./TopBarNavStyles.scss";
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import Link from "next/link";

import logo from "../../images/logo-white.png";
import { useTranslation } from "react-i18next";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";

// import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Navbar } from "flowbite-react";

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
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="mr-3 h-17 w-12" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="[&>ul]:bg-white [&>ul]:absolute [&>ul]:md:relative [&>ul]:w-full md:relative">
          <Navbar.Link as={Link} to="/projects">
            {t("header.projects.title")}
          </Navbar.Link>
          <Navbar.Link as={Link} to="/info">
            {t("header.info")}
          </Navbar.Link>
          <Navbar.Link as={Link} to="/contact">
            {t("header.contact")}
          </Navbar.Link>
          <Navbar.Link as={Link} to="/18927358297659876345987263">
            UPLOAD PROJECT
          </Navbar.Link>
          <Button onClick={toggleLanguage} variant="light">
            {currentLanguage === "en" ? "EN" : "GR"}
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopBarNav;
