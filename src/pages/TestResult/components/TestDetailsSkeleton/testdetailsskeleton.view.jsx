import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const TestDetailsSkeletonView = () => {
  return (
    <>
      <TableRow>
        <TableCell>
          <Skeleton animation="wave" variant="circle" height={30} width={30} />
        </TableCell>
        <TableCell component="th" scope="row">
          <Skeleton animation="wave" height={15} width={75} />
        </TableCell>
        <TableCell align="right">
          <Skeleton animation="wave" height={15} width={200} />
        </TableCell>
        <TableCell align="right">
          <Skeleton animation="wave" height={15} width={75} />
        </TableCell>
        <TableCell align="right">
          <Skeleton animation="wave" height={15} width={50} />
        </TableCell>
        <TableCell align="right">
          <Skeleton animation="wave" height={15} width={150} />
        </TableCell>
      </TableRow>
    </>
  );
};
export default TestDetailsSkeletonView;
