import React, { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import ProductList from '../ProductList/ProductList';
import styles from './ProductContainer.module.css';

export default function ProductContainer({ productLists }) {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

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
      {productLists.slice(offset, offset + limit).map((product) => (
        <ProductList product={product} key={product.id} />
      ))}
      <div>
        <label>
          페이지당 행: &nbsp;
          <select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => {
              setLimit(Number(value));
              setPage(1);
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </label>
        <Pagination
          total={productLists.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </article>
  );
}
