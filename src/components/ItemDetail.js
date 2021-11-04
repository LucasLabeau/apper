import { Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ItemDetail = (p) => {
  const product = p.p;

  const agregarAlCarrito = (total) => {
    alert(`You added ${product.name} to your cart`);
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
          <Card.Text>${product.price}</Card.Text>
          <Button variant="success" onClick={agregarAlCarrito}>Buy</Button>
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
