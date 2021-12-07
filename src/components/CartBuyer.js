import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CartBuyer = () => {
  // RENDER
  return(
    <Link to={"/cart"}><Button variant="secondary" style={{marginTop: '7px'}}>Go to cart</Button></Link>
  );
}

export default CartBuyer;
