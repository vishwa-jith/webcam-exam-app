import React, { useState } from "react";
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
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Box from "@material-ui/core/Box";
import { CardActionArea } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  assign: {
    color: theme.palette.warning.main,
  },
  assdone: {
    color: theme.palette.success.main,
  },
  root1: {
    color: "white",
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

const TestTopicView = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [done, setdone] = useState(true);
  const markscored = 60;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const history = useHistory();

  return (
    <div>
      <Box p={5}>
        <Grid container xs={12} justify="flex-end" alignItems="flex-start">
          <Box px={2}>
            <Grid item>
              <Button variant="contained" color="secondary">
                View TimeTable
              </Button>
            </Grid>
          </Box>
          <Box px={2}>
            <Grid item>
              <Button variant="contained" color="primary">
                Contact Exam Cell
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Box>
      <Box m={5}>
        <div className={classes.root1}>
          <Grid
            container
            spacing={10}
            justify="space-evenly"
            alignItems="baseline"
          >
            <Grid item xs={12} lg={3}>
              <Card className={classes.root}>
                <Box p={1}>
                  <CardHeader
                    avatar={
                      <>
                        {done ? (
                          <Box mt={1}>
                            <AssignmentTurnedInIcon
                              className={classes.assdone}
                            />
                          </Box>
                        ) : (
                          <AssignmentIcon className={classes.assign} />
                        )}
                      </>
                    }
                    title="TEST - 1"
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                  />
                  <CardActionArea component={Link} to="/test">
                    <Box p={3}>
                      <Typography variant="h5" className={classes.fullfontcard}>
                        Mathematics
                      </Typography>
                      {!done ? (
                        <Box px={2}>
                          <Link style={{ textDecoration: "none" }}>
                            <Typography
                              style={{
                                textAlign: "right",
                                color: "red",
                                fontWeight: "bolder",
                              }}
                            >
                              Take Test
                            </Typography>
                          </Link>
                        </Box>
                      ) : (
                        <></>
                      )}

                      <Box py={2}>
                        <Typography
                          variant="p"
                          className={classes.commontextcard}
                        >
                          Total Marks: 100
                        </Typography>
                        <br></br>
                        <Typography
                          variant="p"
                          className={classes.commontextcard}
                        >
                          Pass Mark: 35
                        </Typography>
                      </Box>
                    </Box>
                  </CardActionArea>
                  <CardActions>
                    <Grid container>
                      <Grid item xs={8}>
                        {done ? (
                          <CardContent>
                            <Typography
                              variant="h6"
                              style={{
                                fontWeight: "bolder",
                                color: markscored >= 35 ? "green" : "red",
                              }}
                            >
                              {markscored}/100
                            </Typography>
                          </CardContent>
                        ) : (
                          <CardContent>
                            <Typography
                              variant="p"
                              style={{ fontWeight: "bolder" }}
                            >
                              Not Completed
                            </Typography>
                          </CardContent>
                        )}
                      </Grid>
                      <Grid item xs={4} style={{ textAlign: "right" }}>
                        <IconButton
                          className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                          })}
                          onClick={handleExpandClick}
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Box>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Description:</Typography>
                    <Typography paragraph>
                      Mathematics exam is based on your math knowledge
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
};
export default TestTopicView;
