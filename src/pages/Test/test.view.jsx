import React from "react";
import Webcam from "react-webcam";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tabs,
  Tab,
  Avatar,
  Button,
} from "@material-ui/core";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import MoodIcon from "@material-ui/icons/Mood";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import Question from "./components/Question";
import { deepOrange, green, deepPurple } from "@material-ui/core/colors";
import TimerIcon from "@material-ui/icons/Timer";
import LinkOffIcon from "@material-ui/icons/LinkOff";
import LinkIcon from "@material-ui/icons/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "60vh",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  orange: {
    color: "white",
    backgroundColor: deepOrange[500],
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
    "&:disabled": {
      backgroundColor: theme.palette.error.light,
    },
  },
  green: {
    color: "white",
    backgroundColor: green[500],
  },
  purple: {
    color: "white",
    backgroundColor: deepPurple[500],
  },
  timer: {
    color: theme.palette.primary.main,
    fontWeight: "bolder",
  },
}));
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%", height: "100%" }}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const TestView = ({
  webcamRef,
  src,
  open,
  questions,
  question_no,
  handleAnswers,
  answers,
  handleQuestion,
  handleSubmitAnswers,
  handleCameraVision,
  intelligence,
  timer,
  value,
  handleChange,
  uiType,
  handleUiChange,
  done,
  warning,
  handleWarning,
  handleClickOpen,
  handleClose,
}) => {
  const classes = useStyles();
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
        <Box m={2}>
          <Grid item>
            <Paper elevation={3}>
              <Box>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <TimerIcon className={classes.timer} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography className={classes.timer} variant="h5">{`${
                        parseInt(parseInt(timer / 60) / 60) < 10 ? "0" : ""
                      }${parseInt(parseInt(timer / 60) / 60)} : ${
                        parseInt(timer / 60) % 60 < 10 ? "0" : ""
                      }${parseInt(timer / 60) % 60} : ${
                        timer % 60 < 10 ? "0" : ""
                      }${timer % 60}`}</Typography>
                    </ListItemText>
                  </ListItem>
                </List>
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
        <>
          {uiType ? (
            <div className={classes.root}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                {questions.map((data, index) => {
                  return (
                    <Tab
                      label={
                        <Avatar
                          className={
                            warning.includes(index)
                              ? classes.orange
                              : done.includes(index)
                              ? classes.green
                              : classes.purple
                          }
                        >{`${index + 1}`}</Avatar>
                      }
                      {...a11yProps(index)}
                    />
                  );
                })}
              </Tabs>
              {questions.map((data, index) => {
                return (
                  <TabPanel value={value} index={index}>
                    <Grid container justify="flex-end">
                      <Button
                        variant="contained"
                        classes={{ root: classes.orange }}
                        size="small"
                        onClick={handleWarning}
                        endIcon={
                          warning.includes(question_no) ? (
                            <LinkOffIcon />
                          ) : (
                            <LinkIcon />
                          )
                        }
                      >
                        {warning.includes(question_no)
                          ? "Remove Mark"
                          : "Mark as Later"}
                      </Button>
                    </Grid>
                    <Question
                      open={open}
                      questions={questions}
                      question_no={question_no}
                      handleAnswers={handleAnswers}
                      answers={answers}
                      handleQuestion={handleQuestion}
                      handleClickOpen={handleClickOpen}
                      handleSubmitAnswers={handleSubmitAnswers}
                      handleClose={handleClose}
                      done={done}
                      warning={warning}
                    />
                  </TabPanel>
                );
              })}
            </div>
          ) : (
            <Grid container justify="center" alignItems="center">
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
                      <Question
                        open={open}
                        questions={questions}
                        question_no={question_no}
                        handleAnswers={handleAnswers}
                        answers={answers}
                        handleQuestion={handleQuestion}
                        handleClickOpen={handleClickOpen}
                        handleSubmitAnswers={handleSubmitAnswers}
                        handleClose={handleClose}
                        done={done}
                        warning={warning}
                      />
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          )}
        </>
      )}
    </>
  );
};
export default TestView;
