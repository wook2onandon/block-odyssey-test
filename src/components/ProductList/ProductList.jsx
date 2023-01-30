import React from 'react';
import styles from './ProductList.module.css';

export default function ProductList({ product }) {
  const { id, title, brand, description, price, rating, stock } = product;
  return (
    <ul className={styles.titleWrap}>
      <li className={styles.titleList}>
        <div className={styles.titleListItem}>{id}</div>
        <div className={styles.titleListItem}>{title}</div>
        <div className={styles.titleListItem}>{brand}</div>
      </li>
      <li className={styles.titleList}>
        <div>
          {description.length > 40
            ? `${description.substring(0, 40)}...`
            : description}
        </div>
      </li>
      <li className={styles.titleList}>
        <div className={styles.titleListItem}>{price}</div>
        <div className={styles.titleListItem}>{rating}</div>
        <div className={styles.titleListItem}>{stock}</div>
      </li>
    </ul>
  );
}
