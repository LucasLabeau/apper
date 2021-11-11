import { useEffect } from 'react';
import { useCartContext } from './context/CartContext.js';
import { Table, Button, Container } from 'react-bootstrap';

const Cart = () => {
  const { cartContent, cartTotal, removeItem, removeAll, addPrice } = useCartContext();

  useEffect(() => {
    addPrice();
  })

  return(
    <Container>
      <Table striped bordered hover size="sm">
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
        {
          cartContent.map((p, index) => (
            <tr key={ p.product.id }>
              <td>{ index + 1 }</td>
              <td>{ p.product.name }</td>
              <td>${ p.product.price.toFixed(2)}</td>
              <td>{ p.quantity }</td>
              <td><Button variant="outline-danger" onClick={ () => removeItem(p.product.id) }>Delete</Button></td>
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
        <Button variant="danger" onClick={ () => removeAll() }>Delete All</Button>
      </div>
    </Container>
  );
}

export default Cart;
