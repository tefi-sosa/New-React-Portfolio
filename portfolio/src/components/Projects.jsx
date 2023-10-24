import React from 'react'
import Accordion from './Accordion'
import { accordionData } from './utils/content';


export default function Projects() {
  return (
    <div className='project-div'>
      <div className="accordion">
        {accordionData.map(({ title, content, skills, images }) => (
          <Accordion title={title} content={content} skills={skills} images={images}/>
        ))}
      </div>
    </div>
  )
}
