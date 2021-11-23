import { useEffect } from 'react';
import $ from 'jquery';
import { useCartContext } from './context/CartContext.js';
import { Link } from 'react-router-dom';
import { Table, Button, Container, Form } from 'react-bootstrap';

const Purchase = (cartContent, removeAll) => {
  const showForm = () => {
    $("#buyerForm").slideDown();
    $("#buyerBtn").fadeOut();
  }
  const endPurchase = (e) => {
    e.preventDefault();
    alert("Terminaste con tu compra");
  }
  return(
    <>
      <Button id="buyerBtn" style={{ height: "38px" }} variant="success" onClick={ () => showForm() }>Comprar</Button>
      <Form id="buyerForm" className="" style={{ display: "none" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control type="text" placeholder="Nombre Completo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" placeholder="Dirección" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" placeholder="Teléfono" />
        </Form.Group>
        <Button variant="success" onClick={ () => endPurchase() } /*type="submit"*/>Terminar mi compra</Button>
      </Form>
    </>
  )
}

const Cart = () => {
  const { cartContent, cartTotal, removeItem, removeAll, addPrice } = useCartContext();

  useEffect(() => {
    addPrice();
  })

  return(
    <Container className="cartContainer">
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
      <div className="d-flex justify-content-between">
        <Button style={{ height: "38px" }} variant="warning" onClick={ () => removeAll() }>Borrar Todo</Button>
        { cartContent.length === 0  ? <div/> :
            <Purchase cartContent={ cartContent } removeAll={ removeAll } />
        }
      </div>
      <Container style={{ marginTop: '25px', float: "left" }}>
        <Link to="/"><Button variant="info">Inicio</Button></Link>
      </Container>
    </Container>
  );
}

export default Cart;
