import { useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from './context/CartContext.js';
import ItemCount from './ItemCount.js';

const ItemDetail = (p) => {
  // VARIABLES (Y CONTEXT)
  const product = p.p;
  const [purchased, setPurchased] = useState(false);
  const { addToCart, isInCart} = useCartContext();

  // FUNCIÓN QUE CHEQUEA SI YA ESTÁ EL PRODUCTO EN EL CARRITO
  const agregarAlCarrito = (total) => {
    const inCart = isInCart(product.id);
    if (!inCart) {
      addToCart({product, quantity: total});
      setPurchased(true);
    } else {
      alert(`¡Ya tenés ${product.name} en tu carrito!`);
    }
  }

  // RENDER DE LA CARD CON DETALLE DEL ÍTEM
  return(
    <>
      <Card key={product.id} className="text-center col-lg-8 mt-5" border="light" style={{ backgroundColor: "inherit" }}>
        <div className="productCardImg">
          <Card.Img className="productImg" variant="top" src={product.image}/>
        </div>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Card.Text>${product.price.toFixed(2)}</Card.Text>
          <ItemCount initial={1} stock={product.stock} onAdd={agregarAlCarrito} purchased={purchased}/>
        </Card.Body>
      </Card>
      <Container style={{ marginTop: '5px' }}>
        <Link to="/"><Button variant="info">Inicio</Button></Link>
      </Container>
    </>
  );
}

export default ItemDetail;
