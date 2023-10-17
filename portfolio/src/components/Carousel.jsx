import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './images/ossira-homepage-screenshot-cropped.png';
import ExampleCarouselImage2 from './images/ossira-product.png';
import ExampleCarouselImage3 from './images/ossira-cart-screenshot.png';
import ExampleCarouselImage4 from './images/ossira-myorders-screenshot.png';
import wanderlust from './images/wanderlust.png';

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='w-100' src={ExampleCarouselImage} alt='First slide'/>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-100' src={ExampleCarouselImage2} alt='First slide'/> 
      </Carousel.Item>
      <Carousel.Item>
       <img className='w-100' src={ExampleCarouselImage3} alt='First slide'/>
      </Carousel.Item>
      <Carousel.Item>
       <img className='w-100' src={ExampleCarouselImage4} alt='First slide'/>
      </Carousel.Item>
    </Carousel>
  );
}