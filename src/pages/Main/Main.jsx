import React, { useEffect } from 'react';
import ProductContainer from '../../components/ProductContainer/ProductContainer';
import Search from '../../components/Search/Search';
import styles from './Main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetching } from '../../redux/modules/product';
import { fetchProduct } from '../../api/fetch';
import { getParameter } from '../../utils/parameter';
import { changeQueryParams } from '../../redux/modules/queryParams';
import { searchFilter } from '../../utils/filter';

export default function Main() {
  let category = getParameter('category');
  let searchWord = getParameter('searchWord');
  let limitNum = getParameter('limit');
  let pageNum = getParameter('page');

  const product = useSelector((state) => state.product.value.productList);
  const queryParams = useSelector((state) => state.queryParams.value);
  const dispatch = useDispatch();

  const fetchProductData = async () => {
    const result = await fetchProduct();
    dispatch(
      fetching(
        searchFilter(
          result,
          searchWord ? searchWord : queryParams.searchWord,
          category ? category : queryParams.category,
        ),
      ),
    );
  };

  useEffect(() => {
    fetchProductData();
    dispatch(
      changeQueryParams({
        category: category ? category : 'all',
        searchWord: searchWord ? searchWord : '',
        limit: limitNum ? limitNum : 10,
        page: pageNum ? pageNum : 1,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.bg}>
      <Search />
      <span className={styles.count}>검색된 데이터: {product.length}건</span>
      <ProductContainer />
    </div>
  );
}
