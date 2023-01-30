import React, { useEffect, useState } from 'react';
import ProductContainer from '../../components/ProductContainer/ProductContainer';
import Search from '../../components/Search/Search';
import styles from './Main.module.css';

export default function Main() {
  const [productLists, setProductLists] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then((res) => res.json())
      .then((data) => setProductLists(data.products));
  }, []);
  return (
    <div className={styles.bg}>
      <Search />
      <span className={styles.count}>
        검색된 데이터: {productLists.length}건
      </span>
      <ProductContainer productLists={productLists} />
    </div>
  );
}
