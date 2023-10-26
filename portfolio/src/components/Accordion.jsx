import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';
import ImageCarousel from './Carousel';

const Accordion = ({ title, content, skills, images, githublink, videolink, websitelink }) => {
  const [isActive, setIsActive] = useState(false);

  console.log(websitelink)

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        <div>{isActive ? <BsChevronUp/> : <BsChevronDown/>}</div>
      </div>
      {isActive && <div className="accordion-content">
        <hr />        
        <p>{content}</p>
        <br/>
        <p>{skills}</p>
        <br/>
        <div className='project-buttons'>
          <button onClick={() => window.open(githublink)} target="_blank">Github</button>
          <button onClick={() => window.open(videolink)}target="_blank">Video</button>
          {websitelink && <button onClick={() => window.open(videolink)}target="_blank">Live Website</button>}
        </div>
        <ImageCarousel images={images}/>
        </div>}
    </div>
  );
};

export default Accordion;