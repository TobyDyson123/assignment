import Carousel from 'react-bootstrap/Carousel';
import Axios from "axios";
import { useEffect, useState } from 'react';
import data from './recipes.json';

function RecentRecipesCarousel() {
  const [recipes, getRecipes] = useState('');

  const url = "https://get-baking.free.beeceptor.com/recipes";

  // useEffect(() => {
  //   getFirstItem();
  // }, []);

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
          src={data[4].images[0]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{data[4].name}</h3>
          <p>{data[4].description}</p>
          <button>Show me more!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data[5].images[0]}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{data[5].name}</h3>
          <p>{data[5].description}</p>
          <button>Show me more!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data[6].images[0]}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{data[6].name}</h3>
          <p>
            {data[6].description}
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