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
      <TestView webcamRef={webcamRef} takeScreenShoot={takeScreenShoot} src={src}/>
    </>
  );
};
export default Test;
