import "./TopBarNavStyles.scss";
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../images/logo-white.png";
import { useTranslation } from "react-i18next";

import { Button } from "flowbite-react";
// import Button from "react-bootstrap/Button";
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
            to="/projects"
            className="md:no-underline nav-link"
          >
            {t("header.projects.title")}
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/info"
            className="md:no-underline nav-link"
          >
            {t("header.info")}
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/contact"
            className="md:no-underline nav-link"
          >
            {t("header.contact")}
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/18927358297659876345987263"
            className="md:no-underline nav-link"
          >
            UPLOAD PROJECT
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/2034897298456896894587547854"
            className="md:no-underline nav-link"
          >
            EDIT PROJECT
          </Navbar.Link>
          <Button
            onClick={toggleLanguage}
            color="gray"
            className="mr-4 mt-2 outline-none shadow-none"
          >
            {currentLanguage === "en" ? "GR" : "EN"}
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopBarNav;
