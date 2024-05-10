// import React, { useEffect, useState } from 'react';
// import { useTable, useSortBy } from 'react-table';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import sort from '../assets/Common/sort_icon.svg';
// import dragIcon from '../assets/Common/burger-menu-left-svgrepo-com.svg';
// import '../Styles/Components/ReactTable.scss';

// function Table({
//   columns,
//   data,
//   addons = [],
//   setSearchString,
//   filterList,
//   selectedFilter,
//   setSelectedFilter,
//   handleRowClick,
//   totalPages = 10,
//   currentPage = 2,
//   onPageChange = () => {},
//   draggable,
// }) {
//   const [dropableData, setDropableData] = useState(data);

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//     state,
//     setSortBy,
//   } = useTable(
//     {
//       columns,
//       data: dropableData.length > 0 ? dropableData : data,
//       initialState: { sortBy: [] },
//     },
//     useSortBy
//   );
//   const { sortBy } = state;
//   const [page, setPage] = useState(currentPage);
//   const pagesToShow = 5;
//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//     onPageChange(newPage);
//   };
//   const startPage = Math.max(1, page - Math.floor(pagesToShow / 2));
//   const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

//   // Function to handle row drag and drop
//   const handleDragEnd = (result) => {
//     if (!result.destination) return;
//     const items = [...dropableData];
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);
//     setDropableData(items);
//   };
//   useEffect(() => {
//     // Trigger re-render when sorting changes
//     // handlePageChange(page); // Remove this line if it's not related to sorting
//   }, [sortBy, page]);

//   return (
//     <DragDropContext onDragEnd={handleDragEnd}>
//       {addons.length > 0 && (
//         <div className="addons">
//           {addons.includes('Search') && (
//             <div className="searchDiv">
//               <input
//                 type="text"
//                 placeholder="Search...."
//                 onChange={(e) => {
//                   setSearchString(e.target.value);
//                 }}
//               />
//             </div>
//           )}
//           {addons.includes('Filters') && (
//             <div className="filterDiv">
//               {filterList.map((filter, index) => (
//                 <span
//                   key={index}
//                   className={`mainSpan ${
//                     selectedFilter === filter.value && 'active'
//                   }`}
//                   onClick={() => {
//                     setSelectedFilter(filter.value);
//                   }}
//                 >
//                   {filter.label}
//                   <span
//                     className="subSpan"
//                     style={{ background: filter.background }}
//                   >
//                     {filter.count}
//                   </span>
//                 </span>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//       <table className="custom-table" {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup, index) => (
//             <tr {...headerGroup.getHeaderGroupProps()} key={index}>
//               {/* {draggable && ()} */}
//               {draggable && <th />}
//               {headerGroup.headers.map((column) => (
//                 <th
//                   style={{ cursor: column.canSort ? 'pointer' : 'default' }}
//                   key={column.id}
//                   {...column.getHeaderProps(
//                     column.canSort ? column.getSortByToggleProps() : {}
//                   )}
//                   className={
//                     column.isSorted
//                       ? column.isSortedDesc
//                         ? 'sorted-desc'
//                         : 'sorted-asc'
//                       : ''
//                   }
//                 >
//                   <span
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '10px',
//                     }}
//                   >
//                     {column.render('Header')}
//                     {column.canSort && <img src={sort} alt="sort" />}
//                   </span>
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <Droppable droppableId="rows">
//           {(provided) => (
//             <tbody
//               className="custom-table-body"
//               {...getTableBodyProps()}
//               ref={provided.innerRef}
//             >
//               {rows.map((row, index) => {
//                 prepareRow(row);
//                 return (
//                   <Draggable
//                     key={index}
//                     draggableId={row.id.toString()}
//                     index={index}
//                   >
//                     {(provided, snapshot) => (
//                       <tr
//                         style={{
//                           cursor: handleRowClick ? 'pointer' : 'default',
//                         }}
//                         {...provided.draggableProps}
//                         ref={provided.innerRef}
//                         key={row.id} // Add key prop to the row
//                         className={index % 2 === 0 ? 'even' : 'odd'}
//                         onClick={() => {
//                           if (
//                             handleRowClick &&
//                             !row.cells.some((cell) => cell.column.noRowClick)
//                           ) {
//                             // Check if any cell in the row has noRowClick set to true
//                             handleRowClick(row.original);
//                           }
//                         }}
//                       >
//                         {draggable && (
//                           <td>
//                             <img
//                               {...provided.dragHandleProps}
//                               src={dragIcon}
//                               alt="dragIcon"
//                               width="37px"
//                               height="23px"
//                             />
//                           </td>
//                         )}

//                         {row.cells.map((cell, index) => (
//                           <td key={index} {...cell.getCellProps()}>
//                             {cell.render('Cell')}
//                           </td>
//                         ))}
//                       </tr>
//                     )}
//                   </Draggable>
//                 );
//               })}
//               {provided.placeholder}
//             </tbody>
//           )}
//         </Droppable>
//       </table>
//       {/* {data.length > 10 && (
//         <div className="pagination">
//           <button
//             disabled={page === 1}
//             onClick={() => handlePageChange(page - 1)}
//           >
//             Previous
//           </button>
//           {Array.from(
//             { length: endPage - startPage + 1 },
//             (_, i) => startPage + i
//           ).map((pageNumber) => (
//             <button
//               key={pageNumber}
//               className={pageNumber === page ? "active" : ""}
//               onClick={() => handlePageChange(pageNumber)}
//             >
//               {pageNumber}
//             </button>
//           ))}
//           <button
//             disabled={page === totalPages}
//             onClick={() => handlePageChange(page + 1)}
//           >
//             Next
//           </button>
//         </div>
//       )} */}
//     </DragDropContext>
//   );
// }

// export { Table };

import React, { useEffect, useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import sort from '../assets/Common/sort_icon.svg';
import dragIcon from '../assets/Common/burger-menu-left-svgrepo-com.svg';
import '../Styles/Components/ReactTable.scss';

function Table({
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
  draggable,
}) {
  const [dropableData, setDropableData] = useState(data);

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
      data: dropableData.length > 0 ? dropableData : data,
      initialState: { sortBy: [] },
    },
    useSortBy
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

  // Function to handle row drag and drop
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = [...dropableData];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDropableData(items);
  };
  useEffect(() => {
    // Trigger re-render when sorting changes
    // handlePageChange(page); // Remove this line if it's not related to sorting
  }, [sortBy, page]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {addons.length > 0 && (
        <div className="addons">
          {addons.includes('Search') && (
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
          {addons.includes('Filters') && (
            <div className="filterDiv">
              {filterList.map((filter, index) => (
                <span
                  key={index}
                  className={`mainSpan ${
                    selectedFilter === filter.value && 'active'
                  }`}
                  onClick={() => {
                    setSelectedFilter(filter.value);
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
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {/* {draggable && ()} */}
              {draggable && <th />}
              {headerGroup.headers.map((column) => (
                <th
                  style={{ cursor: column.canSort ? 'pointer' : 'default' }}
                  key={column.id}
                  {...column.getHeaderProps(
                    column.canSort ? column.getSortByToggleProps() : {}
                  )}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sorted-desc'
                        : 'sorted-asc'
                      : ''
                  }
                >
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    {column.render('Header')}
                    {column.canSort && <img src={sort} alt="sort" />}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <Droppable droppableId="rows">
          {(provided) => (
            <tbody
              className="custom-table-body"
              {...getTableBodyProps()}
              ref={provided.innerRef}
            >
              {rows.map((row, index) => {
                prepareRow(row);
                return (
                  <React.Fragment key={index}>
                    {/* Check if draggable is true */}
                    {draggable ? (
                      <Draggable
                        key={index}
                        draggableId={row.id.toString()}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <tr
                            style={{
                              cursor: handleRowClick ? 'pointer' : 'default',
                            }}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                            key={row.id} // Add key prop to the row
                            className={index % 2 === 0 ? 'even' : 'odd'}
                            onClick={() => {
                              if (
                                handleRowClick &&
                                !row.cells.some(
                                  (cell) => cell.column.noRowClick
                                )
                              ) {
                                // Check if any cell in the row has noRowClick set to true
                                handleRowClick(row.original);
                              }
                            }}
                          >
                            {/* Render drag handle only if draggable */}
                            <td>
                              <img
                                {...provided.dragHandleProps}
                                src={dragIcon}
                                alt="dragIcon"
                                width="37px"
                                height="23px"
                              />
                            </td>
                            {row.cells.map((cell, index) => (
                              <td key={index} {...cell.getCellProps()}>
                                {cell.render('Cell')}
                              </td>
                            ))}
                          </tr>
                        )}
                      </Draggable>
                    ) : (
                      // Render regular table row if draggable is false
                      <tr
                        style={{
                          cursor: handleRowClick ? 'pointer' : 'default',
                        }}
                        key={row.id} // Add key prop to the row
                        className={index % 2 === 0 ? 'even' : 'odd'}
                        onClick={() => {
                          if (
                            handleRowClick &&
                            !row.cells.some((cell) => cell.column.noRowClick)
                          ) {
                            // Check if any cell in the row has noRowClick set to true
                            handleRowClick(row.original);
                          }
                        }}
                      >
                        {/* No drag handle */}
                        {row.cells.map((cell, index) => (
                          <td key={index} {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        ))}
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
              {provided.placeholder}
            </tbody>
          )}
        </Droppable>
      </table>
      {/* {data.length > 10 && (
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
      )} */}
    </DragDropContext>
  );
}

export { Table };
