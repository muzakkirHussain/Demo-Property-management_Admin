import React, { useEffect, useState } from "react";
import { useTable, useSortBy } from "react-table";
import "../Styles/Components/ReactTable.scss";
import sort from "../assets/Common/sort_icon.svg";

const Table = ({
  columns,
  data,
  addons = [],
  setSearchString,
  filterList,
  selectedFilter,
  setSelectedFilter,
  handleRowClick,
  totalPages = 10,
  currentPage = 2,
  onPageChange = () => {},
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setSortBy,
  } = useTable(
    {
      columns,
      data,
      initialState: { sortBy: [] },
    },
    useSortBy // Add useSortBy hook
  );
  const { sortBy } = state;

  const [page, setPage] = useState(currentPage);
  const pagesToShow = 5;
  const handlePageChange = (newPage) => {
    setPage(newPage);
    onPageChange(newPage);
  };
  const startPage = Math.max(1, page - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  useEffect(() => {
    // Trigger re-render when sorting changes
    // handlePageChange(page); // Remove this line if it's not related to sorting
  }, [sortBy, page]);

  return (
    <>
      {addons.length > 0 && (
        <div className="addons">
          {addons.includes("Search") && (
            <div className="searchDiv">
              <input
                type="text"
                placeholder="Search...."
                onChange={(e) => {
                  setSearchString(e.target.value);
                }}
              />
            </div>
          )}
          {addons.includes("Filters") && (
            <div className="filterDiv">
              {filterList.map((filter, index) => (
                <span
                  key={index}
                  className={`mainSpan ${selectedFilter === index && "active"}`}
                  onClick={() => {
                    setSelectedFilter(index);
                  }}
                >
                  {filter.label}
                  <span
                    className="subSpan"
                    style={{ background: filter.background }}
                  >
                    {filter.count}
                  </span>
                </span>
              ))}
            </div>
          )}
        </div>
      )}
      <table className="custom-table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  style={{ cursor: column.canSort ? "pointer" : "default" }}
                  key={column.id}
                  {...column.getHeaderProps(
                    column.canSort ? column.getSortByToggleProps() : {}
                  )}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sorted-desc"
                        : "sorted-asc"
                      : ""
                  }
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {column.render("Header")}
                    {column.canSort && <img src={sort} alt={"sort"} />}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="custom-table-body" {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                style={{ cursor: handleRowClick ? "pointer" : "default" }}
                key={i} // Add key prop to the row
                className={i % 2 === 0 ? "even" : "odd"}
                {...row.getRowProps()}
                onClick={() => {
                  if (handleRowClick) {
                    handleRowClick(row.original);
                  }
                }}
              >
                {row.cells.map(
                  (
                    cell,
                    index // Add key prop to the cells
                  ) => (
                    <td key={index} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      {data.length > 10 && (
        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
          {Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
          ).map((pageNumber) => (
            <button
              key={pageNumber}
              className={pageNumber === page ? "active" : ""}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
          <button
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export { Table };
