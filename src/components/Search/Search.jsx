import React from 'react';
import styles from './Search.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetching } from '../../redux/modules/product';
import { changeQueryParams } from '../../redux/modules/queryParams';
import { fetchProduct } from '../../api/fetch';
import { getParameter } from '../../utils/parameter';
import { searchFilter } from '../../utils/filter';

const OPTIONS = [
  { value: 'all', name: '전체' },
  { value: 'title', name: '상품명' },
  { value: 'brand', name: '브랜드' },
  { value: 'description', name: '상품내용' },
];

export default function Search() {
  let category = getParameter('category');
  let searchWord = getParameter('searchWord');

  const queryParams = useSelector((state) => state.queryParams.value);
  const dispatch = useDispatch();

  const fetchProductData = async (word) => {
    const result = await fetchProduct();
    dispatch(fetching(searchFilter(result, word, queryParams.category)));
  };

  const onSearch = (e) => {
    e.preventDefault();
    fetchProductData(queryParams.searchWord);
  };

  const handleCategory = (e) => {
    e.preventDefault();
    dispatch(
      changeQueryParams({
        ...queryParams,
        category: e.target.value,
      }),
    );
    window.history.pushState(
      '',
      'main',
      `/search?category=${e.target.value}&searchWord=${queryParams.searchWord}&limit=${queryParams.limit}&page=${queryParams.page}`,
    );
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    dispatch(
      changeQueryParams({
        ...queryParams,
        searchWord: e.target.value,
      }),
    );
    window.history.pushState(
      '',
      'main',
      `/search?category=${queryParams.category}&searchWord=${e.target.value}&limit=${queryParams.limit}&page=${queryParams.page}`,
    );
  };

  return (
    <header className={styles.container}>
      <h3 className={styles.title}>상품검색</h3>
      <div className={styles.wrap}>
        <h3 className={styles.title}>검색</h3>
        <div className={styles.searchItemWrap}>
          <select
            className={styles.selectBox}
            onChange={handleCategory}
            value={category ? category : 'all'}
          >
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
              value={searchWord ? searchWord : ''}
              name="searchWord"
              className={styles.searchInput}
              onChange={handleInputChange}
            />
            <button className={styles.searchBtn}>조회</button>
          </form>
        </div>
      </div>
    </header>
  );
}
