import React from "react";

import TestVisionView from "./testvision.view";

const TestVision = ({
  openDialog,
  testInfo,
  handleClickOpenDialog,
  handleCloseDialog,
}) => {
  return (
    <>
      <TestVisionView
        openDialog={openDialog}
        testInfo={testInfo}
        handleClickOpenDialog={handleClickOpenDialog}
        handleCloseDialog={handleCloseDialog}
      />
    </>
  );
};
export default TestVision;
