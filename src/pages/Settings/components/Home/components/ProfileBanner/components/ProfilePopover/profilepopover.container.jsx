import React from "react";

import ProfilePopoverView from "./profilepopover.view";

const ProfilePopover = ({
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
      <ProfilePopoverView
        names={names}
        openProfile={openProfile}
        profileAnchorEl={profileAnchorEl}
        handleProfilePopoverClose={handleProfilePopoverClose}
        handleProfileUploadClickOpen={handleProfileUploadClickOpen}
        handleImageDialog={handleImageDialog}
        updateVisibility={updateVisibility}
      />
    </>
  );
};
export default ProfilePopover;
