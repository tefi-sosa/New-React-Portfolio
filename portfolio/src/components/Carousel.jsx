import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { accordionData } from './utils/content';

// const images = accordionData[0].images;

export default function ImageCarousel(images) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const array = images.images
  // console.log(images)
  // console.log(array)

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {array.map((src) => (
              <Carousel.Item>
              <img className='w-100' src={src} alt='Project slides'/>
            </Carousel.Item>
      ))}
    </Carousel>
  );
}