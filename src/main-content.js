import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecentRecipesCarousel from './carousel.js';
import PopularDemandCarousel from './carousel.js';
import SeasonalRecipesCarousel from './carousel.js';

function MainContent() {
    return (
        <div className="main-content">
            <div className="recipes-carousel-container">
                <h1 className='recipes-title'>Recent Recipes</h1>
                <RecentRecipesCarousel />
            </div>
            <div className="recipes-carousel-container">
                <h1 className='recipes-title'>Seasonal Recipes</h1>
                <SeasonalRecipesCarousel />
            </div>
            <div className="recipes-carousel-container">
                <h1 className='recipes-title'>Popular Demand</h1>
                <PopularDemandCarousel />
            </div>
        </div>
    );
}

export default MainContent;