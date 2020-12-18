import React from "react";
import {
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import ImageIcon from "@material-ui/icons/Image";

const ProfilePopoverView = ({
  names,
  openProfile,
  profileAnchorEl,
  handleProfilePopoverClose,
  handleProfileUploadClickOpen,
  handleImageDialog,
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
        </List>
      </Popover>
    </>
  );
};
export default ProfilePopoverView;
