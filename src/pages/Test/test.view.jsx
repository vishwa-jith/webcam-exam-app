import React from "react";
import { Grid, Badge } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
//Components
import VisionDialog from "./components/VisionDialog";
import IntelligenceChart from "./components/IntelligenceChart";
import TestTimer from "./components/TestTimer";
import WebCam from "./components/WebCam";
import TestQuestions from "./components/TestQuestions";
import StartDialog from "./components/StartDialog";
const StyledBadge = withStyles((theme) => ({
  badge: {
    border: `2px solid ${deepOrange[100]}`,
    backgroundColor: deepOrange[500],
    color: "white",
  },
}))(Badge);

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const TestView = ({
  webcamRef,
  testInfo,
  runCamera,
  open,
  openStartDialog,
  questions,
  question_no,
  capture,
  handleAnswers,
  handleClearAnswer,
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
  handleCloseStartDialog,
  handleCapture,
}) => {
  return (
    <>
      <VisionDialog
        openDialog={openDialog}
        testInfo={testInfo}
        handleClickOpenDialog={handleClickOpenDialog}
        handleCloseDialog={handleCloseDialog}
      />
      <StartDialog
        openStartDialog={openStartDialog}
        capture={capture}
        handleCloseStartDialog={handleCloseStartDialog}
        handleCapture={handleCapture}
        webcamRef={webcamRef}
        runCamera={runCamera}
        videoConstraints={videoConstraints}
      />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <IntelligenceChart intelligence={intelligence} />
        <TestTimer timer={timer} />
        <StyledBadge
          badgeContent={<p>{`9 / 50`}</p>}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          children={
            <WebCam
              webcamRef={webcamRef}
              handleCameraVision={handleCameraVision}
              videoConstraints={videoConstraints}
            />
          }
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
          handleClearAnswer={handleClearAnswer}
          handleQuestion={handleQuestion}
          handleChange={handleChange}
          handleClose={handleClose}
        />
      )}
    </>
  );
};
export default TestView;
