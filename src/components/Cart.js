import { useEffect } from 'react';
import { useCartContext } from './context/CartContext.js';
import { Link } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';

const Cart = () => {
  const { cartContent, cartTotal, removeItem, removeAll, addPrice } = useCartContext();

  useEffect(() => {
    addPrice();
  })

  return(
    <Container>
      <Table bordered size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
        { cartContent.length === 0 ? <tr><th colSpan="5">Su carrito está vacío</th></tr> :
          cartContent.map((p, index) => (
            <tr key={ p.product.id }>
              <td>{ index + 1 }</td>
              <td>{ p.product.name }</td>
              <td>${ p.product.price.toFixed(2)}</td>
              <td>{ p.quantity }</td>
              <td><Button variant="outline-warning" onClick={ () => removeItem(p.product.id) }>Borrar</Button></td>
            </tr>
          ))
        }
          <tr>
            <th>Total</th>
            <th colSpan="4">${ cartTotal }</th>
          </tr>
        </tbody>
      </Table>
      <div className="text-center">
        <Button variant="warning" onClick={ () => removeAll() }>Borrar Todo</Button>
      </div>
      <Container style={{ marginTop: '25px' }}>
        <Link to="/"><Button variant="info">Inicio</Button></Link>
      </Container>
    </Container>
  );
}

export default Cart;
