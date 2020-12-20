import React from "react";
import { Grid, TablePagination, Box } from "@material-ui/core";

import Question from "./components/Question";
import TestDetails from "./components/TestDetails";

const TestReportView = ({
  page,
  rowsPerPage,
  questions,
  answers,
  testDetails,
  testInfo,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <>
      <Grid container justify="center" alignItems="center">
        <TestDetails testDetails={testDetails} testInfo={testInfo} />
        <Grid md={10} xs={10} item justify="flex-end">
          <Box m={1}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={questions ? questions.length : 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Box>
        </Grid>
        <Grid item md={10} xs={12}>
          {questions &&
            answers &&
            questions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((question, index) => {
                return (
                  <Question
                    questions={questions}
                    question_no={index + page * rowsPerPage}
                    answers={answers}
                  />
                );
              })}
        </Grid>
        {questions && (
          <Grid md={10} xs={10} item justify="flex-end">
            <Box m={1}>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={questions ? questions.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
};
export default TestReportView;
