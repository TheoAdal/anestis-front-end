import React from "react";
import CarouselAnimation from "./CarouselAnimation";
import "./HomePageStyles.scss";

function Home() {
  return (
    <div className="carousel-wrapper">
      {/* <div className="carousel-container"> */}
        <CarouselAnimation />
      {/* </div> */}
      <h1>Welcome to the Architect's Website</h1>
      <p>Discover the services and projects of our talented architect.</p>
    </div>
  );
}

export default Home;
