import React from "react";
import QuestionView from "./question.view";
const Question = ({
  questions,
  question_no,
  handleAnswers,
  answers,
  handleQuestion,
  handleClickOpen,
  handleSubmitAnswers,
  handleClose,
  open,
  done,
  warning,
}) => {
  return (
    <>
      <QuestionView
        open={open}
        questions={questions}
        question_no={question_no}
        handleAnswers={handleAnswers}
        answers={answers}
        handleQuestion={handleQuestion}
        handleClickOpen={handleClickOpen}
        handleSubmitAnswers={handleSubmitAnswers}
        handleClose={handleClose}
        done={done}
        warning={warning}
      />
    </>
  );
};
export default Question;
