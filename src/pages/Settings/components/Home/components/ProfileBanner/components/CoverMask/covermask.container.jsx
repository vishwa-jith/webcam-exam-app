import React from "react";

import CoverMaskView from "./covermask.view";

const CoverMask = ({ openCover, handleCoverPopoverOpen }) => {
  return (
    <>
      <CoverMaskView
        openCover={openCover}
        handleCoverPopoverOpen={handleCoverPopoverOpen}
      />
    </>
  );
};
export default CoverMask;
