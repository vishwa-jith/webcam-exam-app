import React from "react";

import CmeraWarningDialogView from "./camerawarningdialog.view";

const CameraWarningDialog = ({
  testInfo,
  intelligenceDialog,
  openCameraWarnDialog,
  handleCloseCameraWarnDialog,
}) => {
  return (
    <>
      <CmeraWarningDialogView
        testInfo={testInfo}
        intelligenceDialog={intelligenceDialog}
        openCameraWarnDialog={openCameraWarnDialog}
        handleCloseCameraWarnDialog={handleCloseCameraWarnDialog}
      />
    </>
  );
};
export default CameraWarningDialog;
