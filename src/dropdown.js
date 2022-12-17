import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function RecipesDropdown(props) {
  return (
    <DropdownButton
      align="end"
      title="Filter"
      id="dropdown-menu-align-end"
    >
      <Dropdown.Item eventKey="1" onClick={props.func[0]}>Desert</Dropdown.Item>
      <Dropdown.Item eventKey="2" onClick={props.func[1]}>Christmas</Dropdown.Item>
      <Dropdown.Item eventKey="3" onClick={props.func[2]}>Bread</Dropdown.Item>
      <Dropdown.Item eventKey="4" onClick={props.func[3]}>Kid Friendly</Dropdown.Item>
      <Dropdown.Item eventKey="5" onClick={props.func[4]}>Cake</Dropdown.Item>
      <Dropdown.Item eventKey="6" onClick={props.func[5]}>Pie</Dropdown.Item>
      <Dropdown.Item eventKey="7" onClick={props.func[6]}>Traditional</Dropdown.Item>
      <Dropdown.Item eventKey="7" onClick={props.func[7]}>Side Dish</Dropdown.Item>
    </DropdownButton>
  );
}

export default RecipesDropdown;