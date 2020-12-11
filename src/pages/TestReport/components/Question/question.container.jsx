import React from "react";

import QuestionView from "./question.view";

const Question = ({ questions, question_no, answers }) => {
  return (
    <>
      <QuestionView
        questions={questions}
        question_no={question_no}
        answers={answers}
      />
    </>
  );
};
export default Question;
