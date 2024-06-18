// import React from "react";
import "./FooterStyles.scss";
// import logo from "../../images/sitelogo2.png"; // Import your company logo

function FooterWrapper() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="company-info">
          {/* <img src={logo} alt="Company Logo" className="company-logo" /> */}
          <div>
            <h4>Anestis Adalakis</h4>
            <p>Address</p>
          </div>
        </div>
        <div className="contact-info">
          <p>Phone: +30 6972919111</p>
          <p>Email: aadalakis@yahoo.gr</p>
        </div>
      </div>
    </div>
  );
}

export default FooterWrapper;