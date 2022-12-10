import './App.css';
import './carousel.js';
import Carousel from './carousel';
import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './title';
import './title.css';

function App() {
  return (
    <div className="App">
      <Title />
      <div className="nav-container" id="begin-scroll">
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
