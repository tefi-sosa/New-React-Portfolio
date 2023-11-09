import React from 'react'
import Modal from './Modal';
import ImageCarousel from './Carousel';

const ProjectModal = ({onClose, date , title, content, skills, images, githublink, videolink, websitelink }) => {

  return (
    <Modal onClose={onClose} >
    <p className='closeBtn' onClick={onClose}>
      X
    </p>
    <div className='content'>
      <div className='modal-title'>
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
      <hr className='modal-hr'/>
      <div className='project-buttons'>
          <button className='project-buttons-black' onClick={() => window.open(githublink)} target="_blank">Github</button>
          <button className='project-buttons-black' onClick={() => window.open(videolink)}target="_blank">Video</button>
          {websitelink && <button className='project-buttons-black' onClick={() => window.open(videolink)}target="_blank">Website</button>}
        </div>
      <ImageCarousel className='carousel1' images={images}/>
        <div className='divided-container'>
          <h3 className='left-half'>-<br/>ABOUT</h3>
          <p className='right-half'>{content}</p>
        </div>
        <div className='divided-container'>
          <h3 className='left-half'>-<br/>SKILLS</h3>
          <p className='right-half'>{skills}</p>
        </div>
    </div>
    </Modal>
  );
}

export default ProjectModal