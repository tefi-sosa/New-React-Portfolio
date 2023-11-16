import React from 'react'
import Accordion from './Accordion'
import { accordionData } from './utils/content';
import ProjectList from './ProjectList';


export default function Projects({ open, onClose }) {
  return (
    <div className='project-div'>
      <div className="accordion"       data-aos="fade"
      data-aos-duration="1500"
      >

        {accordionData.map(({ title, date, content, skills, images, githublink, videolink, websitelink }) => (
            <ProjectList title={title} date={date} content={content} skills={skills} images={images} githublink={githublink} videolink={videolink} websitelink={websitelink}/>
          ))}


        {/* {accordionData.map(({ title, content, skills, images, githublink, videolink, websitelink }) => (
          <Accordion title={title} content={content} skills={skills} images={images} githublink={githublink} videolink={videolink} websitelink={websitelink}/>
        ))} */}
      </div>
    </div>
  )
}
