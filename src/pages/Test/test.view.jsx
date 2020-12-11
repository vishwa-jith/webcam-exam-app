import React from "react";
import { Grid } from "@material-ui/core";

//Components
import VisionDialog from "./components/VisionDialog";
import IntelligenceChart from "./components/IntelligenceChart";
import TestTimer from "./components/TestTimer";
import WebCam from "./components/WebCam";
import TestQuestions from "./components/TestQuestions";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const TestView = ({
  webcamRef,
  open,
  questions,
  question_no,
  handleAnswers,
  answers,
  handleQuestion,
  handleSubmitAnswers,
  handleCameraVision,
  intelligence,
  timer,
  value,
  handleChange,
  done,
  warning,
  handleWarning,
  handleClickOpen,
  handleClose,
  openDialog,
  handleClickOpenDialog,
  handleCloseDialog,
}) => {
  return (
    <>
      <VisionDialog
        openDialog={openDialog}
        handleClickOpenDialog={handleClickOpenDialog}
        handleCloseDialog={handleCloseDialog}
      />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <IntelligenceChart intelligence={intelligence} />
        <TestTimer timer={timer} />
        <WebCam
          webcamRef={webcamRef}
          handleCameraVision={handleCameraVision}
          videoConstraints={videoConstraints}
        />
      </Grid>
      {questions.length > 0 && (
        <TestQuestions
          open={open}
          value={value}
          done={done}
          warning={warning}
          question_no={question_no}
          answers={answers}
          questions={questions}
          handleClickOpen={handleClickOpen}
          handleSubmitAnswers={handleSubmitAnswers}
          handleWarning={handleWarning}
          handleAnswers={handleAnswers}
          handleQuestion={handleQuestion}
          handleChange={handleChange}
          handleClose={handleClose}
        />
      )}
    </>
  );
};
export default TestView;
