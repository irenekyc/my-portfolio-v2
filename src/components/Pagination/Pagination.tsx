import React, { FunctionComponent } from "react";
import styles from "./Pagination.module.scss";
import classnames from "classnames";

interface PagingationProps {
  goToNextPage: () => void;
  goToPrevPage: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const Pagination: FunctionComponent<PagingationProps> = ({
  goToNextPage,
  goToPrevPage,
  hasNext,
  hasPrev,
}: PagingationProps) => {
  return (
    <div className={styles.ikPaginationBar} data-testid="pagination">
      {hasPrev && (
        <button
          onClick={goToPrevPage}
          className={classnames(
            styles.ikPaginationBar__button,
            styles.ikPaginationBar__button__prev
          )}
          data-testid="pagination-prev"
        >
          Prev
        </button>
      )}
      {hasNext && (
        <button
          onClick={goToNextPage}
          className={classnames(
            styles.ikPaginationBar__button,
            styles.ikPaginationBar__button__next
          )}
          data-testid="pagination-next"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
