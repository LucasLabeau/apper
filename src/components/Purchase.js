import $ from 'jquery';
import { Button, Form } from 'react-bootstrap';
import { getFirestore } from './getFirestore';
import  firebase from 'firebase/app';

const Purchase = (cartContent, removeAll, cartTotal) => {
  let products = cartContent.cartContent;

  // FUNCIÓN MOSTRAR FORMULARIO DE COMPRA
  const showForm = (e) => {
    e.preventDefault();

    $("#buyerForm").slideDown();
    $("#buyerBtn").fadeOut();
  }

  // FUNCIÓN OCULTAR FORMULARIO DE COMPRA
  const hideForm = (e) => {
    e.preventDefault();

    $("#buyerForm").slideToggle();
    $("#buyerBtn").fadeIn();
  }

  // FUNCIONES PARA TERMINAR LA COMPRA Y MOSTRAR ID DE LA ORDEN
  const finalMsg = (id) => {
    $(".cartBtns").remove();
    $(".cartTable").remove();
    $(".cartContainer").prepend(`
      <h3>¡Su compra ha finalizado con éxito!</h3>
      <h5>El ID de su orden: ${id}</h5>
    `);
  }

  const endPurchase = (e) => {
    e.preventDefault();

    let userData = {};

    let orderId;

    // CONSTRUCCIÓN DEL OBJETO userData
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
    userData.date = firebase.firestore.Timestamp.fromDate(new Date());

    // SUBIDA A LA BASE DE DATOS
    const dbQuery = getFirestore();
    dbQuery.collection('orders').add(userData)
      .then(resp => orderId = resp.id)
      .then(() => finalMsg(orderId))
      .catch(err => console.log(err))
      .finally(() => cartContent.removeAll())
  }

  // RENDER DEL FORM
  return(
    <>
      <Button id="buyerBtn" style={{ height: "38px" }} variant="success" onClick={ e => showForm(e) }>Comprar</Button>
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
        <div className="d-flex flex-column flex-md-row">
          <Button variant="warning" onClick={ e => hideForm(e) } style={{ marginRight: "10px" }}>Cancelar</Button>
          <Button variant="success" onClick={ e => endPurchase(e) } type="submit">Terminar mi compra</Button>
        </div>
      </Form>
    </>
  )
}

export default Purchase;
