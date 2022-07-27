import React, { useRef } from "react";

const FilterBar = () => {
  const scrollToRef = useRef<HTMLElement | null>(null);
  const filter: string = "";
  const sort: string = "asc";

  return (
    <section className="filter-session" ref={scrollToRef}>
      <div className="filter-session-inner">
        <div className="filter">
          <span> Filter by</span>
          <button className={filter === "SCSS" ? `filter-active` : ""}>
            {" "}
            Scss
          </button>
          <button className={filter === "JS" ? `filter-active` : ""}>
            {" "}
            JS
          </button>
          <button className={filter === "API" ? `filter-active` : ""}>
            {" "}
            API
          </button>
          <button className={filter === "react" ? `filter-active` : ""}>
            {" "}
            React js
          </button>
          <button className={filter === "MongoDB" ? `filter-active` : ""}>
            {" "}
            MongoDB{" "}
          </button>
          <button> Clear</button>
        </div>

        <div className="sort">
          <span> Sort by</span>
          <button className={sort === "desc" ? `sort-active` : ""}>
            {" "}
            Latest
          </button>
          <button className={sort === "asc" ? `sort-active` : ""}>
            {" "}
            Earliest
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
