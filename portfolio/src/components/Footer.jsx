import React from 'react'

function Footer() {
  return (
    <section id='footer'>
      <div className='logo'>
        <h4>E S<br/>O .</h4>
      </div>
      <div className='contact-icons'>
        <a href='https://www.linkedin.com/in/estefania-sosa-70b63a1a8/' target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-linkedin fa-l"></i></a>
        <a href='https://www.instagram.com/tefi.sosa/' target="_blank" rel="noreferrer noopener"><i class="social-icon fa-brands fa-instagram fa-l"></i></a>
        <a href='#contact'><i class="social-icon fa-solid fa-envelope fa-l"></i></a>
        <a href='https://github.com/tefi-sosa' target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-github fa-l"></i></a>
      </div>
    </section>
  )
}

export default Footer