const Card = (props) => {
    const { title, content, src, alt } = props;

    return (
        <div className="cards-container">
            <img src={src} alt={alt}></img>
            <div className="cards-info">
                <h1>{title}</h1>
                <p>
                    {content}
                </p>
                <button className='cards-button'>Take me there!</button>
            </div>
        </div>
    );
}

export default Card;