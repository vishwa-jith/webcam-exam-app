import React, { useRef, useCallback, useState, useEffect } from "react";
import TestView from "./test.view";
import CustomContext from "../../components/CustomContext/customcontext.container";
const Test = () => {
  //State
  const [src, setSrc] = useState(null);
  const [captureTimer, setCaptureTimer] = useState(null);
  const menu = [{ label: "Previous" }, { label: "Next" }];
  const webcamRef = useRef(null);
  const [answers, setAnswers] = useState([]);
  const [question_no, setQuestion_No] = useState(0);
  const questions = [
    { topic: "sample question", options: ["opt1", "opt2", "opt3", "opt4"] },
    { topic: "sample question", options: ["opt1", "opt2", "opt3", "opt4"] },
    { topic: "sample question", options: ["opt1", "opt2", "opt3", "opt4"] },
    { topic: "sample question", options: ["opt1", "opt2", "opt3", "opt4"] },
  ];
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
  const handleAnswers = (event) => {
    console.log(answers);
    if (answers.length >= question_no + 1) {
      setAnswers(
        answers.map((opt, qno) => {
          if (qno === question_no) {
            console.log(event.target.id, question_no);
            return parseInt([event.target.id]);
          }
          return opt;
        })
      );
    } else {
      setAnswers([...answers, parseInt([event.target.id])]);
    }
  };
  const handleQuestion = (type) => {
    if (type < 0) {
      setQuestion_No(question_no - 1);
    } else {
      setQuestion_No(question_no + 1);
    }
  };
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
        questions={questions}
        question_no={question_no}
        handleAnswers={handleAnswers}
        answers={answers}
        handleQuestion={handleQuestion}
      />
    </>
  );
};
export default Test;
