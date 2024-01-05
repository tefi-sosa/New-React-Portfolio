import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { accordionData } from './utils/content';

// const images = accordionData[0].images;

export default function ImageCarousel({images, title}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const array = images
  // console.log(images)
  // console.log(array)
  // console.log(title)

  let titleTrue
  if (title === "OSSIRA") {titleTrue = true}

  return (
    <Carousel className='carousel1' activeIndex={index} onSelect={handleSelect} {...(titleTrue && {variant:"dark"})} >
      {array.map((src) => (
              <Carousel.Item>
              <img className='w-100' src={src} alt='Project slides'/>
            </Carousel.Item>
      ))}
    </Carousel>
  );
}