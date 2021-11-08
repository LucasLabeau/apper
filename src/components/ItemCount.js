import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const CartAdder = ({cont, onAdd, stock}) => {
  return(
    <Button variant="primary" onClick={ () => onAdd(cont) } disabled={ stock <= 0 } style={{marginTop: '7px'}}>Add to cart</Button>
  );
}

const CartBuyer = () => {
  return(
    <Link to={"/cart"}><Button variant="success" style={{marginTop: '7px'}}>Go to cart</Button></Link>
  );
}

const ItemCount = ({initial, stock, onAdd}) => {
  const [cont, setCont] = useState(initial);
  const [purchased, setPurchased] = useState(false);

  const masClick = () => {
    if (cont < stock) {
        setCont(cont+1);
    }
  }

  const menosClick = () => {
    if (cont > 1) {
      setCont(cont-1);
    }
  }

  const buttonChanger = () => {
    setPurchased(true);
  }

  const onChange = () => {
    console.log("Changing counter to " + cont)
  }

  return (
    <>
      <InputGroup>
        <Button variant="outline-primary" onClick={ menosClick } disabled={ cont === 1 || stock <= 0 }>-</Button>
        <FormControl className="text-center" value={ stock > 0 ? cont : 0 } onChange={ () => onChange()}/>
        <Button variant="outline-primary" onClick={ masClick } disabled={ cont === stock || stock <= 0 }>+</Button>
      </InputGroup>
      <div className="text-center m-2" onClick={ buttonChanger }>
        { !purchased ? <CartAdder cont={cont} stock={stock} onAdd={onAdd} /> : <CartBuyer /> }
      </div>
    </>
  );
}

export default ItemCount;
