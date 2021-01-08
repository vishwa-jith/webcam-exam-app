import React from "react";
import { useHistory } from "react-router-dom";
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
  Button,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import TimerIcon from "@material-ui/icons/Timer";
import EventIcon from "@material-ui/icons/Event";
import MoodIcon from "@material-ui/icons/Mood";
import TabIcon from "@material-ui/icons/Tab";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import UpdateIcon from "@material-ui/icons/Update";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Skeleton from "@material-ui/lab/Skeleton";
import CameraFrontIcon from "@material-ui/icons/CameraFront";
import {
  red,
  green,
  orange,
  deepOrange,
  grey,
  teal,
} from "@material-ui/core/colors";
import { getTime, getTimer } from "../../../../components/utils";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  avatar: {
    color: teal[500],
    backgroundColor: grey[100],
  },
  link: {
    display: "flex",
  },
}));

const TestDetailsView = ({ testDetails }) => {
  const classes = useStyles();
  const history = useHistory();
  var time = testDetails
    ? getTime(
        getTimer(new Date(testDetails.end_time).toTimeString().split(":")) -
          getTimer(new Date(testDetails.start_time).toTimeString().split(":"))
      ).split(":")
    : 0;
  return (
    <>
      <Grid item xs={12} md={10}>
        <Box m={1}>
          <Paper>
            <Grid container alignItems="center">
              <Button
                onClick={() => history.goBack()}
                size="large"
                style={{ height: "50px" }}
              >
                <ArrowBackIcon />
              </Button>
              <Box px={1}>
                <Typography variant="h6" color="textSecondary">
                  Test Report
                </Typography>
              </Box>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box mx={1} m={1}>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Avatar className={classes.avatar}>
                      <AssignmentIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Test Name</Typography>
                  </TableCell>
                  <TableCell>
                    {testDetails ? (
                      <Typography>{testDetails.test_name}</Typography>
                    ) : (
                      <Skeleton animation="wave" height={15} width={125} />
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar className={classes.avatar}>
                      <LibraryBooksIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Test Topic</Typography>
                  </TableCell>
                  <TableCell>
                    {testDetails ? (
                      <Typography>{testDetails.topic}</Typography>
                    ) : (
                      <Skeleton animation="wave" height={15} width={125} />
                    )}
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
                  <TableCell>
                    {testDetails ? (
                      <Typography>{testDetails.duration_in_min} min</Typography>
                    ) : (
                      <Skeleton animation="wave" height={15} width={125} />
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar className={classes.avatar}>
                      <AssessmentIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Total Marks</Typography>
                  </TableCell>
                  <TableCell>
                    {testDetails ? (
                      <Typography>{testDetails.total_marks}</Typography>
                    ) : (
                      <Skeleton animation="wave" height={15} width={125} />
                    )}
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
                  <TableCell>
                    {testDetails ? (
                      <Typography>
                        {new Date(testDetails.start_time).toDateString()}
                      </Typography>
                    ) : (
                      <Skeleton animation="wave" height={15} width={125} />
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar className={classes.avatar}>
                      <AlarmOnIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Test Start Time</Typography>
                  </TableCell>
                  <TableCell>
                    {testDetails ? (
                      <Typography>
                        {new Date(testDetails.start_time).toLocaleTimeString()}
                      </Typography>
                    ) : (
                      <Skeleton animation="wave" height={15} width={125} />
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box mx={1} m={1}>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Avatar className={classes.avatar}>
                      {testDetails && testDetails.is_fraudulant ? (
                        <MoodBadIcon />
                      ) : (
                        <MoodIcon />
                      )}
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Status</Typography>
                  </TableCell>
                  <TableCell>
                    {testDetails ? (
                      <Typography
                        style={{
                          color: testDetails.is_fraudulant
                            ? deepOrange[500]
                            : green[500],
                        }}
                      >
                        {testDetails.is_fraudulant ? "Violation" : "Normal"}
                      </Typography>
                    ) : (
                      <Skeleton animation="wave" height={15} width={125} />
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar className={classes.avatar}>
                      <EmojiEventsIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Marks Scored</Typography>
                  </TableCell>
                  <TableCell>
                    {testDetails && testDetails ? (
                      <Typography
                        style={{
                          color:
                            (testDetails.score / testDetails.total_marks) *
                              100 >
                            40
                              ? green[500]
                              : red[500],
                        }}
                      >
                        {testDetails.score.toFixed(2)}/{testDetails.total_marks}
                      </Typography>
                    ) : (
                      <Skeleton animation="wave" height={15} width={125} />
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar className={classes.avatar}>
                      <CameraFrontIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Camera Warnings</Typography>
                  </TableCell>
                  <TableCell>
                    {testDetails ? (
                      <Typography style={{ color: orange[500] }}>
                        {testDetails.no_of_cam_warning}
                      </Typography>
                    ) : (
                      <Skeleton animation="wave" height={15} width={125} />
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar className={classes.avatar}>
                      <TabIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>Tab Switch Warnings</Typography>
                  </TableCell>
                  <TableCell>
                    {testDetails ? (
                      <Typography style={{ color: orange[500] }}>
                        {testDetails.no_of_warning}
                      </Typography>
                    ) : (
                      <Skeleton animation="wave" height={15} width={125} />
                    )}
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
                  <TableCell>
                    {testDetails ? (
                      <Typography>
                        {`${parseInt(time[0]) * 60 + parseInt(time[1])}`} min
                      </Typography>
                    ) : (
                      <Skeleton animation="wave" height={15} width={125} />
                    )}
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
                  <TableCell>
                    {testDetails ? (
                      <Typography>
                        {new Date(testDetails.end_time).toLocaleTimeString()}
                      </Typography>
                    ) : (
                      <Skeleton animation="wave" height={15} width={125} />
                    )}
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
