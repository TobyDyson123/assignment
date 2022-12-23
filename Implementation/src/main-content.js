import './carousel.css';
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecentRecipesCarousel, PopularDemandCarousel, SeasonalRecipesCarousel } from './carousel.js';
import Card from './card.js';
import cake from './images/cake.jpg';
import bread from './images/bread.jpg';
import pastry from './images/pastry.jpg';
import Axios from "axios";

function MainContent() {
    const getRecipes = () => {
        Axios.get("https://get-baking.free.beeceptor.com/recipes").then(
            (response) => {
                response.data.forEach((item) => {
                    console.log(item);
                });
            }
        );
    };

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
            <Card title="Explore Recipes" src={cake} alt="picture of cake" to={"/explorerecipes"} 
                    content="Not sure exactly what it is you're looking for? Search existing recipes to find the perfect one for your appetite." />
            <Card title="Use up your Leftovers" src={bread} alt="picture of bread" to={"/leftovers"}
                    content="Finished baking and have some leftovers? Why not see what else you can make without having to spend another penny!" />
            <Card title="Build Custom Recipes" src={pastry} alt="picture of pastry" to={"/customrecipes"}
                    content="Looking to create the next best thing since sliced bread? Why not try to build your own custom recipes!" />
        </div>
    );
}

export default MainContent;