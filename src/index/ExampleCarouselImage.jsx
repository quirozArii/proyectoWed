import React from 'react';
import { Image } from 'react-bootstrap';

const ExampleCarouselImage = ({ text, src }) => {
  return (
    <div className="carousel-image-container">  // Optional styling container
      <Image src={src} alt={text} fluid />
    </div>
  );
};

export default ExampleCarouselImage;