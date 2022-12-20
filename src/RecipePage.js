import Footer from "./footer";
import CollapsibleExample from "./test";
import { useEffect, useParams } from "react";
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
            <h1>{Name}</h1>
        </div>
    )
}

export default RecipePage;