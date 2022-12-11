import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecentRecipesCarousel from './carousel.js';
import PopularDemandCarousel from './carousel.js';
import SeasonalRecipesCarousel from './carousel.js';
import cake from './images/cake.jpg';
import bread from './images/bread.jpg';

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
            <div className="cards-container">
                <img src={cake} alt="picture of cake"></img>
                <div className="cards-info">
                    <h1>Explore Recipes</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ex a quam commodo interdum laoreet eu orci. 
                        In ante ex, congue et quam cursus, vestibulum dictum mi. Pellentesque cursus risus risus, at mollis nisi eleifend eget. 
                        Donec blandit justo ac vestibulum mattis. Aliquam nec scelerisque nulla, ac viverra lacus. Etiam eu ornare metus. 
                        Morbi ac tristique justo. Proin placerat interdum leo ac efficitur.
                    </p>
                    <button className='cards-button'>Take me there!</button>
                </div>
            </div>
            <div className="cards-container">
                <img src={bread} alt="picture of cake"></img>
                <div className="cards-info">
                    <h1>Use up your Leftovers</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ex a quam commodo interdum laoreet eu orci. 
                        In ante ex, congue et quam cursus, vestibulum dictum mi. Pellentesque cursus risus risus, at mollis nisi eleifend eget. 
                        Donec blandit justo ac vestibulum mattis. Aliquam nec scelerisque nulla, ac viverra lacus. Etiam eu ornare metus. 
                        Morbi ac tristique justo. Proin placerat interdum leo ac efficitur.
                    </p>
                    <button className='cards-button'>Take me there!</button>
                </div>
            </div>
            <div className="cards-container">
                <img src={cake} alt="picture of cake"></img>
                <div className="cards-info">
                    <h1>Build Custom Recipes</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ex a quam commodo interdum laoreet eu orci. 
                        In ante ex, congue et quam cursus, vestibulum dictum mi. Pellentesque cursus risus risus, at mollis nisi eleifend eget. 
                        Donec blandit justo ac vestibulum mattis. Aliquam nec scelerisque nulla, ac viverra lacus. Etiam eu ornare metus. 
                        Morbi ac tristique justo. Proin placerat interdum leo ac efficitur.
                    </p>
                    <button className='cards-button'>Take me there!</button>
                </div>
            </div>
        </div>
    );
}

export default MainContent;