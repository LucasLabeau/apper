import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount.js'

const ItemCard = () => {
  const agregarAlCarrito = (total) => {
    alert(`You added ${total} products to your cart`);
  }

  return (
    <Card className="text-center col-lg-4">
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text style={{fontSize: '.8rem'}}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Card.Text>
        <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito} />
      </Card.Body>
      <Card.Footer className="text-muted">Uploaded 2 days ago</Card.Footer>
    </Card>
  );
}

export default ItemCard;
