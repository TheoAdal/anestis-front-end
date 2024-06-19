import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../../images/img1.jpg";
import Img2 from "../../images/img2.jpg";
import Img3 from "../../images/img3.jpg";

function CarouselAnimation() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="carousel-image"
          src={Img1}
          alt="img1"
          text="First slide"
        />
        <Carousel.Caption>
          <h3>title</h3>
          <p>logia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={Img2}
          alt="img1"
          text="Second slide"
        />
        <Carousel.Caption>
          <h3>title</h3>
          <p>logia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={Img3}
          alt="img1"
          text="Third slide"
        />
        <Carousel.Caption>
          <h3>title</h3>
          <p>logia</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselAnimation;
