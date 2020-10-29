import React, { useRef, useCallback, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import TestView from "./test.view";
import CustomContext from "../../components/CustomContext/customcontext.container";
import { getTestQuestions, sendAnswers } from "../../components/utils/requests";
const Test = () => {
  //Const
  const { testId } = useParams();
  const history = useHistory();
  //State
  const [src, setSrc] = useState(null);
  const [captureTimer, setCaptureTimer] = useState(null);
  const menu = [{ label: "Previous" }, { label: "Next" }];
  const webcamRef = useRef(null);
  const [answers, setAnswers] = useState([]);
  const [question_no, setQuestion_No] = useState(0);
  const [runCamera, setRunCamera] = useState(false);
  // const questions = [
  //   { question: "sample question", options: ["opt1", "opt2", "opt3", "opt4"] },
  //   { question: "sample question", options: ["opt1", "opt2", "opt3", "opt4"] },
  //   { question: "sample question", options: ["opt1", "opt2", "opt3", "opt4"] },
  //   { question: "sample question", options: ["opt1", "opt2", "opt3", "opt4"] },
  // ];
  const [questions, setQuestions] = useState([]);
  // const takeScreenShoot = useCallback(() => {
  //   setCaptureTimer(
  //     setInterval(() => {
  //       if (runCamera) {
  //         const imageSrc = webcamRef.current.getScreenshot();
  //         setSrc(imageSrc);
  //       } else {
  //         clearInterval(captureTimer);
  //       }
  //     }, 5000)
  //   );
  // }, [webcamRef]);
  useEffect(() => {
    const timer = setInterval(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setSrc(imageSrc);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [runCamera, captureTimer]);
  // useEffect(() => {
  //   return () => {
  //     clearInterval(captureTimer);
  //   };
  // });
  const handleCameraVision = (state) => {
    setRunCamera(state);
  };
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
  const handleSubmitAnswers = () => {
    sendAnswers(testId, answers)
      .then(() => {
        history.push("/testtopics");
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    document.addEventListener("visibilitychange", function () {
      document.title = document.visibilityState;
      console.log(document.visibilityState);
    });
    document.addEventListener("contextmenu", (event) => event.preventDefault());
    getTestQuestions(testId)
      .then((ques) => {
        setQuestions(ques);
      })
      .catch((error) => console.log(error));
  }, [testId]);
  return (
    <>
      <CustomContext items={menu}></CustomContext>
      <TestView
        webcamRef={webcamRef}
        src={src}
        questions={questions}
        question_no={question_no}
        handleAnswers={handleAnswers}
        answers={answers}
        handleQuestion={handleQuestion}
        handleSubmitAnswers={handleSubmitAnswers}
        handleCameraVision={handleCameraVision}
      />
    </>
  );
};
export default Test;
