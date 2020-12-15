import React from "react";

import VisionDialogView from "./visiondialog.view";

const VisionDialog = ({
  openDialog,
  testInfo,
  handleClickOpenDialog,
  handleCloseDialog,
}) => {
  return (
    <>
      <VisionDialogView
        testInfo={testInfo}
        openDialog={openDialog}
        handleClickOpenDialog={handleClickOpenDialog}
        handleCloseDialog={handleCloseDialog}
      />
    </>
  );
};
export default VisionDialog;
