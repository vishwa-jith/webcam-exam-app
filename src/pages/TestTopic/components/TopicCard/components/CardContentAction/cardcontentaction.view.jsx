import React from "react";
import clsx from "clsx";
import { Typography, IconButton, CardContent, Grid } from "@material-ui/core";

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
  topic_no,
  testinfo,
  expandedList,
  testtopicdata,
  handleExpandClick,
}) => {
  //Const
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={8}>
          <CardContent>
            {testinfo ? (
              testinfo.is_fraudulant ? (
                <Typography
                  variant="subtitle1"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "1.2em",
                    color: deepOrange[500],
                  }}
                >
                  {new Date(testtopicdata.start_time).toLocaleTimeString()}
                </Typography>
              ) : !testinfo.end_time ? (
                <Typography
                  variant="subtitle1"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "1.2em",
                    color: orange[500],
                  }}
                >
                  {new Date(testtopicdata.start_time).toLocaleTimeString()}
                </Typography>
              ) : (
                <Typography
                  variant="subtitle1"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "1.2em",
                    color:
                      testtopicdata.score >= 0.35 * testtopicdata.total_marks
                        ? orange[500]
                        : green[500],
                  }}
                >
                  {`${testinfo.score.toFixed(2)}/${testtopicdata.total_marks}`}
                </Typography>
              )
            ) : (
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: "bolder",
                  fontSize: "1.2em",
                  color: teal[500],
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
    </>
  );
};
export default CardContentActionView;
