import React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  TablePagination,
} from "@material-ui/core";
import { getTime } from "../../components/utils";
import { baseUrl } from "../../components/constants";

//Components
import TableHead from "./components/TableHead";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const LeaderBoardView = ({
  order,
  orderBy,
  page,
  rowsPerPage,
  leaderBoard,
  emptyRows,
  handleChangePage,
  handleChangeRowsPerPage,
  handleRequestSort,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <TableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(leaderBoard, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((test, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow tabIndex={-1} key={test._id}>
                      <TableCell id={labelId} align="right">
                        <Avatar
                          alt="Profile Photo"
                          src={`${baseUrl}images/upload/${test.user_id}-profile.jpg`}
                        />
                      </TableCell>
                      <TableCell align="right">
                        {test.score.toFixed(2)}
                      </TableCell>
                      <TableCell align="right">
                        {`${test.no_of_warning}/5`}
                      </TableCell>
                      <TableCell align="right">
                        {test.time_taken + " Minutes"}
                      </TableCell>
                      <TableCell align="right">
                        {getTime(test.start_time)}
                      </TableCell>
                      <TableCell align="right">
                        {getTime(test.end_time)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={leaderBoard.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
export default LeaderBoardView;
