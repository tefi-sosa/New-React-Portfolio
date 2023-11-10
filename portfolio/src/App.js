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

        <h2>PROJECTS</h2> 
        <hr/>               
        <Projects/>
        <h2>MINOR PROJECTS</h2>
        <hr/>        
        <MinorProjects/>
      </section>
      <section id='education'>
        <h2 className='half section-title'>EDUCATION</h2>
        <hr/>
        <Education/>
      </section>

      <section id='contact'>
        <h2 className='half section-title'>CONTACT</h2>
        <hr/>
        <Contact/>
      </section>


      

    </div>
  );
}

export default App;
