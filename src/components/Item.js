import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Item = (item) => {
  return (
    <Card className="productCard text-center col-lg-3" border="secondary">
      <div className="productCardImg">
        <Card.Img variant="top" src={item.image}/>
      </div>
      <Card.Body className="productListCardBody">
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>${item.price.toFixed(2)}</Card.Text>
        <Link className="p-2" to={`/product/${item.id}`}><Button variant="outline-primary">See more</Button></Link>
      </Card.Body>
      <Card.Footer className="text-muted">Uploaded 2 days ago</Card.Footer>
    </Card>
  );
}

export default Item;
