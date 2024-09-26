/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./HomePageStyles.scss"; // Make sure this CSS file is included for styles

import f1 from "../../images/tinyApartments/TinyApartments1.jpg";
import f2 from "../../images/tinyApartments/TinyApartments2.jpg";
import f3 from "../../images/tinyApartments/TinyApartments3.jpg";
import f4 from "../../images/tinyApartments/TinyApartments4.jpg";
import f5 from "../../images/tinyApartments/TinyApartments5.jpg";

const CustomCarousel = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [animate, setAnimate] = useState("");

  // Handle moving to the next slide
  const nextSlide = () => {
    setDirection("next");
    setAnimate("slide-next");
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Handle moving to the previous slide
  const prevSlide = () => {
    setDirection("prev");
    setAnimate("slide-prev");
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  // Reset animation class after animation ends
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(""), 500); // Match duration with animation time
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <div className="carousel-container">
      <Row className="mb-4 carousel-row relative">
        {/* Display two cards with sliding animation */}
        <Col className={`d-flex justify-content-center ${animate} `}>
          <Link to={`/projects/${items.category}/${items.name}`}>
            <div className="image-container h-[80vh]">
              <img
                className="image"
                src={items[index].image}
                alt="Current slide"
              />
              <div className="overlay">
                <div className="text-content">
                  <div className="title">{items[index].title}</div>
                  <div className="description">{items[index].description}</div>
                </div>
              </div>
            </div>
          </Link>
        </Col>

        <Col className={`d-none d-sm-flex justify-content-center ${animate}`}>
          <Link to={`/projects/${items.category}/${items.name}`}>
            <div className="image-container h-[80vh]">
              <img
                className="image"
                src={items[(index + 1) % items.length].image}
                alt="Next slide"
              />
              <div className="overlay">
                <div className="text-content">
                  <div className="title">
                    {items[(index + 1) % items.length].title}
                  </div>
                  <div className="description">
                    {items[(index + 1) % items.length].description}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
      <button className="arrow-btn left-arrow" onClick={prevSlide}>
        <AiOutlineLeft size={20} />
      </button>
      <button className="arrow-btn right-arrow" onClick={nextSlide}>
        <AiOutlineRight size={20} />
      </button>

      {/* Control Buttons */}
      <div className="d-flex justify-content-between relative"></div>
    </div>
  );
};

// Sample data for the cards
const items = [
  {
    image: f1,
    title: "Tiny Apartments",
    description: "Αλεξανδρούπολη",
    category: "Houses",
    name: "tiny-apartments",
  },
  {
    image: f2,
    title: "Tiny Apartments",
    description: "Αλεξανδρούπολη",
    category: "Houses",
    name: "tiny-apartments",
  },
  {
    image: f3,
    title: "Tiny Apartments",
    description: "Αλεξανδρούπολη",
    category: "Houses",
    name: "tiny-apartments",
  },
  {
    image: f4,
    title: "Tiny Apartments",
    description: "Αλεξανδρούπολη",
    category: "Houses",
    name: "tiny-apartments",
  },
  {
    image: f5,
    title: "Tiny Apartments",
    description: "Αλεξανδρούπολη",
    category: "Houses",
    name: "tiny-apartments",
  },
];

const App = () => {
  return (
    <div className="container">
      <CustomCarousel items={items} />
    </div>
  );
};

export default App;
