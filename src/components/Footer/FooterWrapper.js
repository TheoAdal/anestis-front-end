import React from "react";
import "./FooterStyles.scss";
import logo from "../../images/logo-white.png"; //logo
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function FooterWrapper() {
  return (
    // <div className="footer-container">
    <div className="footer-content">
      <div className="company-info">
        <img src={logo} alt="Company Logo" className="company-logo" />
        <div className="name-address">
          <h4>Anestis Adalakis</h4>
          <p>Καραισκάκη 9 & Ειρήνης</p>
        </div>
      </div>
      <div className="contact-info flex justify-end row">
        <div className="flex items-center">
          <FaPhoneAlt />
          <p className="pl-2">+30 2551031277</p>
        </div>
        <div className="flex items-center">
          <FaEnvelope />
          <p className="pl-2">aadalakis@yahoo.gr</p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default FooterWrapper;
