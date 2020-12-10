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
import { indigo, grey } from "@material-ui/core/colors";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ImageUploadView = ({
  image,
  onChange,
  profileUploadOpen,
  handleProfileUploadClose,
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
          style={{ backgroundColor: indigo[500] }}
        >
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: "white", color: indigo[500] }}
                >
                  <PhotoCameraIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText style={{ color: "white" }}>
                {"Upload Profile Image"}
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
              {!image ? (
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
                  src={image}
                  alt="profile preview"
                  width="200px"
                  height="200px"
                />
              )}
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {image && (
            <Button
              style={{ backgroundColor: indigo[500], color: "white" }}
              color="secondary"
              variant="contained"
              endIcon={<CheckCircleIcon />}
            >
              Confirm
            </Button>
          )}
          <Button
            onClick={handleProfileUploadClose}
            color="secondary"
            variant={image ? "outlined" : "contained"}
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
