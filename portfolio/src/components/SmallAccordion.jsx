import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';
import ImageCarousel from './Carousel';

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h4>Personal Information</h4>
        <div>{isActive ? <BsChevronUp/> : <BsChevronDown/>}</div>
      </div>
      {isActive && <div className="accordion-content">
        <hr />
        <p>Estefania Sosa Oberlin</p>
        <p>Salt Lake City, UT</p>        
        <p>estefi.monumental@gmail.com</p>
        <br/>
        </div>}
    </div>
  );
};

export default Accordion;