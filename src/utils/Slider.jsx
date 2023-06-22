import React from "react";
import { Carousel } from "react-bootstrap";

import photo4 from "./images/photo4.jpg";
import photo2 from "./images/photo2.jpg";
import photo5 from "./images/photo5.jpg";
function Slider() {
  return (
    <div  style={{ backgroundColor: "#1c6266" }}>
    
      <Carousel className="mx-2">
        <Carousel.Item interval={200}>
          <img
            className="d-block my-6 w-100 "
            height="646vh"
            src={photo4}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block my-6 w-100 "
            src={photo2}
            height="646vh"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block my-6 w-100"
            src={photo5}
            height="646vh"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* <ProductsList/> */}
    </div>
  );
}

export default Slider;
