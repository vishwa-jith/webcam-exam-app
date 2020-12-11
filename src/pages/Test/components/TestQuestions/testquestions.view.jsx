import React from "react";
import {
  Grid,
  Tabs,
  Tab,
  Avatar,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import LinkOffIcon from "@material-ui/icons/LinkOff";
import LinkIcon from "@material-ui/icons/Link";
import { deepOrange, green, deepPurple } from "@material-ui/core/colors";

//Components
import Question from "../Question";

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
}));

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

const TestQuestionsView = ({
  open,
  value,
  done,
  warning,
  question_no,
  answers,
  questions,
  handleClickOpen,
  handleSubmitAnswers,
  handleWarning,
  handleAnswers,
  handleQuestion,
  handleChange,
  handleClose,
}) => {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
};
export default TestQuestionsView;
