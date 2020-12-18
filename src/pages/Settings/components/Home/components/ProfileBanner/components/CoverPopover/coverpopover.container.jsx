import React from "react";

import CoverPopoverView from "./coverpopover.view";

const CoverPopover = ({
  names,
  openCover,
  coverAnchorEl,
  handleCoverPopoverClose,
  handleProfileUploadClickOpen,
  handleImageDialog,
}) => {
  return (
    <>
      <CoverPopoverView
        names={names}
        openCover={openCover}
        coverAnchorEl={coverAnchorEl}
        handleCoverPopoverClose={handleCoverPopoverClose}
        handleProfileUploadClickOpen={handleProfileUploadClickOpen}
        handleImageDialog={handleImageDialog}
      />
    </>
  );
};
export default CoverPopover;
