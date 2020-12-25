import React from "react";
import {
  Grid,
  Typography,
  List,
  Paper,
  Box,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
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
}));

const QuestionView = ({ questions, question_no, answers }) => {
  const classes = useStyles();
  let correct = "";
  return (
    <Box m={3}>
      <Paper
        variant="outlined"
        style={{
          borderColor: `${
            questions[question_no].answer_option === answers[question_no].answer
              ? green[500]
              : deepOrange[500]
          }`,
        }}
      >
        <Box py={5} px={2}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={10}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      style={{
                        backgroundColor: `${
                          questions[question_no].answer_option ===
                          answers[question_no].answer
                            ? green[500]
                            : deepOrange[500]
                        }`,
                      }}
                    >
                      {question_no + 1}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography
                      variant="h6"
                      className={
                        questions[question_no].answer_option ===
                        answers[question_no].answer
                          ? classes.green
                          : classes.orange
                      }
                    >
                      {questions[question_no].question}
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
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
                className={classes.green}
              >{`Answer - ${correct}`}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};
export default QuestionView;
