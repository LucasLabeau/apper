import { Button, FormControl, InputGroup } from 'react-bootstrap';

const CartAdder = ({cont, onAdd, stock, setCont}) => {
  // FUNCIONES
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

  const onChange = () => {
    console.log("Changing counter to " + cont)
  }

  //RENDER
  return(
    <>
      <InputGroup>
        <Button variant="outline-info" onClick={ menosClick } disabled={ cont === 1 || stock <= 0 }>-</Button>
        <FormControl className="text-center" value={ stock > 0 ? cont : 0 } onChange={ () => onChange()}/>
        <Button variant="outline-info" onClick={ masClick } disabled={ cont === stock || stock <= 0 }>+</Button>
      </InputGroup>
      <Button variant="outline-info" onClick={ () => onAdd(cont) } disabled={ stock <= 0 } style={{marginTop: '7px'}}>Add to cart</Button>
    </>
  );
}

export default CartAdder;
