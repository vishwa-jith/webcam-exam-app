import React from "react";
import {
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  List,
  ListItem,
  Paper,
  Box,
} from "@material-ui/core";
import { deepOrange, green, deepPurple } from "@material-ui/core/colors";
import { makeStyles, withStyles } from "@material-ui/core/styles";

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

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const OrangeCheckbox = withStyles({
  root: {
    color: deepOrange[400],
    "&$checked": {
      color: deepOrange[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

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
                    <ListItem id={`${index}`} key={index}>
                      <FormControlLabel
                        control={
                          questions[question_no].answer_option === index &&
                          answers[question_no] === index ? (
                            <GreenCheckbox checked={true} />
                          ) : questions[question_no].answer_option === index ? (
                            <GreenCheckbox checked={true} disabled={true} />
                          ) : answers[question_no] === index ? (
                            <OrangeCheckbox checked={true} />
                          ) : (
                            <Checkbox disabled={true} />
                          )
                        }
                        label={opt}
                      />
                    </ListItem>
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
