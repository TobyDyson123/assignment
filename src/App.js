import './App.css';
import logo_black from './images/logo-black.png';
import {useRef} from 'react';
import './carousel.js';
import Carousel from './carousel';
import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const ref = useRef(null);

  const scrollToBegin = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="App">
      <div className="title-container">
        <div className="logo-container">
          <img className="logo" src={logo_black} alt="get baking logo"></img>
        </div>
        <div className="about-container">
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nam maximus ornare felis, eu lobortis odio. 
            Integer eget semper arcu, sit amet tincidunt mi. 
            Nulla tortor erat, tristique at vestibulum sit amet, vestibulum ut felis. 
            Nulla accumsan sapien vitae felis lacinia commodo. 
            Nulla justo sem, placerat nec tempor at, vulputate non urna. 
            Nunc id pellentesque ligula. Mauris euismod arcu at enim imperdiet, sit amet blandit neque cursus. 
          </p>
        </div>
        <div className="begin-button-container">
          <button className="begin-button" onClick={scrollToBegin}>Let's Begin</button>
        </div>
        <div class="mouse_scroll">
          {/* <div class="mouse">
            <div class="wheel"></div>
          </div> */}
          <div>
            <span class="m_scroll_arrows unu"></span>
            <span class="m_scroll_arrows doi"></span>
            <span class="m_scroll_arrows trei"></span>
          </div>
        </div>
      </div>
      <div ref={ref} className="nav-container">
        <button>Explore Recipes</button>
        <button>Use up your Leftovers</button>
        <button>Build Custom Recipes</button>
      </div>
      <div className="main-content">
        <div className="recent-recipes-container">
          <Carousel />
        </div>
      </div>
      <div className="footer">
        <div className="footer-container">
          THIS IS THE FOOTER!
        </div>
      </div>
    </div>
  );
}

export default App;
