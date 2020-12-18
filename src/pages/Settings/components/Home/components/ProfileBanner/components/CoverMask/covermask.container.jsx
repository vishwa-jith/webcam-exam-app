import React from "react";

import CoverMaskView from "./covermask.view";

const CoverMask = ({ names, openCover, handleCoverPopoverOpen }) => {
  return (
    <>
      <CoverMaskView
        names={names}
        openCover={openCover}
        handleCoverPopoverOpen={handleCoverPopoverOpen}
      />
    </>
  );
};
export default CoverMask;
