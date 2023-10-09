import './App.css';
import video from './components/video/DJI_0704-trimmed.MP4'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Title from './components/Title';

function App() {
  return (
    <div className="app">

      <Footer></Footer>
      <section id='homepage'>
      <Title/>        
      </section>

      <div className="hero">
        <video autoPlay loop muted play-inline="true" className="back-video">
          <source src={video} type="video/mp4"/>
        </video>
      </div>


      <Navbar/>

    </div>
  );
}

export default App;
