import { useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.js';
import { useCartContext } from './context/CartContext.js';

const ItemDetail = (p) => {
  const product = p.p;
  const [q, setQ] = useState(0);
  const [purchased, setPurchased] = useState(false);
  const {cartContent, addToCart, isInCart} = useCartContext();

  const agregarAlCarrito = (total) => {
    setQ(total);
    const inCart = isInCart(product.id);
    if (!inCart) {
      setPurchased(true);
      addToCart({product, quantity: total});
      alert(`You added ${total} ${product.name} to your cart`);
    } else {
      alert(`You already have ${product.name} in your cart`);
    }
  }

  return(
    <>
      <Card key={product.id} className="text-center col-lg-8 mt-5" border="success">
        <div className="productCardImg">
          <Card.Img variant="top" src={product.image}/>
        </div>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Card.Text>${product.price.toFixed(2)}</Card.Text>
          <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito} purchased={purchased}/>
        </Card.Body>
        <Card.Footer className="text-muted">Uploaded 2 days ago</Card.Footer>
      </Card>
      <Container style={{ marginTop: '5px' }}>
        <Link to="/"><Button variant="primary">Home</Button></Link>
      </Container>
    </>
  );
}

export default ItemDetail;
