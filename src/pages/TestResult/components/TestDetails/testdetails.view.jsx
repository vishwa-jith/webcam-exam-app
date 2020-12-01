import React from "react";
import {
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Box,
  Typography,
  Table,
  TableBody,
  Button,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useHistory } from "react-router-dom";
import TestInfo from "../TestInfo";
import { makeStyles } from "@material-ui/core/styles";
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});
const TestDetailsView = ({ testDetails, info }) => {
  const classes = useRowStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  console.log(testDetails);
  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {testDetails.test_name}
        </TableCell>
        <TableCell align="right">{testDetails.topic}</TableCell>
        <TableCell align="right">{testDetails.duration_in_min} min</TableCell>
        <TableCell align="right">{testDetails.total_marks}</TableCell>
        <TableCell align="right">
          {new Date(info.createdAt).toDateString()}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box m={1}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                color="textSecondary"
              >
                Test Details &amp; History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TestInfo testDetails={testDetails} testInfo={info} />
                </TableBody>
              </Table>
            </Box>
            <Box my={2}>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={() => history.push(`/testsolution/${testDetails._id}`)}
              >
                Detailed Report
              </Button>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
export default TestDetailsView;
