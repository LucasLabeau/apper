import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.js';

const ItemDetailContainer = (p) => {
  const itemId = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const getItem = async() => {
    const jsonData = await fetch('https://618214a284c2020017d89c79.mockapi.io/api/products');
    const data = await jsonData.json();
    const item = await data.filter(item => item.id === parseInt(itemId.productId));

      setProduct(item[0]);

      setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      getItem();
    },2000);
    // eslint-disable-next-line
  }, [itemId]);

  return(
    <>
    { loading ? <h1>Loading...</h1> :
      <ItemDetail p={ product } />
    }
    </>
  );
}
export default ItemDetailContainer;
