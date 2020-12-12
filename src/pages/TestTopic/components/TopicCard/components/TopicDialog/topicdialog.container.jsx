import React from "react";

import TopicDialogView from "./topicdialog.view";

const TopicDialog = ({
  testtopicdata,
  Transition,
  open,
  handleClose,
  testinfo,
}) => {
  return (
    <>
      <TopicDialogView
        testtopicdata={testtopicdata}
        Transition={Transition}
        open={open}
        handleClose={handleClose}
        testinfo={testinfo}
      />
    </>
  );
};
export default TopicDialog;
