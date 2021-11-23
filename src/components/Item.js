import { Link } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap';

const Item = (item) => {
  return (
    <Card className="productCard text-center col-lg-3" border="custom" style={{ backgroundColor: "inherit", borderColor: "#CBD9D7" }}>
      <Container fluid className="d-flex justify-content-center" style={{ height: "250px" }}>
        <div className="productCardImg">
          <Card.Img className="productImg" variant="top" src={item.image}/>
        </div>
      </Container>
      <Card.Body className="productListCardBody">
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>${item.price.toFixed(2)}</Card.Text>
        <Link className="p-2" to={`/product/${item.id}`}><Button variant="outline-info">Ver</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
