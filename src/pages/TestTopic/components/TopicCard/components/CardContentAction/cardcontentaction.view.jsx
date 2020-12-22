import React from "react";
import clsx from "clsx";
import {
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { orange, green, teal, deepOrange } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
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
}));

const CardContentActionView = ({
  expanded,
  testtopicdata,
  handleExpandClick,
}) => {
  //Const
  const classes = useStyles();

  return (
    <>
      <Grid container justify="space-between" alignItems="center">
        <List dense>
          <ListItem dense>
            <ListItemText>
              {testtopicdata.is_fraudulant ? (
                <Typography
                  variant="subtitle1"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "1.2em",
                    color: deepOrange[500],
                  }}
                >
                  {new Date(testtopicdata.test_start_time).toLocaleTimeString()}
                </Typography>
              ) : !testtopicdata.end_time && testtopicdata.start_time ? (
                <Typography
                  variant="subtitle1"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "1.2em",
                    color: orange[500],
                  }}
                >
                  {new Date(testtopicdata.test_start_time).toLocaleTimeString()}
                </Typography>
              ) : testtopicdata.end_time ? (
                <Typography
                  variant="subtitle1"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "1.2em",
                    color:
                      testtopicdata.score >= 0.35 * testtopicdata.total_marks
                        ? green[500]
                        : orange[500],
                  }}
                >
                  {`${testtopicdata.score.toFixed(2)}/${
                    testtopicdata.total_marks
                  }`}
                </Typography>
              ) : (
                <Typography
                  variant="subtitle1"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "1.2em",
                    color: teal[500],
                  }}
                >
                  {new Date(testtopicdata.test_start_time).toLocaleTimeString()}
                </Typography>
              )}
            </ListItemText>
          </ListItem>
        </List>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={() => handleExpandClick()}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Grid>
    </>
  );
};
export default CardContentActionView;
