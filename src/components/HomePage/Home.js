import React from "react";
import "./HomePageStyles.scss";

import CarouselAnimation from "./CarouselAnimation";
// import Details from "./Details.js";
import ProjectSection from "./ProjectSection.js";

function Home() {
  return (
    <div className="carousel-wrapper">
      {/* <div className="carousel-container"> */}
      <CarouselAnimation />
      {/* </div> */}
      <div className="welcome">
        <h1>Welcome to the Architect's Website</h1>
        <p>Discover the services and projects of our talented architect.</p>
        </div>
        <ProjectSection/>
        {/* <Details/> */}
      
    </div>
  );
}

export default Home;
