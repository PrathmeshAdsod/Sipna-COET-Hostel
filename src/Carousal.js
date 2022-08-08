import React from "react";
import "./Carousal.css";
import { Carousel } from "react-bootstrap";

const Carousal = (props) => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img src={props.imgsrc1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img src={props.imgsrc2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img src={props.imgsrc3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img src={props.imgsrc4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousal;
