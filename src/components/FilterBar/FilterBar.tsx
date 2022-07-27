import React, { useRef, useState, FunctionComponent } from "react";
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
              filter === "Next" ? styles.ikFilterBar__button__active : ""
            }
            id={"Next"}
            onClick={onClickFilter}
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
              filter === "React" ? styles.ikFilterBar__button__active : ""
            }
            id="React"
            onClick={onClickFilter}
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
