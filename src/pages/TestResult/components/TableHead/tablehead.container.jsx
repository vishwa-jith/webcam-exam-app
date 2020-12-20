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
      disablePadding: true,
      label: "",
    },
    {
      id: "test_name",
      numeric: true,
      disablePadding: false,
      label: "Test Name",
    },
    {
      id: "topic",
      numeric: true,
      disablePadding: false,
      label: "Topic",
    },
    {
      id: "duration_in_min",
      numeric: true,
      disablePadding: false,
      label: "Duration (min)",
    },
    {
      id: "total_marks",
      numeric: true,
      disablePadding: false,
      label: "Total Marks",
    },
    {
      id: "createdAt",
      numeric: true,
      disablePadding: false,
      label: "Test Date",
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
