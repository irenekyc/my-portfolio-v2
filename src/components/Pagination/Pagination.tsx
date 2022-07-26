import React from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { fetchData } from "../../actions/data";

const Pagination = () => {
  const dispatch = useDispatch();
  const { curPage, sort, filter, totalPages } = useSelector(
    (state: RootStateOrAny) => state.status
  );
  return (
    <div className="pagination-bar">
      {curPage > 0 && (
        <div className="prev">
          <span onClick={() => dispatch(fetchData(curPage - 1, sort, filter))}>
            Prev{" "}
          </span>
        </div>
      )}
      <div className="next">
        {curPage < totalPages - 1 && (
          <span onClick={() => dispatch(fetchData(curPage + 1, sort, filter))}>
            {" "}
            Next
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
