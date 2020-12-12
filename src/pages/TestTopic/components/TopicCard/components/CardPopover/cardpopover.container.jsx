import React from "react";

import CardPopoverView from "./cardpopover.view";

const CardPopover = ({ topic_no, anchorE1List, handleAnchorE1Close }) => {
  return (
    <>
      <CardPopoverView
        topic_no={topic_no}
        anchorE1List={anchorE1List}
        handleAnchorE1Close={handleAnchorE1Close}
      />
    </>
  );
};
export default CardPopover;
