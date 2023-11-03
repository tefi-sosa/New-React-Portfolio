import './App.css';
import video from './components/video/DJI_0704-trimmed.MP4'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';

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
      <section id='about'>
        <About/>
      </section >
      <section id='projects'>
        <h2 className='vertical'>PROJECTS -</h2>
        <Projects/>
      </section>



      

    </div>
  );
}

export default App;
