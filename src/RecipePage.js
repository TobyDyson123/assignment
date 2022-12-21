import { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from './recipes.json';
import './RecipePage.css';
import RecipeAccordion from "./RecipeAccordion";
import { Link } from 'react-router-dom';

function RecipePage() {
    let { postSlug } = useParams();

    useEffect(() => {

    }, [postSlug]);

    var recipe = data;

    for (var i = 0; i < recipe.length; i++) {
        var r = recipe[i];
        if (r.uuid === postSlug) {
            var Name = r.name;
            var Author = r.author;
            var Difficulty = r.difficulty;
            var Image = r.images[0];
            var Ingredients = r.ingredients;
            var Nutrition = r.nutrition;
            var Directions = r.instructions;
            var Categories = r.categories;
        }
    }

    window.scrollTo({top: 0, behavior: "auto"});

    function displayRelatedRecipes(categoryList, allRecipes) {
        const relatedList = [];
        for (var i = 0; i < allRecipes.length; i++) {
            var r = allRecipes[i];
            if (categoryList.some(item => r.categories.includes(item)) && !(r.uuid === postSlug)) {
                relatedList.push(r);
            }
        }
        
        const listItems = relatedList.map((item) =>
        <li key={item.id}>
            <Link to={`/explorerecipes/${item.uuid}`}>{item.name}</Link> 
        </li>
        );

        return (
        <ul>{listItems}</ul>
        );
    }

    return (
        <div className="recipepage-container">
            <div className="recipepage-info-container">
                <img className="recipepage-image" src={Image} alt={Name} />
                <div className="recipepage-info">
                    <h1>{Name}</h1>
                    <p><b>Author:</b> {Author}</p>
                    <p><b>Difficulty:</b> {Difficulty}</p>
                </div>
            </div>
            <div className="recipepage-accordion-container">
                <RecipeAccordion ingredients={Ingredients} nutrition={Nutrition} directions={Directions} />
            </div>
            <h3>Related Recipes</h3>
            <div className="related-recipes-container">
                {displayRelatedRecipes(Categories, recipe)}
            </div>
        </div>
    )
}

export default RecipePage;