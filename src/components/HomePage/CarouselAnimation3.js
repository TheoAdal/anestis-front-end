/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { Carousel } from "flowbite-react";

import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
import "./HomePageStyles.scss"; // Make sure this CSS file is included for styles

import f1 from "../../images/f1.jpg";
import f2 from "../../images/f2.jpg";
import f3 from "../../images/f3.jpg";
import f4 from "../../images/f4.jpg";
import f5 from "../../images/f5.jpg";

// Sample data for the cards
const items = [
  { image: f1, title: "Αθήνα", description: "Ανακαίνιση Διαμερίσματος" },
  { image: f2, title: "Αθήνα", description: "Ιατρείο" },
  { image: f3, title: "Ξάνθη", description: "Μονοκατοικία" },
  { image: f4, title: "Νάξος", description: "Κατοικία" },
  { image: f5, title: "Αλεξανδρούπολη", description: "Διαμέρισμα" },
];

function Left() {
  return (
    <button className="arrow-btn left-arrow">
      <AiOutlineLeft />
    </button>
  );
}
function Right() {
  return (
    <button className="arrow-btn right-arrow">
      <AiOutlineRight />
    </button>
  );
}

function CarouselAnimation3() {
  return (
    <div className="relative w-full">
      <Carousel
        leftControl={Left()}
        rightControl={Right()}
        slide={false}
        className="custom-button"
      >
        <div className="md:flex hidden flex-row md:p-10  justify-center ">
          <img src={f1} alt="..." className="w-1/2 mr-6" />
          <img src={f2} alt="..." className="w-1/2" />
        </div>
        <div className="md:flex hidden flex-row md:p-10 justify-center">
          <img src={f3} alt="..." className="w-2/5 mr-6" />
          <img src={f4} alt="..." className="w-2/5" />
        </div>
        <div className="md:flex hidden flex-row md:p-10 justify-center">
          <img src={f5} alt="..." className="w-2/5 mr-6" />
          <img src={f2} alt="..." className="w-2/5" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselAnimation3;
