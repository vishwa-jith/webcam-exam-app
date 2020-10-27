import React from "react";
import Webcam from "react-webcam";
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};
const TestView = ({ webcamRef, takeScreenShoot }) => {
  return (
    <div>
      <h1>Test Component</h1>
      <Webcam
        audio={false}
        height={400}
        width={400}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        onUserMedia={takeScreenShoot}
        videoConstraints={videoConstraints}
      />
    </div>
  );
};
export default TestView;
