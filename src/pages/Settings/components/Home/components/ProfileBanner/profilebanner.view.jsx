import React from "react";
import { Avatar } from "@material-ui/core";
import { baseUrl } from "../../../../../../components/constants";

//Components
import CoverPopover from "./components/CoverPopover";
import ProfilePopover from "./components/ProfilePopover";
import CoverMask from "./components/CoverMask";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  badge: {
    width: theme.breakpoints.up("sm") ? "200px" : "100px",
    height: theme.breakpoints.up("sm") ? "200px" : "100px",
    border: "3px solid #999",
  },
}));

const ProfileBannerView = ({
  coverAnchorEl,
  profileAnchorEl,
  handleCoverPopoverOpen,
  handleCoverPopoverClose,
  handleProfilePopoverClose,
  handleProfileUploadClickOpen,
  handleImageDialog,
  handleProfilePopoverOpen,
}) => {
  //Const
  const classes = useStyles();
  const openCover = Boolean(coverAnchorEl);
  const openProfile = Boolean(profileAnchorEl);

  return (
    <>
      <CoverPopover
        openCover={openCover}
        coverAnchorEl={coverAnchorEl}
        handleCoverPopoverClose={handleCoverPopoverClose}
        handleProfileUploadClickOpen={handleProfileUploadClickOpen}
        handleImageDialog={handleImageDialog}
      />
      <CoverMask
        openCover={openCover}
        handleCoverPopoverOpen={handleCoverPopoverOpen}
      />
      <Avatar
        className={classes.badge}
        style={{
          position: "absolute",
          cursor: "pointer",
        }}
        aria-owns={openProfile ? "mouse-over-profile-popover" : undefined}
        aria-haspopup="true"
        onClick={handleProfilePopoverOpen}
      >
        <img
          className={classes.badge}
          src={`${baseUrl}images/default_avatar.png`}
          alt="Default Avatar"
        />
      </Avatar>
      <ProfilePopover
        openProfile={openProfile}
        profileAnchorEl={profileAnchorEl}
        handleProfilePopoverClose={handleProfilePopoverClose}
        handleProfileUploadClickOpen={handleProfileUploadClickOpen}
        handleImageDialog={handleImageDialog}
      />
    </>
  );
};
export default ProfileBannerView;
