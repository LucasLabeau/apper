import $ from 'jquery';
import { Button, Form } from 'react-bootstrap';
import { getFirestore } from './getFirestore';

const Purchase = (cartContent, removeAll, cartTotal) => {
  let products = cartContent.cartContent;

  const resetForm = function() {
    $(".formName").val("");
    $(".formAddress").val("");
    $(".formPhone").val("");
  }

  const showForm = () => {
    $("#buyerForm").slideDown();
    $("#buyerBtn").fadeOut();
  }


  const endPurchase = (e) => {
    e.preventDefault();

    let userData = {};

    userData.buyer = {
      name: $(".formName").val(),
      address: $(".formAddress").val(),
      phone: $(".formPhone").val()
    };
    userData.items = products.map((p) => {
      let id = p.product.id;
      let name = p.product.name;
      let price = (p.product.price * p.quantity).toFixed(2);
      let quantity = p.quantity;
      return {id, name, price, quantity};
    });
    userData.totalPrice = cartContent.cartTotal;

    const dbQuery = getFirestore();
    dbQuery.collection('orders').add(userData)
      .catch(err => console.log(err))
      .finally(() => cartContent.removeAll())

    alert("Terminaste con tu compra");
    resetForm();
  }

  
  return(
    <>
      <Button id="buyerBtn" style={{ height: "38px" }} variant="success" onClick={ () => showForm() }>Comprar</Button>
      <Form id="buyerForm" className="" style={{ display: "none" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control type="text" placeholder="Nombre Completo" className="formName" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" placeholder="Dirección" className="formAddress"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" placeholder="Teléfono" className="formPhone"/>
        </Form.Group>
        <Button variant="success" onClick={ e => endPurchase(e) } type="submit">Terminar mi compra</Button>
      </Form>
    </>
  )
}

export default Purchase;
