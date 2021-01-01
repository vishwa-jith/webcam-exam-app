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
  getTestAnswers,
  updateTestAnswer,
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
  const [openStartDialog, setOpenStartDialog] = useState(false);
  const [testInfo, setTestInfo] = useState(null);
  //useEffect
  useEffect(() => {
    setSocket(openSocket("http://localhost:8000/"));
    setOpenStartDialog(true);
    const start_sec = getTimer(
      new Date(testDetails.test_start_time).toLocaleTimeString().split(":")
    );
    const now_sec = getTimer(new Date().toLocaleTimeString().split(":"));
    const end_sec = start_sec + 60 * testDetails.duration_in_min;
    const timer_sec = end_sec - now_sec;
    setTimer(timer_sec);
    getTestAnswers(testId).then((ans) => {
      setAnswers(ans);
      setDone(ans.filter((ansr) => ansr.is_answered).map(({ q_no }) => q_no));
      setWarning(ans.filter((ansr) => ansr.is_marked).map(({ q_no }) => q_no));
    });
    window.addEventListener("visibilitychange", visibility);
    window.addEventListener("contextmenu", (event) => event.preventDefault());
    getTestQuestions(testId).then((ques) => {
      setuser_id(ques.user_id);
      setQuestions(ques.questions);
      getTestInfo(testId).then((testinfo) => {
        setTestInfo(testinfo[0]);
        if (!testinfo[0]) {
          startTest(testId, {
            start_time: new Date(),
            q_len: ques.questions.length,
          }).then((ans) => {
            setAnswers(ans);
          });
        }
      });
    });
    return () => {
      window.removeEventListener("visibilitychange", visibility);
    };
    // eslint-disable-next-line
  }, [testId]);
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
    if (testInfo && testInfo.no_of_warning >= 5) {
      dispatch(
        addWarningAlert("Exam violation determined, Submitting Test...")
      );
      sendAnswers(testId, {
        answers,
        end_time: new Date(),
        answers_attended: done.length,
        answers_marked: warning.length,
        unanswered: questions.length - done.length,
        is_fraudulant: true,
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
  //Event Handlers
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    dispatch(visionGained(document.visibilityState));
    setOpenDialog(false);
  };
  const handleCloseStartDialog = () => {
    setOpenStartDialog(false);
  };
  const visibility = () => {
    if (document.visibilityState === "hidden") {
      handleClickOpenDialog();
      addWarning(testId);
      dispatch(visionLost(document.visibilityState));
    }
    getTestInfo(testId).then((testinfo) => {
      setTestInfo(testinfo[0]);
    });
  };
  const handleWarning = () => {
    console.log(answers);
    setAnswers(
      answers.map((ans, qno) => {
        if (ans.q_no === question_no) {
          dispatch(
            addInfoAlert(
              `Question number ${question_no + 1} mark ${
                ans.is_marked ? "removed" : "saved"
              }`
            )
          );
          setWarning(
            ans.is_marked
              ? warning.filter((value) => value !== question_no)
              : [...warning, question_no]
          );
          updateTestAnswer(testId, {
            ...ans,
            is_marked: ans.is_marked ? false : true,
          });
          return {
            ...ans,
            is_marked: ans.is_marked ? false : true,
          };
        }
        return ans;
      })
    );
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
    if (!done.includes(question_no)) {
      setDone([...done, question_no]);
    }
    setAnswers(
      answers.map((ans, qno) => {
        if (ans.q_no === question_no) {
          updateTestAnswer(testId, {
            ...ans,
            answer: event.target.id,
            is_answered: true,
          });
          return {
            ...ans,
            answer: event.target.id,
            is_answered: true,
          };
        }
        return ans;
      })
    );
  };
  const handleClearAnswer = () => {
    setDone(done.filter((q_no) => q_no !== question_no));
    setAnswers(
      answers.map((ans, qno) => {
        if (ans.q_no === question_no) {
          updateTestAnswer(testId, {
            ...ans,
            answer: null,
            is_answered: false,
          }).then(() =>
            dispatch(
              addInfoAlert(`Question number ${question_no + 1} answer cleared`)
            )
          );
          return {
            ...ans,
            answer: null,
            is_answered: false,
          };
        }
        return ans;
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
        is_fraudulant: false,
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
        runCamera={runCamera}
        open={open}
        openStartDialog={openStartDialog}
        questions={questions}
        question_no={question_no}
        handleAnswers={handleAnswers}
        handleClearAnswer={handleClearAnswer}
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
        handleCloseStartDialog={handleCloseStartDialog}
      />
    </>
  );
};
export default Test;
