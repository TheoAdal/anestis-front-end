// import "./TopBarNavStyles.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import logo from "../../images/sitelogo2.png";

function TopBarNav() {
  const navbarStyle = {
    backgroundColor: "#00A98F",
  };


  return (
    <div className="nav-bar-container">
      <div style={navbarStyle} data-bs-theme="dark">
        <div className="container">
          <div className="nav logo">
            {/* <Link to="/">
               <img src={logo} alt="LOGO" className="nav-logo" />
             </Link> */}
          </div>
          <div className="top-bar-nav">
            <Link to="/">Home</Link>
            <Link to="/about">Projects</Link>
            <Link to="/contact">Info</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBarNav;
