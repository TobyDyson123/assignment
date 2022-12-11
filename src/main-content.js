import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecentRecipesCarousel from './carousel.js';
import PopularCarousel from './carousel.js';

function MainContent() {
    return (
        <div className="main-content">
            <div className="recipes-carousel-container">
                <h1 className='recipes-title'>Recent Recipes</h1>
                <RecentRecipesCarousel />
            </div>
            <div className="recipes-carousel-container">
                <h1 className='recipes-title'>Popular Recipes</h1>
                <PopularCarousel />
            </div>
        </div>
    );
}

export default MainContent;