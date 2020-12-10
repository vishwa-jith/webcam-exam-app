import React from "react";

import ProfilePopoverView from "./profilepopover.view";

const ProfilePopover = ({
  openProfile,
  profileAnchorEl,
  handleProfilePopoverClose,
  handleProfileUploadClickOpen,
  handleImageDialog,
}) => {
  return (
    <>
      <ProfilePopoverView
        openProfile={openProfile}
        profileAnchorEl={profileAnchorEl}
        handleProfilePopoverClose={handleProfilePopoverClose}
        handleProfileUploadClickOpen={handleProfileUploadClickOpen}
        handleImageDialog={handleImageDialog}
      />
    </>
  );
};
export default ProfilePopover;
