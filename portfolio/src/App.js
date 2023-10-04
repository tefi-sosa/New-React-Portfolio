import './App.css';
import video from './components/video/DJI_0704-trimmed.MP4'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Footer></Footer>
      <div className="hero">
        <video autoPlay loop muted play-inline="true" className="back-video">
          <source src={video} type="video/mp4"/>
        </video>
      </div>
    </div>
  );
}

export default App;
