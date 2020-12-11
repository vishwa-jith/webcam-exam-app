import React from "react";

import WebCamView from "./webcam.view";

const WebCam = ({ webcamRef, handleCameraVision, videoConstraints }) => {
  return (
    <>
      <WebCamView
        webcamRef={webcamRef}
        handleCameraVision={handleCameraVision}
        videoConstraints={videoConstraints}
      />
    </>
  );
};
export default WebCam;
