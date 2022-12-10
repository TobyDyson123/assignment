import './App.css';
import './title.css';
import './main-content.css';
import Title from './title';
import MainContent from './main-content';

function App() {
  return (
    <div className="App">
      <Title />
      <div className="nav-container" id="begin-scroll">
        <button>Explore Recipes</button>
        <button>Use up your Leftovers</button>
        <button>Build Custom Recipes</button>
      </div>
      <MainContent />
      <div className="footer">
        <div className="footer-container">
          THIS IS THE FOOTER!
        </div>
      </div>
    </div>
  );
}

export default App;
