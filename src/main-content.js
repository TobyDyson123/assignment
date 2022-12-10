import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecentRecipesCarousel from './carousel.js'

function MainContent() {
    return (
        <div className="main-content">
            <div className="recent-recipes-container">
                <h1 className='recent-recipes-title'>Recent Recipes</h1>
                <RecentRecipesCarousel />
            </div>
        </div>
    );
}

export default MainContent;