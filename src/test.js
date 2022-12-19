import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container>
      <LinkContainer><Navbar.Brand href="https://tobydyson123.github.io/interactive-web/#/">Get Baking!</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer><Nav.Link href="https://tobydyson123.github.io/interactive-web/#/explorerecipes">Explore Recipes</Nav.Link></LinkContainer>
            <LinkContainer><Nav.Link href="https://tobydyson123.github.io/interactive-web/#/leftovers">Use up your Leftovers</Nav.Link></LinkContainer>
            <LinkContainer><Nav.Link href="https://tobydyson123.github.io/interactive-web/#/customrecipes">Build Custom Recipes</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;