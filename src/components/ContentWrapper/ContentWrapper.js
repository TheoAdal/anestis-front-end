import React from "react";
import { Routes, Route } from "react-router-dom";
import "./ContentWrapperStyles.scss";

import Home from "../HomePage/Home";
import InfoPage from "../InfoPage/Info";
import Contact from "../ContactPage/Contact";
import ProjectsGrid from "../Projects/ProjectGrid";
import SpecificProject from "../Projects/SpecificProject";

import LoadingScreen from "../LoadingScreenPage/LoadingScreen";
import NotFound from "../ErrorPage/NotFound"; 

function ContentWrapperComponent() {
  return (
    <div className="content-wrapper-container">
      <div className="content-wrapper-routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/info" element={<InfoPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:category" element={<ProjectsGrid />} />
          <Route path="/projects/:category/:project-name" element={<SpecificProject />} />
          <Route path="*" element={<NotFound />} /> {/*for undefined routes*/}
        </Routes>
      </div>
    </div>
  );
}

export default ContentWrapperComponent;
