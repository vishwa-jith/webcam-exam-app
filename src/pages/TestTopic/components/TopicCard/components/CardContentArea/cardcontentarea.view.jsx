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
import ErrorIcon from "@material-ui/icons/Error";
import ReceiptIcon from "@material-ui/icons/Receipt";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  fullfontcard: {
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

const CardContentAreaView = ({
  testtopicdata,
  expandedList,
  topic_no,
  testinfo,
}) => {
  const classes = useStyles();
  return (
    <>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="h6" className={classes.fullfontcard}>
              {testtopicdata.topic}
            </Typography>
          </ListItemText>
        </ListItem>
        {!expandedList[topic_no] && (
          <>
            <ListItem>
              <ListItemIcon>
                {!testinfo ? (
                  <HelpIcon
                    style={{
                      textAlign: "left",
                      color: "red",
                      fontWeight: "bolder",
                      float: "left",
                    }}
                  />
                ) : (
                  <DoneIcon
                    style={{
                      textAlign: "left",
                      color: "green",
                      fontWeight: "bolder",
                      float: "left",
                    }}
                  />
                )}
              </ListItemIcon>
              <ListItemText>
                {!testinfo ? (
                  <Typography
                    style={{
                      textAlign: "left",
                      color: "red",
                      fontWeight: "bolder",
                      float: "left",
                    }}
                  >
                    Take Test
                  </Typography>
                ) : (
                  <Typography
                    style={{
                      textAlign: "left",
                      color: "green",
                      fontWeight: "bolder",
                      float: "left",
                    }}
                  >
                    Completed
                  </Typography>
                )}
              </ListItemText>
              <ListItemSecondaryAction>
                <ListItem>
                  <ListItemIcon>
                    <TimerIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography className={classes.fortimer}>
                      {testtopicdata.duration_in_min} min
                    </Typography>
                  </ListItemText>
                </ListItem>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ReceiptIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  className={classes.commontextcard}
                >
                  Total Marks {testtopicdata.total_marks}
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ErrorIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="subtitle1"
                  className={classes.commontextcard}
                >
                  Pass Mark {Math.round(0.35 * testtopicdata.total_marks)}
                </Typography>
              </ListItemText>
            </ListItem>
          </>
        )}
      </List>
    </>
  );
};
export default CardContentAreaView;
