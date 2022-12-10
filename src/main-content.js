import './carousel.js';
import './carousel.css';
import Carousel from './carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainContent() {
    return (
        <div className="main-content">
            <div className="recent-recipes-container">
                <Carousel />
            </div>
        </div>
    );
}

export default MainContent;