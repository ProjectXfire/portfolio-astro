import { useEffect, useState } from 'react';
import styles from '../styles/Pagination.module.css';

function Pagination({ pages = 5, initPage = 1, currentPage }) {
  const [page, setPage] = useState(initPage);

  const handlePage = (next) => {
    let tempPage = page;
    if (next === '-') tempPage = Math.max(1, page - 1);
    if (next === '+') tempPage = Math.min(pages, page + 1);
    if (tempPage === page) return;
    setPage(tempPage);
    currentPage(tempPage);
  };

  useEffect(() => {
    if (pages === 0) return;
    setPage(1);
  }, [pages]);

  return (
    <div className={styles.pagination}>
      <button type='button' onClick={() => handlePage('-')}>
        {'<'}
      </button>
      <span>{page}</span>
      <button type='button' onClick={() => handlePage('+')}>
        {'>'}
      </button>
    </div>
  );
}

export default Pagination;
