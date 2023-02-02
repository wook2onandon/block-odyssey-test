import React from 'react';
import Pagination from '../Pagination/Pagination';
import ProductList from '../ProductList/ProductList';
import styles from './ProductContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeQueryParams } from '../../redux/modules/queryParams';
import { getParameter } from '../../utils/parameter';

export default function ProductContainer() {
  let limitNum = getParameter('limit');
  let pageNum = getParameter('page');

  const product = useSelector((state) => state.product.value.productList);
  const queryParams = useSelector((state) => state.queryParams.value);

  const offset = (queryParams.page - 1) * queryParams.limit;

  const dispatch = useDispatch();

  return (
    <article className={styles.container}>
      <ul className={styles.titleWrap}>
        <li className={styles.titleList}>
          <div className={styles.titleListItem}>상품번호</div>
          <div className={styles.titleListItem}>상품명</div>
          <div className={styles.titleListItem}>브랜드</div>
        </li>
        <li className={styles.titleList}>
          <div>상품내용</div>
        </li>
        <li className={styles.titleList}>
          <div className={styles.titleListItem}>가격</div>
          <div className={styles.titleListItem}>평점</div>
          <div className={styles.titleListItem}>재고</div>
        </li>
      </ul>
      {product.slice(offset, offset + queryParams.limit).map((product) => (
        <ProductList product={product} key={product.id} />
      ))}
      <div className={styles.indexContainer}>
        <label className={styles.indexLable}>
          페이지당 행: &nbsp;
          <select
            type="number"
            value={limitNum ? limitNum : '10'}
            onChange={({ target: { value } }) => {
              dispatch(
                changeQueryParams({
                  ...queryParams,
                  limit: Number(value),
                  page: 1,
                }),
              );
              // if(product.length / queryParams.limit < pageNum) {}
              window.history.pushState(
                '',
                'main',
                `/search?category=${queryParams.category}&searchWord=${
                  queryParams.searchWord
                }&limit=${Number(value)}&page=${1}`,
              );
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </label>
        <Pagination
          className={styles.pagination}
          currentPage={pageNum ? Number(pageNum) : 1}
          totalCount={product.length}
          pageSize={queryParams.limit}
          onPageChange={(page) => {
            dispatch(
              changeQueryParams({
                ...queryParams,
                page: page,
              }),
            );
            window.history.pushState(
              '',
              'main',
              `/search?category=${queryParams.category}&searchWord=${queryParams.searchWord}&limit=${queryParams.limit}&page=${page}`,
            );
          }}
        />
      </div>
    </article>
  );
}
