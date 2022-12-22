import './App.css';
import './title.css';
import './main-content.css';
import './navbar.css';
import './footer.css';
import './scrolltotop.css';
import Home from './Home.js';
import ExploreRecipes from './ExploreRecipes';
import Leftovers from './Leftovers';
import CustomRecipes from './CustomRecipes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recipes from './Recipes';
import RecipePage from './RecipePage.js';

// https://get-baking.free.beeceptor.com/recipes
// https://tobydyson123.github.io/interactive-web/

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/interactive-web">
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/explorerecipes" element={<ExploreRecipes />}>
            <Route path="" element={<Recipes />} />
            <Route path=":postSlug" element={<RecipePage />} />
          </Route>

          <Route path="/leftovers" element={<Leftovers />} />

          <Route path="/customrecipes" element={<CustomRecipes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
