import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HomePageStyles.scss";
import Img1 from "../../images/img1.jpg";
import Img2 from "../../images/img2.jpg";
import Img3 from "../../images/img3.jpg";

import { useTranslation } from "react-i18next";

function CarouselAnimation() {
  const { t } = useTranslation(); // Hook for translation

  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img
          className="carousel-image"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{t('carousel.title1')}</h3> {/* Use translation key */}
          <p>{t('carousel.description1')}</p> {/* Use translation key */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={Img2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3>{t('carousel.title2')}</h3> {/* Use translation key */}
        <p>{t('carousel.description2')}</p> {/* Use translation key */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={Img3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>{t('carousel.title3')}</h3> {/* Use translation key */}
        <p>{t('carousel.description3')}</p> {/* Use translation key */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselAnimation;

