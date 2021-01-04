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
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AssignmentIcon from "@material-ui/icons/Assignment";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import { grey, indigo } from "@material-ui/core/colors";
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
            <Paper
              elevation={3}
              style={{
                backgroundColor: grey[50],
              }}
            >
              <Box p={1}>
                <Webcam
                  audio={false}
                  style={{
                    display:
                      runCamera && !webcamRef.current.getScreenshot() && "none",
                    width: "100%",
                    height: "75vh",
                    backgroundColor: "black",
                  }}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />
                {runCamera && !webcamRef.current.getScreenshot() && (
                  <div
                    style={{
                      width: "100%",
                      height: "75vh",
                      backgroundColor: "black",
                    }}
                  ></div>
                )}
              </Box>
            </Paper>
          </Grid>
          <Grid
            container
            item
            md={8}
            xs={11}
            justify="space-between"
            style={{ position: "absolute" }}
          >
            <Button
              variant="contained"
              disableElevation
              disableRipple
              style={{ backgroundColor: grey[50], color: indigo[500] }}
              startIcon={<ArrowBackIcon />}
              endIcon={<AssessmentIcon />}
              onClick={() => history.goBack()}
            >
              Test Topic
            </Button>
            <Typography
              variant="h6"
              style={{ color: "white", alignItems: "center", display: "flex" }}
            >
              {runCamera && !webcamRef.current.getScreenshot() && (
                <>
                  <VideocamOffIcon style={{ fontSize: "30px" }} />
                  Camera might start once you allow access.
                </>
              )}
            </Typography>
            <Button
              disabled={runCamera && !webcamRef.current.getScreenshot()}
              variant="contained"
              disableElevation
              disableRipple
              style={{ backgroundColor: grey[50], color: indigo[500] }}
              onClick={handleCloseStartDialog}
              startIcon={<AssignmentIcon />}
              endIcon={<ArrowForwardIcon />}
            >
              Enter Test
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};
export default StartDialogView;
