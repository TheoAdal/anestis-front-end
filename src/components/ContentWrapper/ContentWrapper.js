import React from "react";
import { Routes, Route } from "react-router-dom";
import "./ContentWrapperStyles.scss";

// import { useTranslation } from "react-i18next";

import Home from "../HomePage/Home";
import InfoPage from "../InfoPage/Info";
import Contact from "../ContactPage/Contact";
import ProjectsGrid from "../Projects/ProjectGrid";
import SpecificProject from "../Projects/SpecificProject";

// import LoadingScreen from "../LoadingScreenPage/LoadingScreen";
import NotFound from "../ErrorPage/NotFound";
import UploadProject from "../UploadProjectPage/UploadCompleteProject";
import ProjectEditList from "../EditProjectPage/ProjectEditList";
import EditProject from "../EditProjectPage/EditProject";

function ContentWrapperComponent() {
  // const { t } = useTranslation();

  return (
    <div className="content-wrapper-container">
      <div className="content-wrapper-routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/info" element={<InfoPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectsGrid />} />
          {/* <Route path="/projects/:category" element={<ProjectsGrid />} /> */}
          <Route
            path="/projects/:category/:name"
            element={<SpecificProject />}
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/18927358297659876345987263"
            element={<UploadProject />}
          />
          <Route
            path="/2034897298456896894587547854"
            element={<ProjectEditList />}
          />
          <Route path="/editproject/:id" element={<EditProject />} />
        </Routes>
      </div>
    </div>
  );
}

export default ContentWrapperComponent;
