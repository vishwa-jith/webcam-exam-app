import React from "react";

import SubmitDialogView from "./submitdialog.view";

const SubmitDialog = ({
  open,
  answers,
  warning,
  done,
  handleSubmitAnswers,
  handleClose,
}) => {
  return (
    <>
      <SubmitDialogView
        open={open}
        answers={answers}
        warning={warning}
        done={done}
        handleSubmitAnswers={handleSubmitAnswers}
        handleClose={handleClose}
      />
    </>
  );
};
export default SubmitDialog;
