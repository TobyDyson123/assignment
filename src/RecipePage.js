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
            //other recipe details here
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