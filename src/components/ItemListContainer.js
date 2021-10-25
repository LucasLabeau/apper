import ItemCard from './ItemCard.js';
import { Container } from "react-bootstrap";

const ItemListContainer = (p) => {
  return(
    <>
      <h5>{ p.greeting }</h5>
      <Container>
        <ItemCard />
      </Container>
    </>
  );
}

export default ItemListContainer;
