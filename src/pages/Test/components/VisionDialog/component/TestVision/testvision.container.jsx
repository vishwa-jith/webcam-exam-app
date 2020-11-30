import React from "react";
import TestVisionView from "./testvision.view";
const TestVision = ({
  openDialog,
  handleClickOpenDialog,
  handleCloseDialog,
}) => {
  return (
    <>
      <TestVisionView
        openDialog={openDialog}
        handleClickOpenDialog={handleClickOpenDialog}
        handleCloseDialog={handleCloseDialog}
      />
    </>
  );
};
export default TestVision;
