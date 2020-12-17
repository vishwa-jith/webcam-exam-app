import React from "react";

import ProfileBannerView from "./profilebanner.view";

const ProfileBanner = ({
  names,
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
        names={names}
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
