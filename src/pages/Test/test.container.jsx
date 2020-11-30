import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import openSocket from "socket.io-client";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getTestQuestions, sendAnswers } from "../../components/utils/requests";
import { getTimer } from "../../components/utils";
import TestView from "./test.view";
import CustomContext from "../../components/CustomContext/customcontext.container";
import {
  addInfoAlert,
  addWarningAlert,
} from "../../redux/ActionCreators/alert.action";
import {
  visionLost,
  visionGained,
} from "../../redux/ActionCreators/test.action";
const Test = () => {
  //Const
  const { testId } = useParams();
  const dispatch = useDispatch();
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
  const [value, setValue] = useState(0);
  const [uiType, setUiType] = useState(true);
  const [done, setDone] = useState([]);
  const [warning, setWarning] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
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
    if (timer === 300) {
      dispatch(addInfoAlert("Exam ends in 5 minutes"));
    } else if (timer === 60) {
      dispatch(addWarningAlert("Exam ends in few Seconds"));
    }
    if (timer === 10) {
      handleSubmitAnswers();
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
    window.addEventListener("visibilitychange", visibility);
    window.addEventListener("contextmenu", (event) => event.preventDefault());
    getTestQuestions(testId)
      .then((ques) => {
        setuser_id(ques.user_id);
        setQuestions(ques.questions);
        setAnswers(
          ques.questions.map((data, index) => ({ id: index, answer: null }))
        );
      })
      .catch((error) => console.log(error));
    return () => {
      window.removeEventListener("visibilitychange", visibility);
    };
  }, [testId]);
  //Event Handlers
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    dispatch(visionGained(document.visibilityState));
    setOpenDialog(false);
  };
  const visibility = () => {
    if (document.visibilityState === "hidden") {
      setOpenDialog(true);
      dispatch(visionLost(document.visibilityState));
    }
  };
  const handleWarning = () => {
    if (warning.includes(question_no)) {
      dispatch(addInfoAlert(`Question number ${question_no + 1} mark removed`));
      setWarning(warning.filter((value) => value !== question_no));
    } else {
      dispatch(addInfoAlert(`Question number ${question_no + 1} mark saved`));
      setWarning([...warning, question_no]);
    }
  };
  const handleUiChange = () => {
    setUiType(!uiType);
  };
  const handleChange = (event, newValue) => {
    setQuestion_No(newValue);
    setValue(newValue);
  };
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
    setAnswers(
      answers.map((opt, qno) => {
        if (qno === question_no) {
          if (!done.includes(question_no)) {
            setDone([...done, question_no]);
          }
          return { id: qno, answer: event.target.id };
        }
        return opt;
      })
    );
  };
  const handleQuestion = (type) => {
    if (type < 0) {
      setQuestion_No(question_no - 1);
      setValue(question_no - 1);
    } else {
      setQuestion_No(question_no + 1);
      setValue(question_no + 1);
    }
  };
  const handleSubmitAnswers = () => {
    if (done.length !== questions.length && timer >= 15) {
      dispatch(
        addWarningAlert(
          `${questions.length - done.length} questions not answered`
        )
      );
      handleClose();
    } else {
      sendAnswers(testId, answers)
        .then(() => {
          window.removeEventListener("visibilitychange", visibility);
          history.push("/testtopics");
        })
        .catch((error) => console.log(error));
    }
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
        intelligence={intelligence}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        timer={timer}
        value={value}
        handleChange={handleChange}
        uiType={uiType}
        handleUiChange={handleUiChange}
        done={done}
        warning={warning}
        handleWarning={handleWarning}
        openDialog={openDialog}
        handleClickOpenDialog={handleClickOpenDialog}
        handleCloseDialog={handleCloseDialog}
      />
    </>
  );
};
export default Test;
