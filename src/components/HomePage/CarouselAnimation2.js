import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./HomePageStyles.scss"; // Make sure this CSS file is included for styles
import Img1 from "../../images/img1.jpg";
import Img2 from "../../images/img2.jpg";
import Img3 from "../../images/img3.jpg";

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
      <Row className="mb-4 carousel-row">
        {/* Display two cards with sliding animation */}
        <Col className={`d-flex justify-content-center ${animate}`}>
          <div className="image-container">
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
        </Col>

        <Col className={`d-flex justify-content-center ${animate}`}>
          <div className="image-container">
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
        </Col>
      </Row>

      {/* Control Buttons */}
      <div className="d-flex justify-content-between">
        <button className="arrow-btn" onClick={prevSlide}>
          <AiOutlineLeft size={20} />
        </button>
        <button className="arrow-btn" onClick={nextSlide}>
          <AiOutlineRight size={20} />
        </button>
      </div>
    </div>
  );
};

// Sample data for the cards
const items = [
  { image: Img1, title: "Card A", description: "This is card A" },
  { image: Img2, title: "Card B", description: "This is card B" },
  { image: Img3, title: "Card C", description: "This is card C" },
  { image: Img1, title: "Card D", description: "This is card D" },
  { image: Img2, title: "Card E", description: "This is card E" },
];

const App = () => {
  return (
    <div className="container mt-5">
      <CustomCarousel items={items} />
    </div>
  );
};

export default App;
