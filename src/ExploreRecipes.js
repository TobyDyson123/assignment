import CollapsibleExample from "./test.js";
import Footer from './footer.js';
import RecipesDropdown from "./dropdown.js";
import './explorerecipes.css';
import RecipeGridCards from './RecipeGridCards.js';
import data from './recipes.json';

function ExploreRecipes() {
    const mincePies = document.getElementById("mince-pies");
    const burgerBuns = document.getElementById("burger-buns");
    const babka = document.getElementById("babka");
    const syrup = document.getElementById("syrup");
    const banoffeePie = document.getElementById("banoffee-pie");
    const yumyum = document.getElementById("yumyum");
    const scones = document.getElementById("scones");

    const resetFilter = () => {
        mincePies.style.display = "block";
        burgerBuns.style.display = "block";
        babka.style.display = "block";
        syrup.style.display = "block";
        banoffeePie.style.display = "block";
        yumyum.style.display = "block";
        scones.style.display = "block";
    }

    const desertRecipes = () => {
        resetFilter();
        mincePies.style.display = "none";
        burgerBuns.style.display = "none";
        babka.style.display = "none";
        syrup.style.display = "none";
    }

    const christmasRecipes = () => {
        resetFilter();
        burgerBuns.style.display = "none";
        syrup.style.display = "none";
        banoffeePie.style.display = "none";
        yumyum.style.display = "none";
        scones.style.display = "none";
    }

    const breadRecipes = () => {
        resetFilter();
        mincePies.style.display = "none";
        syrup.style.display = "none";
        banoffeePie.style.display = "none";
        yumyum.style.display = "none";
        scones.style.display = "none";
    }

    const kidFriendlyRecipes = () => {
        resetFilter();
        burgerBuns.style.display = "none";
        babka.style.display = "none";
        syrup.style.display = "none";
        banoffeePie.style.display = "none";
        scones.style.display = "none";
    }

    const cakeRecipes = () => {
        resetFilter();
        mincePies.style.display = "none";
        burgerBuns.style.display = "none";
        babka.style.display = "none";
        syrup.style.display = "none";
        banoffeePie.style.display = "none";
        yumyum.style.display = "none";
    }

    const pieRecipes = () => {
        resetFilter();
        mincePies.style.display = "none";
        burgerBuns.style.display = "none";
        babka.style.display = "none";
        syrup.style.display = "none";
        yumyum.style.display = "none";
        scones.style.display = "none";
    }

    const traditionalRecipes = () => {
        resetFilter();
        mincePies.style.display = "none";
        burgerBuns.style.display = "none";
        syrup.style.display = "none";
        banoffeePie.style.display = "none";
        yumyum.style.display = "none";
        scones.style.display = "none";
    }

    const sideDishRecipes = () => {
        resetFilter();
        mincePies.style.display = "none";
        burgerBuns.style.display = "none";
        babka.style.display = "none";
        banoffeePie.style.display = "none";
        yumyum.style.display = "none";
        scones.style.display = "none";
    }



    return (
        <div className="explore-recipes">
            <CollapsibleExample />
            <h1>Explore Recipes</h1>
            <div className="explore-recipes-content-container">
                <div className="dropdown-container">
                    <RecipesDropdown func={[desertRecipes, christmasRecipes, breadRecipes, kidFriendlyRecipes, cakeRecipes, pieRecipes, traditionalRecipes, sideDishRecipes]}/>
                    <button id="reset-button" onClick={resetFilter}>Reset Filter</button>
                </div>
                <div className="recipes-container">
                    <div id="mince-pies"><RecipeGridCards img={data[0].images[0]} name={data[0].name} /></div>
                    <div id="burger-buns"><RecipeGridCards img={data[1].images[0]} name={data[1].name} /></div>
                    <div id="babka"><RecipeGridCards img={data[2].images[0]} name={data[2].name} /></div>
                    <div id="syrup"><RecipeGridCards img={data[3].images[0]} name={data[3].name} /></div>
                    <div id="banoffee-pie"><RecipeGridCards img={data[4].images[0]} name={data[4].name} /></div>
                    <div id="yumyum"><RecipeGridCards img={data[5].images[0]} name={data[5].name} /></div>
                    <div id="scones"><RecipeGridCards img={data[6].images[0]} name={data[6].name} /></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ExploreRecipes;