import React from "react";
import {
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { deepOrange, green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  orange: {
    color: "white",
    backgroundColor: deepOrange[500],
  },
  green: {
    color: "white",
    backgroundColor: green[500],
  },
}));
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
  const classes = useStyles();
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
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Test Submit</DialogTitle>
                <DialogContent>
                  <DialogContentText style={{ textAlign: "center" }}>
                    <Typography>
                      Are you sure, Do you want to submit the test?
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.green}>
                            {done.length}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText>Answered</ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.orange}>
                            {warning.length}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText>Marked</ListItemText>
                      </ListItem>
                    </List>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    autoFocus
                    onClick={handleSubmitAnswers}
                    color="primary"
                    variant="outlined"
                  >
                    Yes
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    No
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default QuestionView;
