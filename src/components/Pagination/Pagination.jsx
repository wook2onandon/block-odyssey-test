import React from 'react';
import { usePagination, DOTS } from '../../hooks/usePagination';
import styles from './Pagination.module.css';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // if (currentPage === 0 || paginationRange.length < 2) {
  //   return null;
  // }

  const onNext = (next) => {
    if (next === 'next') {
      onPageChange(currentPage + 1);
    } else if (next === 'end') {
      onPageChange(pageSize);
    }
  };

  const onPrevious = (prev) => {
    if (prev === 'prev') {
      onPageChange(currentPage - 1);
    } else if (prev === 'end') {
      onPageChange(1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={`${styles.paginationContainer} ${className && className}`}>
      <li
        className={`${styles.paginationItem} ${
          currentPage === 1 && styles.disabled
        }`}
        onClick={() => onPrevious('end')}
      >
        &lt;&lt;
      </li>
      <li
        className={`${styles.paginationItem} ${
          currentPage === 1 && styles.disabled
        }`}
        onClick={() => onPrevious('prev')}
      >
        &lt;
      </li>
      {paginationRange.map((pageNumber, idx) => {
        if (pageNumber === DOTS) {
          return (
            <li className={`${styles.paginationItem} ${styles.dots}`} key={idx}>
              &#8230;
            </li>
          );
        }
        return (
          <li
            className={`${styles.paginationItem} ${
              pageNumber === currentPage && styles.selected
            }`}
            onClick={() => onPageChange(pageNumber)}
            key={idx}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className={`${styles.paginationItem} ${
          currentPage === lastPage && styles.disabled
        }`}
        onClick={() => onNext('next')}
      >
        &gt;
      </li>
      <li
        className={`${styles.paginationItem} ${
          currentPage === lastPage && styles.disabled
        }`}
        onClick={() => onNext('end')}
      >
        &gt;&gt;
      </li>
    </ul>
  );
};

export default Pagination;
