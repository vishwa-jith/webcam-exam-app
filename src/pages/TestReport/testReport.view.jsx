import React from "react";
import { Grid } from "@material-ui/core";
import Question from "./components/Question";
import TestDetails from "./components/TestDetails";
const TestReportView = ({ questions, answers, testDetails, testInfo }) => {
  return (
    <>
      <Grid container justify="center" alignItems="center">
        {testDetails && testInfo && (
          <TestDetails testDetails={testDetails} testInfo={testInfo} />
        )}
        <Grid item md={10} xs={12}>
          {questions &&
            answers &&
            questions.map((question, index) => {
              return (
                <Question
                  questions={questions}
                  question_no={index}
                  answers={answers}
                />
              );
            })}
        </Grid>
      </Grid>
    </>
  );
};
export default TestReportView;
