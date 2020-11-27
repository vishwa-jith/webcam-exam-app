import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import openSocket from "socket.io-client";
import { useSelector, shallowEqual } from "react-redux";

import { getTestQuestions, sendAnswers } from "../../components/utils/requests";
import { getTimer } from "../../components/utils";
import TestView from "./test.view";
import CustomContext from "../../components/CustomContext/customcontext.container";

const Test = () => {
  //Const
  const { testId } = useParams();
  const history = useHistory();
  const testDetails = useSelector(
    ({ testDetails }) => testDetails.testDetails,
    shallowEqual
  );
  //State
  const [src, setSrc] = useState(null);
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
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState(null);
  const [isTimer, setIsTimer] = useState(false);
  //useEffect
  useEffect(() => {
    setSocket(openSocket("http://192.168.225.69:8000/"));
    const start_sec = getTimer(
      new Date(testDetails.start_time).toLocaleTimeString().split(":")
    );
    const now_sec = getTimer(new Date().toLocaleTimeString().split(":"));
    const end_sec = start_sec + 60 * testDetails.duration_in_min;
    const timer_sec = end_sec - now_sec;
    setTimer(timer_sec);
  }, []);
  useEffect(() => {
    let interval;
    if (timer && !isTimer) {
      setIsTimer(true);
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    }
  }, [timer]);
  useEffect(() => {
    if (socket && user_id) {
      socket.on(user_id, (intl) => {
        setInteligence(intl);
      });
    }
  });
  useEffect(() => {
    let timer_image;
    if (socket && user_id) {
      timer_image = setInterval(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setSrc(imageSrc);
        setCounter((prevCounter) => prevCounter + 5);
        socket.emit("validate-image", { user_id, imageSrc });
      }, 5000);
    }
    return () => {
      clearInterval(timer_image);
    };
  }, [runCamera, socket, user_id]);
  useEffect(() => {
    window.addEventListener("visibilitychange", function () {
      document.title = document.visibilityState;
    });
    window.addEventListener("contextmenu", (event) => event.preventDefault());
    getTestQuestions(testId)
      .then((ques) => {
        setuser_id(ques.user_id);
        setQuestions(ques.questions);
      })
      .catch((error) => console.log(error));
    return () => {
      window.removeEventListener("visibilitychange", () => {
        document.title = "React App";
      });
      window.removeEventListener("contextmenu", () => {
        document.title = "React App";
      });
    };
  }, [testId]);
  useEffect(() => {
    if (counter >= 30 * 60) {
      handleSubmitAnswers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  //Event Handlers
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
  const skipTimer = () => {
    setCounter(30 * 60);
  };
  return (
    <>
      <CustomContext items={menu}></CustomContext>
      <TestView
        webcamRef={webcamRef}
        src={src}
        open={open}
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
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        timer={timer}
      />
    </>
  );
};
export default Test;
