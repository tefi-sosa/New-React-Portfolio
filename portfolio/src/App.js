import './App.css';
import video from './components/video/DJI_0704-trimmed.MP4'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import MinorProjects from './components/MinorProjects';


function App() {
  return (
    <div className="app">

      <Footer></Footer>
      <Navbar/>
       <div className="hero">
        <video autoPlay loop muted play-inline="true" className="back-video">
          <source src={video} type="video/mp4"/>
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
      {/* <div className='separator-container'>
        <div className='separator'></div>
        <div className='separator middle'></div>
        <div className='separator'></div>
      </div> */}
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
