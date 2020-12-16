import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import openSocket from "socket.io-client";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  getTestQuestions,
  sendAnswers,
  startTest,
  getTestInfo,
  addWarning,
} from "../../components/utils/requests";
import { getTimer } from "../../components/utils";
import {
  addInfoAlert,
  addWarningAlert,
} from "../../redux/ActionCreators/alert.action";
import {
  visionLost,
  visionGained,
} from "../../redux/ActionCreators/test.action";

import TestView from "./test.view";
import CustomContext from "../../components/CustomContext";

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
  const [done, setDone] = useState([]);
  const [warning, setWarning] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [testInfo, setTestInfo] = useState(null);
  const [isTestInfo, setIsTestInfo] = useState(false);
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
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (timer && !isTimer) {
      setIsTimer(true);
      setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    }
    // eslint-disable-next-line
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
    if (testInfo && testInfo.no_of_warning === 5) {
      dispatch(
        addWarningAlert("Exam violation determined, Submitting Test...")
      );
      sendAnswers(testId, {
        answers,
        end_time: new Date(),
        answers_attended: done.length,
        answers_marked: warning.length,
        unanswered: questions.length - done.length,
      }).then(() => {
        history.push("/testtopics");
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
    window.addEventListener("visibilitychange", visibility);
    window.addEventListener("contextmenu", (event) => event.preventDefault());
    getTestQuestions(testId).then((ques) => {
      setuser_id(ques.user_id);
      setQuestions(ques.questions);
      setAnswers(
        ques.questions.map((data, index) => ({ id: index, answer: null }))
      );
    });
    return () => {
      window.removeEventListener("visibilitychange", visibility);
    };
    // eslint-disable-next-line
  }, [testId]);
  useEffect(() => {
    getTestInfo(testId).then((testinfo) => {
      setTestInfo(testinfo[0]);
      setIsTestInfo(true);
    });
    // eslint-disable-next-line
  }, [openDialog]);
  useEffect(() => {
    if (!testInfo && isTestInfo) {
      startTest(testId, new Date()).then((testinfo) => {
        setTestInfo(testinfo);
      });
    }
    // eslint-disable-next-line
  }, [testInfo, isTestInfo]);
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
      handleClickOpenDialog();
      addWarning(testId);
      dispatch(visionLost(document.visibilityState));
    }
    getTestInfo(testId).then((testinfo) => {
      setTestInfo(testinfo[0]);
      setIsTestInfo(true);
    });
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
      sendAnswers(testId, {
        answers,
        end_time: new Date(),
        answers_attended: done.length,
        answers_marked: warning.length,
        unanswered: questions.length - done.length,
      }).then(() => {
        window.removeEventListener("visibilitychange", visibility);
        history.push("/testtopics");
      });
    }
  };
  return (
    <>
      <CustomContext items={menu}></CustomContext>
      <TestView
        webcamRef={webcamRef}
        testInfo={testInfo}
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
