import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import TestView from "./test.view";
import CustomContext from "../../components/CustomContext/customcontext.container";
import { getTestQuestions, sendAnswers } from "../../components/utils/requests";
import openSocket from "socket.io-client";
const Test = () => {
  //Const
  const { testId } = useParams();
  const history = useHistory();
  //State
  const [src, setSrc] = useState(null);
  // const [captureTimer, setCaptureTimer] = useState(null);
  const menu = [{ label: "Previous" }, { label: "Next" }];
  const webcamRef = useRef(null);
  const [answers, setAnswers] = useState([]);
  const [question_no, setQuestion_No] = useState(0);
  const [runCamera, setRunCamera] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [socket, setSocket] = useState(null);
  const [counter, setCounter] = useState(0);
  const [user_id, setuser_id] = useState(null);
  const [intelligence, setInteligence] = useState(null);

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
    setSocket(openSocket("http://192.168.225.69:8000/"));
  }, []);
  useEffect(() => {
    if (socket && user_id) {
      socket.on(user_id, (intl) => {
        setInteligence(intl);
      });
    }
  });
  useEffect(() => {
    let timer;
    if (socket && user_id) {
      timer = setInterval(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setSrc(imageSrc);
        setCounter((prevCounter) => prevCounter + 5);
        socket.emit("validate-image", { user_id, imageSrc });
      }, 5000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [runCamera, socket, user_id]);

  const handleCameraVision = (state) => {
    setRunCamera(state);
  };
  const handleAnswers = (event) => {
    if (answers.length >= question_no + 1) {
      setAnswers(
        answers.map((opt, qno) => {
          if (qno === question_no) {
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
    });
    document.addEventListener("contextmenu", (event) => event.preventDefault());
    getTestQuestions(testId)
      .then((ques) => {
        setuser_id(ques.user_id);
        setQuestions(ques.questions);
      })
      .catch((error) => console.log(error));
  }, [testId]);
  useEffect(() => {
    if (counter >= 30 * 60) {
      handleSubmitAnswers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
  const skipTimer = () => {
    setCounter(30 * 60);
  };
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
        counter={counter}
        skipTimer={skipTimer}
        intelligence={intelligence}
      />
    </>
  );
};
export default Test;
