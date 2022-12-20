import { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from './recipes.json';

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
            var Directions = r.Directions; 
        }
    }

    return (
        <div>
            <h1>Recipe Name:</h1>
            <h3>{Name}</h3>
        </div>
    )
}

export default RecipePage;