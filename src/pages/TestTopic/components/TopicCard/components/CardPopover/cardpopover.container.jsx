import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import CardPopoverView from "./cardpopover.view";
import { addTestDetails } from "../../../../../../redux/ActionCreators/test.action";

const CardPopover = ({ anchorE1, testtopicdata, handleAnchorE1Close }) => {
  //Const
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTestDetails(testtopicdata));
  }, [dispatch, testtopicdata]);
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
