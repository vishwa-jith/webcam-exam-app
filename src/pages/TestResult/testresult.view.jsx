import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@material-ui/core";

import TestDetails from "./components/TestDetails";

const TestResultView = ({ testTopic, testInfo }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Test Name</TableCell>
              <TableCell align="right">Test Topic</TableCell>
              <TableCell align="right">Test Duration</TableCell>
              <TableCell align="right">Total Marks</TableCell>
              <TableCell align="right">Test Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testInfo.map((info) => {
              const testDetails = testTopic.filter(
                (topic) => topic._id === info.test_id
              )[0];
              return <TestDetails info={info} testDetails={testDetails} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TestResultView;
