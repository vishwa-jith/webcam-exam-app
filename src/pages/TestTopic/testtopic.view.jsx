import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TopicCard from "./components";

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
            <TopicCard
              done={done}
              markscored={markscored}
              expanded={expanded}
              handleExpandClick={handleExpandClick}
            />
          </Grid>
        </div>
      </Box>
    </div>
  );
};
export default TestTopicView;
