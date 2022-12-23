import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container>
      <LinkContainer to="/"><Navbar.Brand>Get Baking!</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/explorerecipes"><Nav.Link>Explore Recipes</Nav.Link></LinkContainer>
            <LinkContainer to="/leftovers"><Nav.Link>Use up your Leftovers</Nav.Link></LinkContainer>
            <LinkContainer to="/customrecipes"><Nav.Link>Build Custom Recipes</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;