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
      <Navbar fluid rounded className="max-h-full pt-0 pb-6">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="h-[150px] w-[150px]" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="outline-none shadow-none" />
        <Navbar.Collapse className=" [&>ul]:bg-white [&>ul]:absolute [&>ul]:md:relative [&>ul]:items-end [&>ul]:pr-5 [&>ul]:pb-3 [&>ul]:w-full [&&>ul]:mt-0 md:relative [&>ul]:shadow-md [&>ul]:md:shadow-none">
          <Navbar.Link
            as={Link}
            to="/projects/hotels"
            className="md:no-underline"
          >
            {t("header.projects.title")}
          </Navbar.Link>
          <Navbar.Link as={Link} to="/info" className="md:no-underline">
            {t("header.info")}
          </Navbar.Link>
          <Navbar.Link as={Link} to="/contact" className="md:no-underline">
            {t("header.contact")}
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/18927358297659876345987263"
            className="md:no-underline"
          >
            UPLOAD PROJECT
          </Navbar.Link>
          <Button
            onClick={toggleLanguage}
            variant="light"
            className="mr-4 mt-2"
          >
            {currentLanguage === "en" ? "EN" : "GR"}
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopBarNav;
