import { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from './recipes.json';
import './RecipePage.css';
import RecipeAccordion from "./RecipeAccordion";

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
        }
    }

    window.scrollTo({top: 0, behavior: "auto"});

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
        </div>
    )
}

export default RecipePage;