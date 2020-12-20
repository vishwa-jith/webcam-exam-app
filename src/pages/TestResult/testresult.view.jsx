import React from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
  Button,
  Fade,
  TablePagination,
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PolicyIcon from "@material-ui/icons/Policy";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { indigo } from "@material-ui/core/colors";
import { baseUrl } from "../../components/constants";

//Components
import TableHead from "./components/TableHead";
import TestDetails from "./components/TestDetails";

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

const TestResultView = ({
  testTopic,
  testInfo,
  isLoading,
  order,
  orderBy,
  page,
  rowsPerPage,
  handleRequestSort,
  handleChangePage,
  handleChangeRowsPerPage,
  emptyRows,
}) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TableContainer>
            {isLoading || (!isLoading && testInfo.length) ? (
              <Table className={classes.table} aria-label="collapsible table">
                <TableHead
                  classes={classes}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {stableSort(testInfo, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((info) => {
                      const testDetails = testTopic.filter(
                        (topic) => topic._id === info.test_id
                      )[0];
                      return (
                        <TestDetails
                          info={info}
                          testDetails={testDetails}
                          isLoading={isLoading}
                        />
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 64 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            ) : (
              <Fade in={!isLoading}>
                <Grid container justify="center" alignItems="center">
                  <Grid item xs={6}>
                    <img
                      src={`${baseUrl}images/noTestFound.jpg`}
                      style={{ height: "100%", width: "100%" }}
                      alt="No Results"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Box m={3}>
                      <Paper>
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <PolicyIcon
                                style={{ fontSize: "3rem", color: indigo[500] }}
                              />
                            </ListItemIcon>
                            <ListItemText>
                              <Typography variant="h6" color="textPrimary">
                                No Test Results Found
                              </Typography>
                            </ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <FiberManualRecordIcon />
                            </ListItemIcon>
                            <ListItemText>
                              <Typography variant="h6" color="textSecondary">
                                Currently the Test Report Dashboard is empty
                              </Typography>
                            </ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <FiberManualRecordIcon />
                            </ListItemIcon>
                            <ListItemText>
                              <Typography variant="h6" color="textSecondary">
                                Completed Test Reports can be viewed here.
                              </Typography>
                            </ListItemText>
                          </ListItem>
                          <ListItem>
                            <Button
                              onClick={() => history.push("/testtopics")}
                              variant="contained"
                              color="primary"
                              endIcon={<AssessmentIcon />}
                            >
                              Take Test
                            </Button>
                          </ListItem>
                        </List>
                      </Paper>
                    </Box>
                  </Grid>
                </Grid>
              </Fade>
            )}
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={testInfo.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
};
export default TestResultView;
