import React from "react";

import ProfileBannerView from "./profilebanner.view";

const ProfileBanner = ({
  coverAnchorEl,
  profileAnchorEl,
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
        coverAnchorEl={coverAnchorEl}
        profileAnchorEl={profileAnchorEl}
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
