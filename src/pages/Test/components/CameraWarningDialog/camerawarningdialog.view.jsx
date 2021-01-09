import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
  DialogTitle,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
const CameraWarningDialogView = ({
  testInfo,
  intelligenceDialog,
  openCameraWarnDialog,
  handleCloseCameraWarnDialog,
}) => {
  return (
    <>
      <Dialog
        open={openCameraWarnDialog}
        onClose={handleCloseCameraWarnDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <List>
            <ListItem>
              <ListItemText>{`Camera Warning Count`}</ListItemText>
              <ListItemIcon>
                <Avatar style={{ backgroundColor: deepOrange[500] }}>
                  {testInfo && testInfo.no_of_cam_warning}
                </Avatar>
              </ListItemIcon>
            </ListItem>
          </List>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {intelligenceDialog && !intelligenceDialog.is_face_detected
              ? "Face is not dicoverable or properly positioned on the camera, Do not move away from the camera or turn face around"
              : "Multiple faces has been detected, place camera facing plain background"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseCameraWarnDialog}
            color="primary"
            variant="outlined"
            autoFocus
            disableRipple
            disableElevation
          >
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default CameraWarningDialogView;
