import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import it1 from '../assets/ima2.png';
import it2 from '../assets/ima3.png';
import it3 from '../assets/ima5.png';
// ... other image imports (adjust for duplicates)

const images = [
  { src: it1, text: 'Imagen 1' },
  { src: it2, text: 'Imagen 2' },
  { src: it3, text: 'Imagen 3' },
  // ... other image objects with unique text
];

const Inicio = () => {
  return (
    <div className="carousel-container">  {/* Optional styling container */}
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image.src} alt={image.text} />
            <Carousel.Caption>
              <h3>{image.text}</h3>  {/* Use text from images array */}
              <p>
                {/* Add custom caption content here (optional) */}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Inicio;
