import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Typography,
} from "@material-ui/core";
import TimerIcon from "@material-ui/icons/Timer";
import HelpIcon from "@material-ui/icons/Help";
import DoneIcon from "@material-ui/icons/Done";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import WarningIcon from "@material-ui/icons/Warning";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { orange, green, teal, deepOrange } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  test_name: {
    fontSize:
      "calc( 15px + ( 20 - 15 ) * ( ( 100vw - 300px ) / ( 1600 - 300 ) ) )",
    textTransform: "uppercase",
    color: "#555",
  },
  commontextcard: {
    fontSize: "1.2em",
    textAlign: "left",
    color: theme.palette.grey[800],
  },
  fortimer: {
    color: theme.palette.grey[600],
    fontWeight: "bolder",
  },
}));

const CardContentAreaView = ({ testtopicdata }) => {
  const classes = useStyles();
  return (
    <>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="h6" className={classes.test_name}>
              {testtopicdata.topic}
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            {testtopicdata.is_fraudulant ? (
              <WarningIcon
                style={{
                  textAlign: "left",
                  color: deepOrange[500],
                  fontWeight: "bolder",
                  float: "left",
                }}
              />
            ) : !testtopicdata.end_time && testtopicdata.start_time ? (
              <HelpIcon
                style={{
                  textAlign: "left",
                  color: orange[500],
                  fontWeight: "bolder",
                  float: "left",
                }}
              />
            ) : testtopicdata.end_time ? (
              <DoneIcon
                style={{
                  textAlign: "left",
                  color: green[500],
                  fontWeight: "bolder",
                  float: "left",
                }}
              />
            ) : (
              <MenuBookIcon
                style={{
                  textAlign: "left",
                  color: teal[500],
                  fontWeight: "bolder",
                  float: "left",
                }}
              />
            )}
          </ListItemIcon>
          <ListItemText>
            <Typography
              style={{
                textAlign: "left",
                color: testtopicdata.is_fraudulant
                  ? deepOrange[500]
                  : !testtopicdata.end_time && testtopicdata.start_time
                  ? orange[500]
                  : testtopicdata.end_time
                  ? green[500]
                  : teal[500],
                fontWeight: "bolder",
                float: "left",
              }}
            >
              {testtopicdata.is_fraudulant
                ? "Violation"
                : !testtopicdata.end_time && testtopicdata.start_time
                ? "Resume"
                : testtopicdata.end_time
                ? "Completed"
                : "Take Test"}
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <ListItem>
              <ListItemIcon>
                <ErrorOutlineIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography className={classes.fortimer}>
                  {`${
                    testtopicdata.no_of_warning
                      ? testtopicdata.no_of_warning
                      : 0
                  } / 5`}
                </Typography>
              </ListItemText>
            </ListItem>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RateReviewIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="subtitle1" className={classes.commontextcard}>
              Total Marks {testtopicdata.total_marks}
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TimerIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="subtitle1" className={classes.commontextcard}>
              {testtopicdata.duration_in_min} min
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
};
export default CardContentAreaView;
