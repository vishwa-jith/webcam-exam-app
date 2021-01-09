import React from "react";
import {
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Tooltip,
} from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import FaceIcon from "@material-ui/icons/Face";
import ImageIcon from "@material-ui/icons/Image";

const ProfilePopoverView = ({
  names,
  openProfile,
  profileAnchorEl,
  handleProfilePopoverClose,
  handleProfileUploadClickOpen,
  handleImageDialog,
  updateVisibility,
}) => {
  return (
    <>
      <Popover
        id="mouse-over-profile-popover"
        open={openProfile}
        anchorEl={profileAnchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        onClose={handleProfilePopoverClose}
        disableRestoreFocus
      >
        <List>
          <ListItem
            button
            dense
            onClick={() => handleProfileUploadClickOpen(1)}
          >
            <ListItemIcon>
              <AddAPhotoIcon />
            </ListItemIcon>
            <ListItemText>Upload Image</ListItemText>
          </ListItem>
          <ListItem
            button
            dense
            onClick={() =>
              handleImageDialog({
                alt: "Profile Image",
                src: names.default_avatar
                  ? "default_avatar.png"
                  : `upload/${names._id}-profile.jpg`,
              })
            }
          >
            <ListItemIcon>
              <ImageIcon />
            </ListItemIcon>
            <ListItemText>View Image</ListItemText>
          </ListItem>
          <Tooltip title="Default avatar visibility" arrow>
            <ListItem>
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-avatar" primary="" />
              <ListItemSecondaryAction>
                <Switch
                  edge="end"
                  checked={names.default_avatar}
                  onChange={updateVisibility}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-avatar",
                  }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </Tooltip>
        </List>
      </Popover>
    </>
  );
};
export default ProfilePopoverView;
