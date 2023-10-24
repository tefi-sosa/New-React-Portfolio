import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';
import ImageCarousel from './Carousel';

const Accordion = ({ title, content, skills, images }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        <div>{isActive ? <BsChevronUp/> : <BsChevronDown/>}</div>
      </div>
      {isActive && <div className="accordion-content">
        <p/>{content}<p/>
        <hr />
        <p/>{skills}<p/>
        <ImageCarousel images={images}/>
        </div>}
    </div>
  );
};

export default Accordion;