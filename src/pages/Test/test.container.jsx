import React, { useRef, useCallback, useState, useEffect } from "react";
import TestView from "./test.view";
const Test = () => {
  //State
  const [src, setSrc] = useState(null);
  const [captureTimer, setCaptureTimer] = useState(null);
  const webcamRef = useRef(null);
  const takeScreenShoot = useCallback(() => {
    setCaptureTimer(
      setInterval(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setSrc(imageSrc);
      }, 5000)
    );
  }, [webcamRef]);
  useEffect(() => {
    return () => {
      clearInterval(captureTimer);
    };
  });
  return (
    <>
      {src !== null && (
        <img src={src} alt="sample" width="100px" height="100px" />
      )}
      <TestView webcamRef={webcamRef} takeScreenShoot={takeScreenShoot} />
    </>
  );
};
export default Test;
