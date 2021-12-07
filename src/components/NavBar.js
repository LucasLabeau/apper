import { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getFirestore } from './getFirestore';
import CartWidget from './CartWidget.js';


const NavBar = () => {
  // VARIABLES
  const [categories, setCategories] = useState([]);

  // EFECTO EJECUTADO UNA VEZ PARA CONSEGUIR LAS CATEGORÍAS
  useEffect(() => {
    const db = getFirestore();
    const dbSearch = db.collection('categories').get();
    dbSearch
      .then(resp => setCategories(resp.docs.map(p => ({ id: p.id, ...p.data() }))))
      .catch(err => console.log(err));
  }, []);

  //RENDER
  return(
    <Navbar variant="dark" bg="custom" expand="lg" sticky="top" style={{ backgroundColor: "#342628", color: "#CBD9D7" }}>
      <Container fluid>
        <LinkContainer to="/"><Navbar.Brand className="logoFont">Burgos</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="mi-navbar" />
        <Navbar.Collapse id="mi-navbar">
          <Nav>
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Categorías"
              menuVariant="dark"
            >
              { categories.map((c) => (
                <LinkContainer key={c.id} to={`/category/${c.id}`}><NavDropdown.Item>{c.name}</NavDropdown.Item></LinkContainer>
              )) }
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
