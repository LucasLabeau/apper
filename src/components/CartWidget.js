import { FaShoppingCart } from 'react-icons/fa';
import { Nav } from 'react-bootstrap';

const CartWidget = () => {
  return(
    <Nav className="ms-auto">
      <Nav.Link href="/"><FaShoppingCart /></Nav.Link>
    </Nav>
  );
}

export default CartWidget;
