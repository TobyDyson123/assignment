import { Link } from "react-router-dom";

function RecipeGridCards(props) {
    return (
        <div className='recipe-card-container'>
            <img src={props.img} alt={props.name} />
            <p>{props.name}</p>
            <Link to={props.link}>
                <button>Get Baking</button>
            </Link>
        </div>
    );
}

export default RecipeGridCards;