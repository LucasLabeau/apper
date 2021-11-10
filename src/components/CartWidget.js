import { FaShoppingCart } from 'react-icons/fa';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CartWidget = () => {
  return(
    <Nav className="ms-auto">
      <LinkContainer to='/cart'><Nav.Link href="/"><FaShoppingCart /></Nav.Link></LinkContainer>
    </Nav>
  );
}

export default CartWidget;
