import { useEffect, useState } from 'react';
import { useCartContext } from './context/CartContext.js';
import { FaShoppingCart } from 'react-icons/fa';
import { Nav, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CartWidget = () => {
  // VARIABLES GENRALES Y DEL CONTEXT
  const { cartContent } = useCartContext();
  const [totalItems, setTotalItems] = useState(0);
  const [style, setStyle] = useState({ display: "block" });

  // EFECTO QUE SE EJECUTA CADA VEZ QUE SE ACTUALIZA EL CARRITO
  useEffect(() => {
    const reducer = cartContent.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(reducer);
    setStyle({ display: "block" });
    if (reducer === 0) {
      // SI NO HAY PRODUCTOS NO SE MUESTRA
      setStyle({ display: "none" });
    }
  }, [cartContent])

  // RENDER
  return(
    <Nav className="ms-auto" style={ style } >
      <LinkContainer to='/cart'><Nav.Link href="/"><FaShoppingCart /><Badge pill bg="primary">{ totalItems }</Badge></Nav.Link></LinkContainer>
    </Nav>
  )
}

export default CartWidget;
