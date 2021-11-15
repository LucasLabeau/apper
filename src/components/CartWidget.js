import { useEffect, useState } from 'react';
import { useCartContext } from './context/CartContext.js';
import { FaShoppingCart } from 'react-icons/fa';
import { Nav, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CartWidget = () => {
  const { cartContent } = useCartContext();
  const [totalItems, setTotalItems] = useState(0);
  const [style, setStyle] = useState({ display: "block" });

  useEffect(() => {
    const reducer = cartContent.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(reducer);
    setStyle({ display: "block" });
    if (reducer === 0) {
      setStyle({ display: "none" });
    }
  }, [cartContent])

  return(
    <Nav className="ms-auto" style={ style } >
      <LinkContainer to='/cart'><Nav.Link href="/"><FaShoppingCart /><Badge pill bg="primary">{ totalItems }</Badge></Nav.Link></LinkContainer>
    </Nav>
  )
}

export default CartWidget;
