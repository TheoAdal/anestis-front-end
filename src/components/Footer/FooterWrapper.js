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
        <div className="name-address flex flex-col items-start">
          <h4>Architect</h4>
          <p>Rohn Str. 92</p>
        </div>
      </div>
      <div className="contact-info flex justify-end row">
        <div className="flex items-center justify-end">
          <FaPhoneAlt />
          <p className="pl-2">+30 XXXXXXXX</p>
        </div>
        <div className="flex items-center justify-end">
          <FaEnvelope />
          <p className="pl-2">axdarchitects@gmail.gr</p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default FooterWrapper;
