import "./ContentWrapperStyles.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../HomePage/Home";

function ContentWrapperComponent() {
  return (
    <div className="content-wrapper-container">
      <div className="content-wrapper-routes">
        <Routes>
          <Route exact path="/" element={< Home />} />
          {/* <Route path="/info" element={<InfoPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/projects/hotels" element={<Hotels />} />
          <Route path="/projects/houses" element={<Houses />} />
          <Route path="/projects/stores" element={<Stores />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default ContentWrapperComponent;
