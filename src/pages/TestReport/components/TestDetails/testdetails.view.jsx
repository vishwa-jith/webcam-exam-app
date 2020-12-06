import React from "react";
import {
  Grid,
  Typography,
  Paper,
  Box,
  Avatar,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Breadcrumbs,
  Link,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import TimerIcon from "@material-ui/icons/Timer";
import EventIcon from "@material-ui/icons/Event";
import MoodIcon from "@material-ui/icons/Mood";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import ScoreIcon from "@material-ui/icons/Score";
import { makeStyles } from "@material-ui/core/styles";
import WarningIcon from "@material-ui/icons/Warning";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import UpdateIcon from "@material-ui/icons/Update";
import AssessmentIcon from "@material-ui/icons/Assessment";
import {
  red,
  green,
  blueGrey,
  orange,
  deepOrange,
  teal,
} from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  avatar: {
    color: "white",
    backgroundColor: blueGrey["A700"],
  },
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const TestDetailsView = ({ testDetails, testInfo }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} md={10}>
        <Box m={2}>
          <Paper>
            <Box p={2}>
              <Breadcrumbs
                aria-label="breadcrumb"
                component={Paper}
                elevation={0}
              >
                <Link
                  color="inherit"
                  component={RouterLink}
                  to="/"
                  className={classes.link}
                >
                  <AssessmentIcon className={classes.icon} />
                  Home
                </Link>
                <Typography color="textPrimary" className={classes.link}>
                  <AssignmentIcon className={classes.icon} />
                  Test Report
                </Typography>
              </Breadcrumbs>
            </Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box m={2}>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Avatar
                      className={classes.avatar}
                      style={{ backgroundColor: teal[500] }}
                    >
                      <AssignmentIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Test Name</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>{testDetails.test_name}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar
                      className={classes.avatar}
                      style={{ backgroundColor: teal[500] }}
                    >
                      <LibraryBooksIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Test Topic</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>{testDetails.topic}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar className={classes.avatar}>
                      <TimerIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Test Duration</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>{testDetails.duration_in_min} min</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar
                      className={classes.avatar}
                      style={{ backgroundColor: green[500] }}
                    >
                      <AssessmentIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Total Marks</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>{testDetails.total_marks}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar className={classes.avatar}>
                      <EventIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Test Date</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>
                      {new Date(testInfo.createdAt).toDateString()}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box m={2}>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Avatar
                      className={classes.avatar}
                      style={{
                        backgroundColor: testInfo.is_fraudulant
                          ? deepOrange[500]
                          : green[500],
                      }}
                    >
                      {testInfo.is_fraudulant ? <MoodBadIcon /> : <MoodIcon />}
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Status</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>
                      {testInfo.is_fraudulant ? "Violation" : "Normal"}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar
                      className={classes.avatar}
                      style={{
                        backgroundColor:
                          (testInfo.score / testDetails.total_marks) * 100 > 40
                            ? green[500]
                            : red[500],
                      }}
                    >
                      <ScoreIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Marks Scored</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>
                      {testInfo.score.toFixed(2)}/{testDetails.total_marks}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar
                      className={classes.avatar}
                      style={{ backgroundColor: orange[500] }}
                    >
                      <WarningIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Warnings</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>{testInfo.no_of_warning}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar className={classes.avatar}>
                      <UpdateIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Time Taken</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>{testInfo.test_duration} min</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar className={classes.avatar}>
                      <AlarmOnIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Test Completion Time</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>
                      {new Date(testInfo.createdAt).toLocaleTimeString()}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </>
  );
};
export default TestDetailsView;
