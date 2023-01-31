import React, { useEffect } from 'react';
import ProductContainer from '../../components/ProductContainer/ProductContainer';
import Search from '../../components/Search/Search';
import styles from './Main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetching } from '../../redux/product';
import { fetchProduct } from '../../api/fetch';

export default function Main() {
  const product = useSelector((state) => state.product.value.productList);
  const dispatch = useDispatch();

  const fetchProductData = async () => {
    const result = await fetchProduct();
    dispatch(fetching({ productList: result }));
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className={styles.bg}>
      <Search />
      <span className={styles.count}>검색된 데이터: {product.length}건</span>
      <ProductContainer />
    </div>
  );
}
