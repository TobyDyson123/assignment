import './App.css';
import './title.css';
import './main-content.css';
import './navbar.css';
import Title from './title';
import MainContent from './main-content';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
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
