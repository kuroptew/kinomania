import classnames from 'classnames';
import { DOTS, PaginationProps, usePagination } from '@/utils/hooks/usePagination';

import styles from "./styles.module.scss";

interface Props extends PaginationProps {
  onPageChange: (page: number) => void
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize }: Props) => {

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })!;

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  
  return (
    <div
      className={styles.pagination}
    >
      <button
        className={styles.arrow}
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        {"<"}
      </button>
      {paginationRange.map((pageNumber, index) => {

        if (pageNumber === DOTS) {
          return <button key={index} className={styles.dots}>&#8230;</button>;
        }

        return (
          <button
            key={index}
            className={classnames(styles.pageNumber, pageNumber === currentPage ? styles.selected : "")}
            onClick={() => 
              onPageChange(pageNumber as number)
            }
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className={styles.arrow}
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;