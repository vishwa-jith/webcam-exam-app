import React from "react";
import VisionDialogView from "./visiondialog.view";
const VisionDialog = ({
  openDialog,
  handleClickOpenDialog,
  handleCloseDialog,
}) => {
  return (
    <>
      <VisionDialogView
        openDialog={openDialog}
        handleClickOpenDialog={handleClickOpenDialog}
        handleCloseDialog={handleCloseDialog}
      />
    </>
  );
};
export default VisionDialog;
