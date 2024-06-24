import React from "react";
import { Routes, Route } from "react-router-dom";
import "./ContentWrapperStyles.scss";

import Home from "../HomePage/Home";
import InfoPage from "../InfoPage/Info";
import Contact from "../ContactPage/Contact";
import LoadingScreen from "../LoadingScreenPage/LoadingScreen";

function ContentWrapperComponent() {
  return (
    <div className="content-wrapper-container">
      <div className="content-wrapper-routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/info" element={<InfoPage />} />
          <Route path="/contact" element={<Contact />} />
          {/*<Route path="/projects" element={<Projects />} />
          <Route path="/projects/hotels" element={<Hotels />} />
          <Route path="/projects/houses" element={<Houses />} />
          <Route path="/projects/stores" element={<Stores />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default ContentWrapperComponent;
