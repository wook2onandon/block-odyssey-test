import React, { useState } from 'react';
import styles from './Search.module.css';
import { useDispatch } from 'react-redux';
import { fetching } from '../../redux/product';
import { fetchProduct } from '../../api/fetch';

const OPTIONS = [
  { value: 'all', name: '전체' },
  { value: 'title', name: '상품명' },
  { value: 'brand', name: '브랜드' },
  { value: 'description', name: '상품내용' },
];

export default function Search() {
  const [isCategory, setIsCartegory] = useState('all');

  const dispatch = useDispatch();

  const searchFilter = (res, word) => {
    if (!word) {
      return { productList: res };
    } else if (isCategory === 'all') {
      return {
        productList: res.filter((data) => {
          if (data.title.toLowerCase().includes(word.toLowerCase())) {
            return data.title.toLowerCase().includes(word.toLowerCase());
          } else if (data.brand.toLowerCase().includes(word.toLowerCase())) {
            return data.brand.toLowerCase().includes(word.toLowerCase());
          } else if (
            data.description.toLowerCase().includes(word.toLowerCase())
          ) {
            return data.description.toLowerCase().includes(word.toLowerCase());
          }
        }),
      };
    } else if (isCategory === 'title') {
      return {
        productList: res.filter((data) => {
          return data.title.toLowerCase().includes(word.toLowerCase());
        }),
      };
    } else if (isCategory === 'brand') {
      return {
        productList: res.filter((data) => {
          return data.brand.toLowerCase().includes(word.toLowerCase());
        }),
      };
    } else if (isCategory === 'description') {
      return {
        productList: res.filter((data) => {
          return data.description.toLowerCase().includes(word.toLowerCase());
        }),
      };
    }
  };

  const fetchProductData = async (word) => {
    const result = await fetchProduct();
    dispatch(fetching(searchFilter(result, word)));
  };

  const onSearch = (e) => {
    e.preventDefault();
    fetchProductData(e.target.searchWord.value);

    // window.history.pushState(searchWord, null, `/${word}`);
  };

  const handleCategory = (e) => {
    e.preventDefault();
    setIsCartegory(e.target.value);
  };

  return (
    <header className={styles.container}>
      <h3 className={styles.title}>상품검색</h3>
      <div className={styles.wrap}>
        <h3 className={styles.title}>검색</h3>
        <div className={styles.searchItemWrap}>
          <select className={styles.selectBox} onChange={handleCategory}>
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
          <form onSubmit={onSearch}>
            <input
              type="text"
              name="searchWord"
              className={styles.searchInput}
            />
            <button className={styles.searchBtn}>조회</button>
          </form>
        </div>
      </div>
    </header>
  );
}
