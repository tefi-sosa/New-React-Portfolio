import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectList = ({ title, date, content, skills, images, githublink, videolink, websitelink }) => {
  
  const [openModal, setOpenModal] = useState(false);
  
  const showModal = () => {
      setOpenModal(true)
  }

  const hideModal = () => {
      setOpenModal(false)
  }

console.log(openModal)

  return (
    <>
    <div className='project-list-item' onClick={showModal} >
      <header className='project-title'>
        <p>{date}</p>
        <h4>{title}</h4>
        
      </header>
      <h3>—</h3>
      <img src={images[0]} alt={title + 'thumbnail'} className='thumbnail'/>
    </div>
    {openModal && <ProjectModal 
    onClose={hideModal}
    title={title} date={date} content={content} skills={skills} images={images} githublink={githublink} videolink={videolink} websitelink={websitelink}
     />}
    </>
  )
}

export default ProjectList