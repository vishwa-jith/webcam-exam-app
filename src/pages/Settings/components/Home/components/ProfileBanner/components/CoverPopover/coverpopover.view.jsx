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

const CoverPopoverView = ({
  openCover,
  coverAnchorEl,
  handleCoverPopoverClose,
  handleProfileUploadClickOpen,
  handleImageDialog,
}) => {
  return (
    <>
      <Popover
        id="mouse-over-cover-popover"
        open={openCover}
        anchorEl={coverAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handleCoverPopoverClose}
        disableRestoreFocus
      >
        <List>
          <ListItem
            button
            dense
            onClick={() => handleProfileUploadClickOpen(2)}
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
                alt: "Cover Image",
                src: "default_cover.jpg",
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
export default CoverPopoverView;
