import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Box from "@material-ui/core/Box";
import { CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";
import AssessmentRoundedIcon from "@material-ui/icons/AssessmentRounded";
import Divider from "@material-ui/core/Divider";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import TimerIcon from "@material-ui/icons/Timer";
import DescriptionIcon from "@material-ui/icons/Description";
import ErrorIcon from "@material-ui/icons/Error";
import ReceiptIcon from "@material-ui/icons/Receipt";

const useStyles = makeStyles((theme) => ({
  assign: {
    color: theme.palette.warning.main,
  },
  assdone: {
    color: theme.palette.success.main,
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
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  fortimer: {
    color: theme.palette.grey[600],
    fontWeight: "bolder",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
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
}) {
  console.log("hello" + JSON.stringify(testinfo));
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid item xs={12} md={3}>
      <Box py={3}>
        <Card className={classes.root} elevation={2}>
          <Box p={1}>
            <CardHeader
              avatar={
                <>
                  {testinfo ? (
                    <Box mt={1}>
                      <AssignmentTurnedInIcon className={classes.assdone} />
                    </Box>
                  ) : (
                    <AssignmentIcon className={classes.assign} />
                  )}
                </>
              }
              title={testtopicdata.test_name}
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
            <CardActionArea
              component={Link}
              // to={!testtopicdata.is_test_taken ? `/test/${testtopicdata._id}` : "#"}
              onClick={handleClickOpen}
            >
              <Box p={3}>
                <Typography variant="h5" className={classes.fullfontcard}>
                  {testtopicdata.topic}
                </Typography>
                <Box pt={3}>
                  {!expandedList[topic_no] &&
                    (!testinfo ? (
                      <Box>
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
                      </Box>
                    ) : (
                      <Box>
                        <Typography
                          style={{
                            color: "green",
                            fontWeight: "bolder",
                            float: "left",
                          }}
                        >
                          Completed
                        </Typography>
                      </Box>
                    ))}
                  {!expandedList[topic_no] && (
                    <Box>
                      <Typography className={classes.fortimer}>
                        <TimerIcon />
                        <Box pl={1}>{testtopicdata.duration_in_min} min</Box>
                      </Typography>
                      <Box py={2}>
                        <Typography
                          variant="p"
                          className={classes.commontextcard}
                        >
                          Total Marks {testtopicdata.total_marks}
                        </Typography>
                        <br></br>
                        <Typography
                          variant="p"
                          className={classes.commontextcard}
                        >
                          Pass Mark{" "}
                          {Math.round(0.35 * testtopicdata.total_marks)}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            </CardActionArea>
            <CardActions>
              <Grid container>
                <Grid item xs={8}>
                  {testinfo ? (
                    <CardContent>
                      <Typography
                        variant="p"
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
                    </CardContent>
                  ) : (
                    <CardContent>
                      <Typography
                        variant="p"
                        style={{ fontWeight: "bolder", fontSize: "1.2em" }}
                      >
                        Not Completed
                      </Typography>
                    </CardContent>
                  )}
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
          </Box>
          <Collapse in={expandedList[topic_no]} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description</Typography>
              <Typography paragraph>{testtopicdata.description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
        {open && (
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Box m={5}>
              <Grid container style={{ height: "90vh" }}>
                <Grid item xs>
                  <Box my={3}>
                    <Typography
                      color="primary"
                      style={{ fontWeight: "bold", textTransform: "uppercase" }}
                    >
                      <Box pr={1} style={{ float: "left" }}>
                        <AssessmentRoundedIcon />
                      </Box>
                      Test Instructions
                    </Typography>
                  </Box>
                  <List component="nav">
                    <ListItem>
                      <ListItemIcon>
                        <AssignmentIcon />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography>
                          {"Test Name - " + testtopicdata.test_name}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LibraryBooksIcon />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography>
                          Exam Name - {testtopicdata.topic}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <TimerIcon />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography>
                          Duration - {testtopicdata.duration_in_min} min
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ReceiptIcon />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography>
                          Total Marks - {testtopicdata.total_marks}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ErrorIcon />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography>
                          Pass Mark -{" "}
                          {Math.round(0.35 * testtopicdata.total_marks)}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <DescriptionIcon />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography>
                          Description - {testtopicdata.description}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </List>
                  <Box m={3}>
                    <Typography style={{ fontWeight: "bolder" }}>
                      Do you want to start the test?
                    </Typography>
                    <Box m={3}>
                      <Grid container justify="" alignItems="center">
                        <Grid item xs={6} md={1}>
                          <Box px={2} py={1}>
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={() => {
                                history.push(`/test/${testtopicdata._id}`);
                              }}
                            >
                              YES
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item xs={6} md={1}>
                          <Box px={2} py={1}>
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={handleClose}
                            >
                              NO
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Dialog>
        )}
      </Box>
    </Grid>
  );
};

export default TopicCardView;
