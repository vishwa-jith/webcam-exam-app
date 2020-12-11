import React from "react";
import { Grid, Typography, List, Paper, Box } from "@material-ui/core";
import { deepOrange, green, deepPurple } from "@material-ui/core/colors";

import Solution from "./components/Solution";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  orange: {
    color: deepOrange[500],
  },
  purple: {
    color: deepPurple[500],
    fontWeight: "bold",
  },
  green: {
    color: green[500],
  },
  answer: {
    fontWeight: "bold",
    color: "#555",
  },
}));

const QuestionView = ({ questions, question_no, answers }) => {
  const classes = useStyles();
  let correct = "";
  return (
    <Box m={2}>
      <Paper>
        <Box py={5} px={2}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={10}>
              <Typography
                variant="h6"
                className={
                  questions[question_no].answer_option ===
                    answers[question_no] && classes.answer
                }
              >
                {questions[question_no].question}
              </Typography>
              <List dense>
                {questions[question_no].options.map((opt, index) => {
                  if (questions[question_no].answer_option === index) {
                    correct = opt;
                  }
                  return (
                    <Solution
                      index={index}
                      questions={questions}
                      answers={answers}
                      question_no={question_no}
                      opt={opt}
                    />
                  );
                })}
              </List>
              <Typography
                className={classes.answer}
              >{`Answer - ${correct}`}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};
export default QuestionView;
