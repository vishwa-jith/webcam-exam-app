import React from "react";
import Webcam from "react-webcam";
import {
  Grid,
  Paper,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Stepper,
  Step,
  StepLabel,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import MoodIcon from "@material-ui/icons/Mood";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};
const TestView = ({
  webcamRef,
  src,
  questions,
  question_no,
  handleAnswers,
  answers,
  handleQuestion,
  handleSubmitAnswers,
  handleCameraVision,
  intelligence,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Box m={2}>
          <Grid item>
            <Paper>
              <Box m={1}>
                {intelligence && (
                  <>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          {intelligence.confidences ? (
                            <MoodIcon />
                          ) : (
                            <MoodBadIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText>
                          {intelligence.confidences
                            ? intelligence.confidences
                            : "NULL"}
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <SupervisedUserCircleIcon />
                        </ListItemIcon>
                        <ListItemText>{intelligence.no_of_faces}</ListItemText>
                      </ListItem>
                    </List>
                  </>
                )}
              </Box>
            </Paper>
          </Grid>
        </Box>
        <Grid item>
          <Paper>
            <Box m={1}>
              <Webcam
                audio={false}
                height={150}
                width={250}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                onUserMedia={handleCameraVision(true)}
                videoConstraints={videoConstraints}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {/* {src !== null && (
        <img src={src} alt="sample" width="100px" height="100px" />
      )} */}
      {questions.length > 0 && (
        <Grid container justify="center" alignItems="center" xs={12}>
          <Grid item md={10} xs={12}>
            <Box py={2}>
              <Paper>
                <Box py={2} mx={1}>
                  <Stepper activeStep={question_no} alternativeLabel>
                    {questions.map((data, index) => {
                      return (
                        <Step key={index}>
                          <StepLabel></StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                  <Grid container justify="center" alignItems="center" xs={12}>
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
                            >
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={
                                      answers.length !== question_no &&
                                      answers[question_no] === index
                                    }
                                    onChange={handleAnswers}
                                    name={`${index}`}
                                    id={`${index}`}
                                    color="primary"
                                  />
                                }
                                label={opt}
                              />
                            </ListItem>
                          );
                        })}
                      </List>
                      <Grid
                        container
                        justify="space-around"
                        alignItems="center"
                        xs={12}
                      >
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
                            >
                              Next
                            </Button>
                          )}
                          <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Test Submit</DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                <Typography>
                                  Are you sure, Do you want to submit the test?
                                </Typography>
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
                              <Button
                                onClick={handleClose}
                                color="primary"
                                autoFocus
                              >
                                No
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default TestView;
