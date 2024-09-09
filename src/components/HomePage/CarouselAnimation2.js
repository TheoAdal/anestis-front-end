import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import "./CustomCarousel.css"; // Import the CSS file for animation styles
import "./HomePageStyles.scss";
import Img1 from "../../images/img1.jpg";
import Img2 from "../../images/img2.jpg";
import Img3 from "../../images/img3.jpg";

const CustomCarousel = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next"); // Track slide direction

  // Handle moving to the next slide
  const nextSlide = () => {
    if (index < items.length - 2) {
      setDirection("next");
      setIndex(index + 1);
    }
  };

  // Handle moving to the previous slide
  const prevSlide = () => {
    if (index > 0) {
      setDirection("prev");
      setIndex(index - 1);
    }
  };

  return (
    <div className="carousel-container">
      <Row className="mb-4">
        {/* Display two cards with sliding animation */}
        <Col className={`d-flex justify-content-center slide-${direction}`}>
          {items[index] && (
            <div
              className="image-container"
              // style={{ width: "18rem", position: "relative" }}
            >
              <img
                variant="top"
                className=" "
                src={items[index].image}
                alt="First slide"
              />
              <div class="overlay"></div>
              <div className="absolute">
                <div> {items[index].title}</div>
                <div> {items[index].description}</div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </div>
            </div>
          )}
        </Col>

        <Col className={`d-flex justify-content-center slide-${direction}`}>
          {items[index + 1] && (
            <Card style={{ width: "18rem", position: "relative" }}>
              <Card.Img
                variant="top"
                src={items[index + 1].image}
                style={{ position: "absolute" }}
              />
              <Card.Body>
                <Card.Title style={{ position: "absolute" }}>
                  {items[index + 1].title}
                </Card.Title>
                <Card.Text style={{ position: "absolute" }}>
                  {items[index + 1].description}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      {/* Control Buttons */}
      <div className="d-flex justify-content-between">
        {/* <Button variant="dark" onClick={prevSlide} disabled={index === 0}>
          Previous
        </Button>
        <Button
          variant="dark"
          onClick={nextSlide}
          disabled={index >= items.length - 2}
        >
          Next
        </Button> */}
        <button
          className="arrow-btn"
          onClick={prevSlide}
          disabled={index === 0}
        >
          <AiOutlineLeft size={20} />
        </button>
        <button
          className="arrow-btn"
          onClick={nextSlide}
          disabled={index >= items.length - 2}
        >
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
