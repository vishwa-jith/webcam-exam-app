import React from "react";

import CoverPopoverView from "./coverpopover.view";

const CoverPopover = ({
  openCover,
  coverAnchorEl,
  handleCoverPopoverClose,
  handleProfileUploadClickOpen,
  handleImageDialog,
}) => {
  return (
    <>
      <CoverPopoverView
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
