import React, { useRef, useCallback, useState, useEffect } from "react";
import TestView from "./test.view";
import CustomContext from "../../components/CustomContext/customcontext.container";
const Test = () => {
  //State
  const [src, setSrc] = useState(null);
  const [captureTimer, setCaptureTimer] = useState(null);
  const menu = [{ label: "Previous" }, { label: "Next" }];
  const webcamRef = useRef(null);
  const takeScreenShoot = useCallback(() => {
    setCaptureTimer(
      setInterval(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setSrc(imageSrc);
      }, 5000)
    );
  }, [webcamRef]);
  // useEffect(() => {
  //   return () => {
  //     clearInterval(captureTimer);
  //   };
  // });
  useEffect(() => {
    document.addEventListener("visibilitychange", function () {
      document.title = document.visibilityState;
      console.log(document.visibilityState);
    });
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  }, []);
  return (
    <>
      <CustomContext items={menu}></CustomContext>
      <TestView
        webcamRef={webcamRef}
        takeScreenShoot={takeScreenShoot}
        src={src}
      />
    </>
  );
};
export default Test;
