import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount.js';

const ItemDetail = (p) => {
  const agregarAlCarrito = (total) => {
    alert(`You added ${total} product/s to your cart`);
  }
  console.log(p);
  return(
    <Card key={p.product.id} className="text-center col-lg-8" border="success">
      <div className="productCardImg">
        <Card.Img variant="top" src={p.product.image}/>
      </div>
      <Card.Body>
        <Card.Title>{p.product.name}</Card.Title>
        <Card.Text>
          {p.product.description}
        </Card.Text>
        <Card.Text>${p.product.price}</Card.Text>
        <ItemCount initial={1} stock={p.product.stock} onAdd={agregarAlCarrito} />
      </Card.Body>
      <Card.Footer className="text-muted">Uploaded 2 days ago</Card.Footer>
    </Card>
  );
}

export default ItemDetail;
