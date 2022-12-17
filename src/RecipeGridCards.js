function RecipeGridCards(props) {
    return (
        <div className='recipe-card-container'>
            <img src={props.img} alt="mince pies" />
            <p>{props.name}</p>
            <button>Get Baking</button>
        </div>
    );
}

export default RecipeGridCards;