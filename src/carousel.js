import Carousel from 'react-bootstrap/Carousel';
import cake from './images/cake.jpg';
import bread from './images/bread.jpg';
import Axios from "axios";
import { useEffect, useState } from 'react';
import data from './recipes.json';

function RecentRecipesCarousel() {
  const [recipes, getRecipes] = useState('');

  const url = "https://get-baking.free.beeceptor.com/recipes";

  useEffect(() => {
    getFirstItem();
  }, []);

  const getFirstItem = () => {
    Axios.get(url)
    .then((response) => {
      const allRecipes = response.data;
      getRecipes(allRecipes);
    })
    .catch(error => console.error(`Error: ${error}`));
    console.log(recipes)
  }

  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data[0].images[0]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{data[0].name}</h3>
          <p>{data[0].description}</p>
          <button>Show me more!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data[1].images[0]}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{data[1].name}</h3>
          <p>{data[1].description}</p>
          <button>Show me more!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data[2].images[0]}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{data[2].name}</h3>
          <p>
            {data[2].description}
          </p>
          <button>Show me more!</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function PopularDemandCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bread}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button>Show me more!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cake}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Show me more!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bread}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button>Show me more!</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function SeasonalRecipesCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data[2].images[0]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{data[2].name}</h3>
          <p>{data[2].description}</p>
          <button>Show me more!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data[0].images[0]}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{data[0].name}</h3>
          <p>{data[0].description}</p>
          <button>Show me more!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data[3].images[0]}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{data[3].name}</h3>
          <p>
            {data[3].description}
          </p>
          <button>Show me more!</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export { RecentRecipesCarousel, PopularDemandCarousel, SeasonalRecipesCarousel }