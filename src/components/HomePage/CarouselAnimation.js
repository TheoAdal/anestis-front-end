import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HomePageStyles.scss";
import Img1 from "../../images/img1.jpg";
import Img2 from "../../images/img2.jpg";
import Img3 from "../../images/img3.jpg";

function CarouselAnimation() {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img
          className="carousel-image"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={Img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={Img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselAnimation;

