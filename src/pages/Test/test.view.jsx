import React from "react";
import Webcam from "react-webcam";
import { Grid, Paper, Box } from "@material-ui/core";
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};
const TestView = ({ webcamRef, takeScreenShoot, src }) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
        <Grid item>
          <Paper>
            <Box m={1}>
              <Webcam
                audio={false}
                height={150}
                width={250}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                onUserMedia={takeScreenShoot}
                videoConstraints={videoConstraints}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {src !== null && (
        <img src={src} alt="sample" width="100px" height="100px" />
      )}
    </>
  );
};
export default TestView;
