import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.js';
import { Container } from "react-bootstrap";
import { getFirestore } from './getFirestore';

const ItemListContainer = (p) => {
  // VARIABLES
  const [products, setProducts] = useState([]);
  const [chosenCategory, setChosenCategory] = useState({});
  const [filter, setFilter] = useState([]);

  const groupId = useParams();

  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("Burgos");


  // EFECTO EJECUTADO UNA VEZ PARA CONSEGUIR LOS PRODUCTOS
  useEffect(() => {
    const db = getFirestore();
    const dbSearch = db.collection('items').get();
    dbSearch
      .then(resp => setProducts(resp.docs.map(p => ({ id: p.id, ...p.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, []);

  // EFECTO EJECUTADO CADA VEZ QUE SE ACTUALICE EL PARAMS, LOS PRODUCTOS, Y LA CATEGORÍA ELEGIDA.
  useEffect(() => {
    setLoading(true);
    if (groupId.categoryId !== undefined) {
      // SI HAY CATEGORÍA
      const db = getFirestore();
      const dbSearchCat = db.collection('categories').doc(groupId.categoryId).get();
      dbSearchCat
        .then(resp => setChosenCategory({ id: resp.id, ...resp.data() }))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

      setGreeting(chosenCategory.name)
      setFilter(products.filter(p => p.category === chosenCategory.name))
    } else {
      // SI NO HAY CATEGORÍA
      setGreeting("Burgos");
      setFilter(products);
    }
    setLoading(false);

  }, [groupId, products, chosenCategory.name]);

  // RENDER
  return(
    <>
      <h3 className="logoFont" style={{ color: "#f7f4ef" }}>{ greeting }</h3>
      <Container>
         <ItemList loading={ loading } products={ filter }/>
      </Container>
    </>
  );
}

export default ItemListContainer;
