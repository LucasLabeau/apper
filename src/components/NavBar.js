import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget.js';


const NavBar = () => {
  return(
    <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">ApperMarket</Navbar.Brand>
        <Navbar.Toggle aria-controls="mi-navbar" />
        <Navbar.Collapse id="mi-navbar">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Categories"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Arcade</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Adventure</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Strategy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Most Wanted</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Free To Play</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
