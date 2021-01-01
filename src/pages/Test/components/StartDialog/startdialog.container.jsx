import React from "react";

import StartDialogView from "./startdialog.view";

const StartDialog = ({
  openStartDialog,
  webcamRef,
  runCamera,
  handleCloseStartDialog,
  videoConstraints,
}) => {
  return (
    <>
      <StartDialogView
        openStartDialog={openStartDialog}
        handleCloseStartDialog={handleCloseStartDialog}
        webcamRef={webcamRef}
        runCamera={runCamera}
        videoConstraints={videoConstraints}
      />
    </>
  );
};
export default StartDialog;
