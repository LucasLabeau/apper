import { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CartWidget from './CartWidget.js';


const NavBar = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async() => {
    const jsonData = await fetch('https://618214a284c2020017d89c79.mockapi.io/api/categories');
    const data = await jsonData.json();

    setCategories(data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return(
    <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
      <Container fluid>
        <LinkContainer to="/"><Navbar.Brand>ApperMarket</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="mi-navbar" />
        <Navbar.Collapse id="mi-navbar">
          <Nav>
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Categories"
              menuVariant="dark"
            >
              { categories.map((c) => (
                <LinkContainer key={c.id} to={`/category/${c.id}`}><NavDropdown.Item>{c.name}</NavDropdown.Item></LinkContainer>
              )) }
              <NavDropdown.Divider />
              <LinkContainer to="/freeToPlay"><NavDropdown.Item>Free To Play</NavDropdown.Item></LinkContainer>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
