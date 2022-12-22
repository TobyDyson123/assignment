import Accordion from 'react-bootstrap/Accordion';

function RecipeAccordion(props) {
  const { ingredients, nutrition, directions } = props;

  function displayIngredients(ingredients) {
    const listItems = ingredients.map((item) =>
      <li key={item.id}>
        {item['measurement-size']}{item['measurement-weight']}{item['measurement-type']} {item.ingredient} {item.note}
      </li>
    );

    return (
      <ul>{listItems}</ul>
    );
  }

  function displayNutrition(nutrition) {
    const listItems = nutrition.map((item) =>
      <ul>
        <li key={item.id}>Serving: {item.serving}</li>
        <li key={item.id}>Kcal: {item.kcal}</li>
        <li key={item.id}>Fat: {item.fat}</li>
        <li key={item.id}>Saturates: {item.saturates}</li>
        <li key={item.id}>Carbs: {item.carbs}</li>
        <li key={item.id}>Sugars: {item.sugars}</li>
        <li key={item.id}>Fibre: {item.fibre}</li>
        <li key={item.id}>Protein: {item.protein}</li>
        <li key={item.id}>Salt: {item.salt}</li>
      </ul>
    );

    return (
      listItems
    );
  }
  
  function displayDirections(directions) {
    const steps = Array.from(directions[0]['steps']);
    const listItems = steps.map((item) =>
      <li>{item}</li>
    );

    return (
      <ul>{listItems}</ul>
    );
  }

  return (
    <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ingredients</Accordion.Header>
        <Accordion.Body>
          {displayIngredients(ingredients)}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Nutritional Information</Accordion.Header>
        <Accordion.Body>
          {displayNutrition(nutrition)}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Directions</Accordion.Header>
        <Accordion.Body>
          {displayDirections(directions)}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default RecipeAccordion;