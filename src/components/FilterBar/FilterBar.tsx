import React, { useState, FunctionComponent } from "react";
import styles from "./FilterBar.module.scss";

interface FilterBarProps {
  setConditions: ({
    filter,
    sort,
  }: {
    filter: string | null;
    sort: string;
  }) => void;
}

const FilterBar: FunctionComponent<FilterBarProps> = ({
  setConditions,
}: FilterBarProps) => {
  const [filter, setFilter] = useState<string | null>(null);
  const [sort, setSort] = useState<string>("desc");
  const onClickFilter = (e: any) => {
    const id = e.target.id;
    setFilter(id);
    setConditions({
      sort,
      filter: id,
    });
  };

  const onClickSort = (e: any) => {
    const id = e.target.id;
    setSort(id);
    setConditions({
      sort: id,
      filter,
    });
  };

  const clearFilter = () => {
    setConditions({
      sort,
      filter: null,
    });
    setFilter(null);
  };

  return (
    <section
      className={styles.ikFilterBar__container}
      id="filter-bar"
      data-testid="filter-bar"
    >
      <div className={styles.ikFilterBar__inner}>
        <div className="filter">
          <span> Filter by</span>
          <button
            className={
              filter === "Next" ? styles.ikFilterBar__button__active : ""
            }
            id={"Next"}
            onClick={onClickFilter}
            data-testid="filter-option"
          >
            {" "}
            NextJs
          </button>
          <button
            className={
              filter === "JS" ? styles.ikFilterBar__button__active : ""
            }
            id={"JS"}
            onClick={onClickFilter}
            data-testid="filter-option"
          >
            {" "}
            JS
          </button>
          <button
            className={
              filter === "API" ? styles.ikFilterBar__button__active : ""
            }
            id="API"
            onClick={onClickFilter}
            data-testid="filter-option"
          >
            {" "}
            API
          </button>
          <button
            className={
              filter === "React" ? styles.ikFilterBar__button__active : ""
            }
            id="React"
            onClick={onClickFilter}
            data-testid="filter-option"
          >
            {" "}
            React
          </button>
          <button
            className={
              filter === "MongoDB" ? styles.ikFilterBar__button__active : ""
            }
            id="MongoDB"
            onClick={onClickFilter}
            data-testid="filter-option"
          >
            {" "}
            MongoDB{" "}
          </button>
          <button
            className={
              filter === "Solidity" ? styles.ikFilterBar__button__active : ""
            }
            id="Solidity"
            onClick={onClickFilter}
            data-testid="filter-option"
          >
            {" "}
            Solidity{" "}
          </button>
          <button
            className={
              filter === "Python" ? styles.ikFilterBar__button__active : ""
            }
            id="Python"
            onClick={onClickFilter}
            data-testid="filter-option"
          >
            {" "}
            Python{" "}
          </button>
          <button
            className={
              filter === "Webflow" ? styles.ikFilterBar__button__active : ""
            }
            id="Webflow"
            onClick={onClickFilter}
            data-testid="filter-option"
          >
            {" "}
            Webflow{" "}
          </button>
          <button
            className={
              filter === "Typescript" ? styles.ikFilterBar__button__active : ""
            }
            id="Typescript"
            onClick={onClickFilter}
            data-testid="filter-option"
          >
            {" "}
            Typescript{" "}
          </button>
          <button onClick={clearFilter}> Clear</button>
        </div>

        <div className="sort">
          <span> Sort by</span>
          <button
            className={
              sort === "desc" ? styles.ikFilterBar__button__active : ""
            }
            id="desc"
            onClick={onClickSort}
            data-testid="sort-option"
          >
            {" "}
            Latest
          </button>
          <button
            className={sort === "asc" ? styles.ikFilterBar__button__active : ""}
            id="asc"
            onClick={onClickSort}
            data-testid="sort-option"
          >
            {" "}
            Earliest
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
