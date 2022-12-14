import './App.css';
import './title.css';
import './main-content.css';
import './navbar.css';
import './footer.css';
import './scrolltotop.css';
import Title from './title';
import MainContent from './main-content';
import Navbar from './navbar';
import Footer from './footer';
import ScrollButton from './scrolltotop';

// https://get-baking.free.beeceptor.com/recipes

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <ScrollButton />      
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
