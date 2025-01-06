import React from "react";
import FrontPageCarousel from "./FrontPageCarousel";

const slides = [
  {
    image: "https://via.placeholder.com/1200x400?text=Slide+1",
    caption: "Welcome to Our Website",
  },
  {
    image: "https://via.placeholder.com/1200x400?text=Slide+2",
    caption: "Discover Our Features",
  },
  {
    image: "https://via.placeholder.com/1200x400?text=Slide+3",
    caption: "Join Us Today",
  },
];

const Carousel_1 = () => {
  return (
    <div>
      <FrontPageCarousel slides={slides} />
    </div>
  );
};

export default Carousel_1;
