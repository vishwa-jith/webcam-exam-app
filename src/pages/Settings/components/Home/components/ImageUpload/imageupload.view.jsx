import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { indigo, grey } from "@material-ui/core/colors";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ImageUploadView = ({
  profileImage,
  coverImage,
  uploadType,
  onChange,
  profileUploadOpen,
  handleProfileUploadClose,
  removeImage,
  handleSubmitProfileUpload,
}) => {
  return (
    <>
      <Dialog
        open={profileUploadOpen}
        fullWidth={true}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleProfileUploadClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          id="alert-dialog-slide-title"
          style={{ backgroundColor: indigo[50] }}
        >
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: indigo[500], color: indigo[50] }}
                >
                  <PhotoCameraIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText style={{ color: indigo[500] }}>
                {`Upload ${uploadType} Image`}
              </ListItemText>
            </ListItem>
          </List>
        </DialogTitle>
        <DialogContent style={{ backgroundColor: grey[100] }}>
          <DialogContentText id="alert-dialog-slide-description">
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ minHeight: "200px" }}
            >
              {(!profileImage && uploadType === "Profile") ||
              (!coverImage && uploadType === "Cover") ? (
                <>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={onChange}
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      style={{ backgroundColor: indigo[500], color: "white" }}
                      startIcon={<CloudUploadIcon />}
                      size="large"
                      component="span"
                    >
                      Upload
                    </Button>
                  </label>
                </>
              ) : (
                <img
                  src={
                    profileImage && uploadType === "Profile"
                      ? profileImage
                      : coverImage
                  }
                  alt="profile preview"
                  width={
                    profileImage && uploadType === "Profile" ? "200px" : "100%"
                  }
                  height={
                    profileImage && uploadType === "Profile" ? "200px" : "150px"
                  }
                />
              )}
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ backgroundColor: indigo[50] }}>
          {((profileImage && uploadType === "Profile") ||
            (coverImage && uploadType === "Cover")) && (
            <>
              <Button
                color="primary"
                variant="outlined"
                endIcon={<RemoveCircleIcon />}
                onClick={removeImage}
              >
                Remove Image
              </Button>
              <Button
                style={{ backgroundColor: indigo[500], color: "white" }}
                color="secondary"
                variant="contained"
                endIcon={<CheckCircleIcon />}
                onClick={handleSubmitProfileUpload}
              >
                Confirm
              </Button>
            </>
          )}
          <Button
            onClick={handleProfileUploadClose}
            color="secondary"
            variant={
              (profileImage && uploadType === "Profile") ||
              (coverImage && uploadType === "Cover")
                ? "text"
                : "outlined"
            }
            endIcon={<CancelIcon />}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImageUploadView;
