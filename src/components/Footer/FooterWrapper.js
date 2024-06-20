import React from "react";
import "./FooterStyles.scss";
import logo from "../../images/sitelogo2.png"; //logo
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 

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
        <div className="contact-info">
        <p><FaPhoneAlt /> +30 2551031277</p>
        <p><FaEnvelope /> aadalakis@yahoo.gr</p>
        </div>
      </div>
    // </div>
  );
}

export default FooterWrapper;