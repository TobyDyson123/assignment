import { LinkContainer } from 'react-router-bootstrap';

const Card = (props) => {
    const { title, content, src, alt, to } = props;

    return (
        <div className="cards-container">
            <img src={src} alt={alt}></img>
            <div className="cards-info">
                <h1>{title}</h1>
                <p>
                    {content}
                </p>
                <LinkContainer to={to}>
                    <button className='cards-button'>Take me there!</button>
                </LinkContainer>
            </div>
        </div>
    );
}

export default Card;