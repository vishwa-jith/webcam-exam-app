import React from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Box,
  Button,
  Slide,
  Tooltip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import { baseUrl } from "../../../../components/constants";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AssignmentIcon from "@material-ui/icons/Assignment";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import CameraIcon from "@material-ui/icons/Camera";
import { useHistory } from "react-router-dom";
import Webcam from "react-webcam";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const StartDialogView = ({
  openStartDialog,
  webcamRef,
  runCamera,
  handleCloseStartDialog,
  videoConstraints,
  names,
}) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <Dialog
        fullScreen
        open={openStartDialog}
        onClose={handleCloseStartDialog}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Exam App
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: "100vh" }}
        >
          <Grid item md={8} xs={12}>
            <Webcam
              audio={false}
              style={{
                display:
                  runCamera && !webcamRef.current.getScreenshot() && "none",
                width: "50%",
                height: "50vh",
                backgroundColor: "black",
              }}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
            {runCamera && !webcamRef.current.getScreenshot() && (
              <Grid container>
                <Grid container item md={6} spacing={1}>
                  <Paper
                    style={{
                      backgroundColor: "black",
                      width: "100%",
                      height: "50vh",
                      backgroundImage: `url( ${baseUrl}images/upload/${names._id}-profile.jpg )`,
                      cursor: "pointer",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <Box p={1}>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <Avatar
                              style={{
                                fontSize: "30px",
                                backgroundColor: indigo[500],
                              }}
                            >
                              <CameraIcon />
                            </Avatar>
                          </ListItemIcon>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              style={{
                                color: "white",
                              }}
                            >
                              Position your frontal face on camera.
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Box>
                  </Paper>
                </Grid>
                <Grid container item md={6} spacing={1}>
                  <Paper
                    style={{
                      backgroundColor: "black",
                      width: "100%",
                      height: "50vh",
                      cursor: "pointer",
                    }}
                  >
                    <Box p={1}>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <Avatar
                              style={{
                                fontSize: "30px",
                                backgroundColor: indigo[500],
                              }}
                            >
                              <VideocamOffIcon />
                            </Avatar>
                          </ListItemIcon>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              style={{
                                color: "white",
                              }}
                            >
                              Camera might start once you allow access.
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid container item md={8} xs={11} justify="space-between">
            <Tooltip title="Test Topic" arrow>
              <Button
                variant="contained"
                disableElevation
                disableRipple
                color="primary"
                size="small"
                startIcon={<ArrowBackIcon />}
                endIcon={<AssessmentIcon />}
                onClick={() => history.goBack()}
              >
                Test Topic
              </Button>
            </Tooltip>
            <Tooltip title="Enter Test" arrow>
              <Button
                disabled={runCamera && !webcamRef.current.getScreenshot()}
                variant="contained"
                disableElevation
                disableRipple
                color="primary"
                size="small"
                onClick={handleCloseStartDialog}
                startIcon={<AssignmentIcon />}
                endIcon={<ArrowForwardIcon />}
              >
                Enter Test
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};
export default StartDialogView;
