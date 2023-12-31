import React from 'react'
import EmailForm from './EmailForm'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='half-left'       data-aos="fade"
      data-aos-duration="1500">
        {/* <Accordion/> */}
        <h4>—</h4>
        <EmailForm/>
      </div>
      <div className='personal-info' data-aos="fade"
      data-aos-duration="1500">
        <p>Location</p>
        <p><b>Salt Lake City, UT</b></p>      
        <p>Email</p>
        <p><b>estefi.monumental@gmail.com</b></p>
        <p>Social Networks</p>
        <p>
          <a href="https://www.linkedin.com/in/estefania-sosa-70b63a1a8/" target="_blank" rel="noreferrer noopener"><b>Linkedin -</b></a>
          <a href="https://github.com/tefi-sosa" target="_blank" rel="noreferrer noopener"><b> Github</b></a>
        </p>
      </div>
    </div>
  )
}

export default Contact