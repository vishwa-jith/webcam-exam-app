import React from "react";

import TestQuestionsView from "./testquestions.view";

const TestQuestions = ({
  open,
  value,
  done,
  warning,
  question_no,
  answers,
  questions,
  handleClickOpen,
  handleSubmitAnswers,
  handleWarning,
  handleAnswers,
  handleClearAnswer,
  handleQuestion,
  handleChange,
  handleClose,
}) => {
  return (
    <>
      <TestQuestionsView
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
    </>
  );
};
export default TestQuestions;
