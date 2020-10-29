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
import { Popover, List, ListItem, ListItemText } from "@material-ui/core";
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
    fontSize: "1.3em",
    textAlign: "left",
    color: theme.palette.primary.main,
  },
}));

const TopicCardView = function ({
  topic_no,
  testtopicdata,
  expandedList,
  handleExpandClick,
  anchorE1List,
  handleAnchorE1Click,
  handleAnchorE1Close,
}) {
  const classes = useStyles();
  return (
    <Grid item xs={12} lg={3}>
      <Card className={classes.root} elevation={2}>
        <Box p={1}>
          <CardHeader
            avatar={
              <>
                {testtopicdata.is_test_taken ? (
                  <Box mt={1}>
                    <AssignmentTurnedInIcon className={classes.assdone} />
                  </Box>
                ) : (
                  <AssignmentIcon className={classes.assign} />
                )}
              </>
            }
            title="TEST - 1"
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
                <ListItemText>Mark as Complete</ListItemText>
              </ListItem>
            </List>
          </Popover>
          <CardActionArea
            component={Link}
            to={!testtopicdata.is_test_taken ? "/test" : "#"}
          >
            <Box p={3}>
              <Typography variant="h5" className={classes.fullfontcard}>
                {testtopicdata.topic}
              </Typography>
              {!testtopicdata.is_test_taken ? (
                <Box>
                  <Typography
                    style={{
                      textAlign: "left",
                      color: "red",
                      fontWeight: "bolder",
                    }}
                  >
                    Take Test
                  </Typography>
                </Box>
              ) : (
                <Box>
                  <Typography style={{ color: "green", fontWeight: "bolder" }}>
                    Completed
                  </Typography>
                </Box>
              )}

              <Box py={2}>
                <Typography variant="p" className={classes.commontextcard}>
                  Total Marks: {testtopicdata.total_marks}
                </Typography>
                <br></br>
                <Typography variant="p" className={classes.commontextcard}>
                  Pass Mark: {Math.round(0.35 * testtopicdata.total_marks)}
                </Typography>
              </Box>
            </Box>
          </CardActionArea>
          <CardActions>
            <Grid container>
              <Grid item xs={8}>
                {testtopicdata.is_test_taken ? (
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
                      {testtopicdata.score}/{testtopicdata.total_marks}
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
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>{testtopicdata.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default TopicCardView;
