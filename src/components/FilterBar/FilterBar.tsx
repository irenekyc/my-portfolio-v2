import React, { useRef, useState, FunctionComponent } from "react";
import styles from "./FilterBar.module.scss";

interface FilterBarProps {
  setConditions: ({
    filter,
    sort,
  }: {
    filter: string | null;
    sort: string | null;
  }) => void;
}

const FilterBar: FunctionComponent<FilterBarProps> = ({
  setConditions,
}: FilterBarProps) => {
  const scrollToRef = useRef<HTMLElement | null>(null);

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
    <section className={styles.ikFilterBar__container} ref={scrollToRef}>
      <div className={styles.ikFilterBar__inner}>
        <div className="filter">
          <span> Filter by</span>
          <button
            className={
              filter === "SCSS" ? styles.ikFilterBar__button__active : ""
            }
            id={"SCSS"}
            onClick={onClickFilter}
          >
            {" "}
            Scss
          </button>
          <button
            className={
              filter === "JS" ? styles.ikFilterBar__button__active : ""
            }
            id={"JS"}
            onClick={onClickFilter}
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
          >
            {" "}
            API
          </button>
          <button
            className={
              filter === "react" ? styles.ikFilterBar__button__active : ""
            }
            id="react"
            onClick={onClickFilter}
          >
            {" "}
            React js
          </button>
          <button
            className={
              filter === "MongoDB" ? styles.ikFilterBar__button__active : ""
            }
            id="MongoDB"
            onClick={onClickFilter}
          >
            {" "}
            MongoDB{" "}
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
          >
            {" "}
            Latest
          </button>
          <button
            className={sort === "asc" ? styles.ikFilterBar__button__active : ""}
            id="asc"
            onClick={onClickSort}
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
