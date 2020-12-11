import React from "react";
import {
  Typography,
  Paper,
  Avatar,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import {
  red,
  green,
  indigo,
  orange,
  deepOrange,
} from "@material-ui/core/colors";
import WarningIcon from "@material-ui/icons/Warning";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import UpdateIcon from "@material-ui/icons/Update";
import MoodIcon from "@material-ui/icons/Mood";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import ScoreIcon from "@material-ui/icons/Score";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  avatar: {
    color: "white",
    backgroundColor: indigo[500],
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

const TestInfoView = ({ testDetails, testInfo }) => {
  //Const
  const classes = useStyles();

  return (
    <>
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
    </>
  );
};
export default TestInfoView;
