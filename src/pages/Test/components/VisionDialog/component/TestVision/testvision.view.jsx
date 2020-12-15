import React from "react";
import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Link,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { baseUrl } from "../../../../../../components/constants";
import { deepOrange } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    fontSize:
      "calc( 25px + ( 50 - 25 ) * ( ( 100vw - 300px ) / ( 1600 - 300 ) ) )",
    backgroundColor: deepOrange[500],
  },
  heading: {
    fontSize:
      "calc( 25px + ( 50 - 25 ) * ( ( 100vw - 300px ) / ( 1600 - 300 ) ) )",
  },
  note: {
    color: deepOrange[500],
    fontSize:
      "calc( 15px + ( 20 - 15 ) * ( ( 100vw - 300px ) / ( 1600 - 300 ) ) )",
  },
}));

const TestVisionView = ({
  openDialog,
  testInfo,
  handleClickOpenDialog,
  handleCloseDialog,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container flexDirection="column">
        <Grid item>
          <img
            style={{ height: "90vh" }}
            src={`${baseUrl}images/visionWarn.jpg`}
            alt="Vision Warn"
          />
        </Grid>
        <Grid item>
          <Box m={4}>
            <Typography
              className={classes.heading}
              variant="h6"
              color="secondary"
            >
              Do Not Switch Tab during Examination
            </Typography>
          </Box>
          <Box mx={4}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.large}>
                    {5 - testInfo.no_of_warning}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <Typography
                    className={classes.heading}
                    style={{ color: deepOrange[500], marginLeft: "5px" }}
                  >
                    warning's left
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography
                    variant="subtitle2"
                    className={classes.note}
                    style={{ color: deepOrange[500] }}
                  >
                    The candidate will not be able to take test if the warning's
                    gets exhausted.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="subtitle2" className={classes.note}>
                    Continous tab switch can lead to early test termination
                    stage.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="subtitle2" className={classes.note}>
                    Switching of Tab is considered as a fraudulant activity.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="subtitle2" className={classes.note}>
                    Candidate activity is being recorded periodicaly during
                    examination.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="subtitle2" className={classes.note}>
                    <Link
                      onClick={handleCloseDialog}
                      style={{
                        cursor: "pointer",
                        fontSize: "bold",
                        color: "#555",
                      }}
                    >
                      {"Click here"}
                    </Link>
                    {" to continue test."}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default TestVisionView;
