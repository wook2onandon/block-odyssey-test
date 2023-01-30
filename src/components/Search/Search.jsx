import React from 'react';
import styles from './Search.module.css';

const OPTIONS = [
  { value: 'all', name: '전체' },
  { value: 'name', name: '상품명' },
  { value: 'brand', name: '브랜드' },
  { value: 'detail', name: '상품내용' },
];

export default function Search() {
  return (
    <header className={styles.container}>
      <h3 className={styles.title}>상품검색</h3>
      <div className={styles.wrap}>
        <h3 className={styles.title}>검색</h3>
        <div className={styles.searchItemWrap}>
          <select className={styles.selectBox}>
            {OPTIONS.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className={styles.searchOption}
              >
                {option.name}
              </option>
            ))}
          </select>
          <input type="text" className={styles.searchInput} />
          <button className={styles.searchBtn}>조회</button>
        </div>
      </div>
    </header>
  );
}
