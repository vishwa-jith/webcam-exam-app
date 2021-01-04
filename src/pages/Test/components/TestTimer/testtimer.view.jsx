import React from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import TimerIcon from "@material-ui/icons/Timer";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  timer: {
    color: theme.palette.primary.main,
    fontWeight: "bolder",
  },
}));

const TestTimerView = ({ timer }) => {
  const classes = useStyles();
  return (
    <>
      <Box m={2}>
        <Grid item>
          <Paper variant="outlined">
            <Box>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <TimerIcon className={classes.timer} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography className={classes.timer} variant="h5">{`${
                      parseInt(parseInt(timer / 60) / 60) < 10 ? "0" : ""
                    }${parseInt(parseInt(timer / 60) / 60)} : ${
                      parseInt(timer / 60) % 60 < 10 ? "0" : ""
                    }${parseInt(timer / 60) % 60} : ${
                      timer % 60 < 10 ? "0" : ""
                    }${timer % 60}`}</Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Paper>
        </Grid>
      </Box>
    </>
  );
};
export default TestTimerView;
