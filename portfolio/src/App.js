import React, { useState, useEffect } from 'react';
import './App.css';
import video from './components/video/DJI_0704-trimmed.MP4'
import video1 from './components/video/DJI_0704-trimmed.webm'
import video2 from './components/video/DJI_0704-trimmed.ogv'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import MinorProjects from './components/MinorProjects';


function App() {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(false); 
    } else { // if scroll up show the navbar
      setShow(true);  
    }

    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY])

  return (
    <div className="app">

      <Footer></Footer>
      <div className={show ? "show" : "hidden"} >
        <Navbar/>        
      </div>
       <div className="hero">
        <video autoPlay loop muted playsInline disablePictureInPicture preload='true' className="back-video">
          <source src={video} type="video/mp4"/>
          <source src={video1} type="video/webm"/>
          <source src={video2} type="video/ogv"/>
        </video>
      </div>     
      <section id='homepage'>
        <Title/>        
      </section>
      <section id='projects'>
        <h2       data-aos="fade"
      data-aos-duration="2000"
      >PROJECTS</h2> 
        <hr data-aos="fade"
      data-aos-duration="2000"
      />               
        <Projects/>
        <h2 data-aos="fade"
      data-aos-duration="2000"
      >MINOR PROJECTS</h2>
        <hr data-aos="fade"
      data-aos-duration="2000"
      />        
        <MinorProjects/>
      </section>
      <section id='education'>
        <h2 className='half section-title' data-aos="fade"
      data-aos-duration="2000"
      >EDUCATION</h2>
        <hr className='half-line half' data-aos="fade"
      data-aos-duration="2000"
      />
        <Education/>
      </section>
      <section id='contact'>
        <h2 className='half-left section-title' data-aos="fade"
      data-aos-duration="2000"
      >CONTACT</h2>
        <hr data-aos="fade"
      data-aos-duration="2000"
      />
        <Contact/>
      </section>
      

    </div>
  );
}

export default App;
