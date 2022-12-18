import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashRouter } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <HashRouter>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand href="/interactive-web">Get Baking!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/explorerecipes">Explore Recipes</Nav.Link>
            <Nav.Link href="/leftovers">Use up your Leftovers</Nav.Link>
            <Nav.Link href="/customrecipes">Build Custom Recipes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </HashRouter>
  );
}

export default CollapsibleExample;