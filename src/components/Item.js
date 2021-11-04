import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Item = (item) => {
  const agregarAlCarrito = (total) => {
    alert(`You added ${item.name} to your cart`);
  }

  return (
    <Card key={item.id} className="productCard text-center col-lg-3" border="secondary">
      <div className="productCardImg">
        <Card.Img variant="top" src={item.image}/>
      </div>
      <Card.Body className="productListCardBody">
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>${item.price}</Card.Text>
        <Link to={`/product/${item.id}`}><Button variant="outline-primary">See more</Button></Link>
        <Button variant="success" size="sm" className="col-4" onClick={agregarAlCarrito}>Buy</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Uploaded 2 days ago</Card.Footer>
    </Card>
  );
}

export default Item;
