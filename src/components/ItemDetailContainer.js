import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail.js';

const ItemDetailContainer = (p) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const getItem = async() => {
    const jsonData = await fetch('placeholderData.json');
    const data1 = await jsonData.json();
    const data = await data1.data;
    const item = await data.filter(item => item.id === p.itemId);
    setProduct(item[0]);
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      getItem();
    },2000);
  }, []);

  return(
    <>
    { loading ? <h1>Loading...</h1> :
      <ItemDetail product={ product } />
    }
    </>
  );
}
export default ItemDetailContainer;
