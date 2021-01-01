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
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { baseUrl } from "../../../../components/constants";
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

const StartDialogView = ({
  openStartDialog,
  webcamRef,
  runCamera,
  handleCloseStartDialog,
  videoConstraints,
}) => {
  const classes = useStyles();
  return (
    <>
      <Dialog
        fullScreen
        open={openStartDialog}
        onClose={handleCloseStartDialog}
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
            <Paper elevation={3}>
              <Box p={1}>
                <Webcam
                  audio={false}
                  style={{
                    display:
                      runCamera && !webcamRef.current.getScreenshot() && "none",
                    width: "100%",
                    height: "75vh",
                  }}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />
                {runCamera && !webcamRef.current.getScreenshot() && (
                  <div
                    style={{
                      width: "100%",
                      height: "75vh",
                      backgroundImage: `url( ${baseUrl}images/camera_error.png )`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                    }}
                  ></div>
                )}
              </Box>
            </Paper>
          </Grid>
          <Grid container item md={8} xs={11} justify="space-between">
            <Button
              variant="contained"
              disableElevation
              color="primary"
              startIcon={<ArrowBackIcon />}
              endIcon={<AssessmentIcon />}
            >
              Test Topic
            </Button>
            <Button
              disabled={runCamera && !webcamRef.current.getScreenshot()}
              variant="contained"
              disableElevation
              color="primary"
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
