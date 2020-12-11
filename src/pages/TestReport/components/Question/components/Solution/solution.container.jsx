import React from "react";

import SolutionView from "./solution.view";

const Solution = ({ index, questions, answers, question_no, opt }) => {
  return (
    <>
      <SolutionView
        index={index}
        questions={questions}
        answers={answers}
        question_no={question_no}
        opt={opt}
      />
    </>
  );
};
export default Solution;
