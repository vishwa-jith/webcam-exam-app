import React from "react";
import Webcam from "react-webcam";
import { Grid, Paper, Box } from "@material-ui/core";

const WebCamView = ({ webcamRef, handleCameraVision, videoConstraints }) => {
  return (
    <>
      <Grid item>
        <Paper>
          <Box m={1}>
            <Webcam
              audio={false}
              height={150}
              width={250}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              onUserMedia={handleCameraVision(true)}
              videoConstraints={videoConstraints}
            />
          </Box>
        </Paper>
      </Grid>
    </>
  );
};
export default WebCamView;
