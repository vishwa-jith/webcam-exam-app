import React from "react";
import clsx from "clsx";
import {
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  CardActionArea,
  Box,
  Typography,
  IconButton,
  Collapse,
  CardActions,
  CardContent,
  CardHeader,
  Card,
  Grid,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import TimerIcon from "@material-ui/icons/Timer";
import HelpIcon from "@material-ui/icons/Help";
import DoneIcon from "@material-ui/icons/Done";
import ErrorIcon from "@material-ui/icons/Error";
import ReceiptIcon from "@material-ui/icons/Receipt";

import { makeStyles } from "@material-ui/core/styles";
import TopicDialog from "../TopicDialog";

const useStyles = makeStyles((theme) => ({
  assign: {
    backgroundColor: theme.palette.warning.main,
  },
  assdone: {
    backgroundColor: theme.palette.success.main,
  },
  root: {
    maxWidth: 345,
    textAlign: "left",
    background: theme.palette.background.paper,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  fullfontcard: {
    textTransform: "uppercase",
    color: "#555",
  },
  commontextcard: {
    fontSize: "1.2em",
    textAlign: "left",
    color: theme.palette.grey[800],
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  fortimer: {
    color: theme.palette.grey[600],
    fontWeight: "bolder",
  },
}));
const TopicCardView = function ({
  topic_no,
  testtopicdata,
  testinfo,
  expandedList,
  handleExpandClick,
  anchorE1List,
  handleAnchorE1Click,
  handleAnchorE1Close,
  Transition,
  open,
  handleClickOpen,
  handleClose,
}) {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={3}>
      <Box mx={1}>
        <Card className={classes.root} elevation={2}>
          <CardHeader
            avatar={
              <>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={testinfo ? classes.assdone : classes.assign}
                      >
                        {testinfo ? (
                          <AssignmentTurnedInIcon />
                        ) : (
                          <AssignmentIcon />
                        )}
                      </Avatar>
                    </ListItemAvatar>
                  </ListItem>
                </List>
              </>
            }
            title={testtopicdata.test_name}
            subheader={new Date(testtopicdata.start_time).toDateString()}
            action={
              <IconButton
                aria-describedby={topic_no}
                onClick={(event) => {
                  handleAnchorE1Click(event, topic_no);
                }}
              >
                <MoreVertIcon />
              </IconButton>
            }
          />
          <Popover
            id={topic_no}
            open={Boolean(anchorE1List[topic_no])}
            anchorEl={anchorE1List[topic_no]}
            onClose={handleAnchorE1Close}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            elevation={1}
          >
            <List dense>
              <ListItem dense button>
                <ListItemIcon>
                  <MarkunreadIcon />
                </ListItemIcon>
                <ListItemText>Mark as Complete</ListItemText>
              </ListItem>
            </List>
          </Popover>
          <CardActionArea onClick={handleClickOpen}>
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
          </CardActionArea>
          <CardActions>
            <Grid container>
              <Grid item xs={8}>
                <CardContent>
                  {testinfo ? (
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontWeight: "bolder",
                        fontSize: "1.2em",
                        color:
                          testtopicdata.score >=
                          0.35 * testtopicdata.total_marks
                            ? "green"
                            : "red",
                      }}
                    >
                      {testinfo.score}/{testtopicdata.total_marks}
                    </Typography>
                  ) : (
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontWeight: "bolder",
                        fontSize: "1.2em",
                        color: "grey",
                      }}
                    >
                      {new Date(testtopicdata.start_time).toLocaleTimeString()}
                    </Typography>
                  )}
                </CardContent>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expandedList[topic_no],
                  })}
                  onClick={() => handleExpandClick(topic_no)}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardActions>
          <Collapse in={expandedList[topic_no]} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description</Typography>
              <Typography paragraph>{testtopicdata.description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
        {open && (
          <TopicDialog
            testtopicdata={testtopicdata}
            Transition={Transition}
            open={open}
            handleClose={handleClose}
            testinfo={testinfo}
          />
        )}
      </Box>
    </Grid>
  );
};

export default TopicCardView;
