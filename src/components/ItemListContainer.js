import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.js';
import { Container } from "react-bootstrap";
import { getFirestore } from './getFirestore';

const ItemListContainer = (p) => {
  const [products, setProducts] = useState([]);
  const [chosenCategory, setChosenCategory] = useState({});
  const [filter, setFilter] = useState([]);

  const groupId = useParams();

  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("Burgos");



  useEffect(() => {
    const db = getFirestore();
    const dbSearch = db.collection('items').get();
    dbSearch
      .then(resp => setProducts(resp.docs.map(p => ({ id: p.id, ...p.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

    // fetch('https://618214a284c2020017d89c79.mockapi.io/api/products', {mode: 'cors'})
    //   .then(resp => {return resp.json()})
    //   .then(data => {setProducts(data)})
    //   .then(setLoading(false))
  }, []);

  useEffect(() => {
    setLoading(true);
    if (groupId.categoryId !== undefined) {
      const db = getFirestore();
      const dbSearchCat = db.collection('categories').doc(groupId.categoryId).get();
      dbSearchCat
        .then(resp => setChosenCategory({ id: resp.id, ...resp.data() }))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
      setGreeting(chosenCategory.name)
      setFilter(products.filter(p => p.category === chosenCategory.name))
    } else {
      setGreeting("Burgos");
      setFilter(products);
    }
    setLoading(false);

  }, [groupId, products, chosenCategory.name]);

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
