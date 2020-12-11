import React from "react";
import {
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  List,
  ListItem,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

//Components
import SubmitDialog from "./components/SubmitDialog";

const QuestionView = ({
  questions,
  question_no,
  handleAnswers,
  answers,
  handleQuestion,
  handleClickOpen,
  handleSubmitAnswers,
  handleClose,
  open,
  done,
  warning,
}) => {
  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={10}>
          <Typography variant="h6">
            {questions[question_no].question}
          </Typography>
          <List dense>
            {questions[question_no].options.map((opt, index) => {
              return (
                <ListItem
                  button
                  id={`${index}`}
                  onClick={handleAnswers}
                  key={index}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          answers.length !== question_no &&
                          parseInt(answers[question_no].answer) === index
                        }
                        onChange={handleAnswers}
                        onClick={handleAnswers}
                        name={`${index}`}
                        id={`${index}`}
                        color="primary"
                      />
                    }
                    label={opt}
                    onClick={handleAnswers}
                  />
                </ListItem>
              );
            })}
          </List>
          <Grid container justify="space-around" alignItems="center">
            <Grid item>
              {question_no === 0 ? (
                <Button
                  disabled={true}
                  color="primary"
                  size="small"
                  variant="outlined"
                >
                  Start
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    handleQuestion(-1);
                  }}
                  color="primary"
                  size="small"
                  variant="outlined"
                  startIcon={<ArrowBackIcon />}
                >
                  Previous
                </Button>
              )}
            </Grid>
            <Grid item>
              {question_no === questions.length - 1 ? (
                <Button
                  color="primary"
                  size="small"
                  variant="contained"
                  onClick={handleClickOpen}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    handleQuestion(1);
                  }}
                  color="primary"
                  size="small"
                  variant="contained"
                  disabled={!answers.length >= question_no + 1}
                  endIcon={<ArrowForwardIcon />}
                >
                  Next
                </Button>
              )}
              <SubmitDialog
                open={open}
                answers={answers}
                warning={warning}
                done={done}
                handleSubmitAnswers={handleSubmitAnswers}
                handleClose={handleClose}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default QuestionView;
