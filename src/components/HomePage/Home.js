import React from "react";
import "./HomePageStyles.scss";

import { useTranslation } from "react-i18next";

import CarouselAnimation from "./CarouselAnimation";
import CarouselAnimation2 from "./CarouselAnimation2";
// import Details from "./Details.js";
import ProjectSection from "./ProjectSection.js";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="carousel-wrapper">
      {/* <div className="carousel-container"> */}
      <CarouselAnimation2 />
      {/* </div> */}
      {/* <div className="welcome">
        <h1>{t("welcome")}</h1> 
        <p>{t("discover_services")}</p> 
      </div> */}
      {/* <ProjectSection /> */}
      {/* <Details/> */}
    </div>
  );
}

export default Home;
