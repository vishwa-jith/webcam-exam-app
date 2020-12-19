import React from "react";

import TableHeadView from "./tablehead.view";

const TableHead = ({
  classes,
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}) => {
  //Const
  const headCells = [
    {
      id: "_id",
      numeric: false,
      disablePadding: false,
      label: "Avatar",
    },
    {
      id: "score",
      numeric: true,
      disablePadding: false,
      label: "Score",
    },
    {
      id: "no_of_warning",
      numeric: true,
      disablePadding: false,
      label: "Number of Warnings (5)",
    },
    {
      id: "time_taken",
      numeric: true,
      disablePadding: false,
      label: "Time Taken (min)",
    },
    {
      id: "start_time",
      numeric: true,
      disablePadding: false,
      label: "Start Time (24 hours)",
    },
    {
      id: "end_time",
      numeric: true,
      disablePadding: false,
      label: "End Time (24 hours)",
    },
  ];
  //Event Handlers
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <>
      <TableHeadView
        classes={classes}
        headCells={headCells}
        onSelectAllClick={onSelectAllClick}
        order={order}
        orderBy={orderBy}
        numSelected={numSelected}
        rowCount={rowCount}
        onRequestSort={onRequestSort}
        createSortHandler={createSortHandler}
      />
    </>
  );
};
export default TableHead;
