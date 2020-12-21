import React from "react";

import CardPopoverView from "./cardpopover.view";

const CardPopover = ({ anchorE1, testtopicdata, handleAnchorE1Close }) => {
  return (
    <>
      <CardPopoverView
        anchorE1={anchorE1}
        testtopicdata={testtopicdata}
        handleAnchorE1Close={handleAnchorE1Close}
      />
    </>
  );
};
export default CardPopover;
