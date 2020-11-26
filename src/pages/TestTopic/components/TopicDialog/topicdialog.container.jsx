import React from "react";
import TopicDialogView from "./topicdialog.view";
const TopicDialog = ({ testtopicdata, Transition, open, handleClose }) => {
  return (
    <>
      <TopicDialogView
        testtopicdata={testtopicdata}
        Transition={Transition}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};
export default TopicDialog;
