import './App.css';
import './title.css';
import './main-content.css';
import './navbar.css';
import './footer.css';
import './scrolltotop.css';
import Home from './Home.js';
import ExploreRecipes from './ExploreRecipes';
import { Routes, Route } from 'react-router-dom';

// https://get-baking.free.beeceptor.com/recipes

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/explorerecipes" element={<ExploreRecipes />} />
      </Routes>
    </div>
  );
}

export default App;
