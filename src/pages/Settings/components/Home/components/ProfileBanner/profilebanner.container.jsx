import React from "react";

import ProfileBannerView from "./profilebanner.view";

const ProfileBanner = ({
  names,
  coverAnchorEl,
  profileAnchorEl,
  updateVisibility,
  handleCoverPopoverOpen,
  handleCoverPopoverClose,
  handleProfilePopoverClose,
  handleProfileUploadClickOpen,
  handleImageDialog,
  handleProfilePopoverOpen,
}) => {
  return (
    <>
      <ProfileBannerView
        names={names}
        coverAnchorEl={coverAnchorEl}
        profileAnchorEl={profileAnchorEl}
        updateVisibility={updateVisibility}
        handleProfilePopoverOpen={handleProfilePopoverOpen}
        handleCoverPopoverOpen={handleCoverPopoverOpen}
        handleCoverPopoverClose={handleCoverPopoverClose}
        handleProfilePopoverClose={handleProfilePopoverClose}
        handleProfileUploadClickOpen={handleProfileUploadClickOpen}
        handleImageDialog={handleImageDialog}
      />
    </>
  );
};
export default ProfileBanner;
