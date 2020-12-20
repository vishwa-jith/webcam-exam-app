import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTestDetails,
  addTestInfo,
} from "../../../../redux/ActionCreators/test.action";

import TopicCardView from "./topiccard.view";

const TopicCard = function ({
  testtopicdata,
  testinfo,
  topic_no,
  anchorE1List,
  handleAnchorE1Click,
  handleAnchorE1Close,
  Transition,
}) {
  //Const
  const dispatch = useDispatch();
  //States
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  //Event Handlers
  const handleClickOpen = () => {
    dispatch(addTestDetails(testtopicdata));
    if (testinfo) {
      dispatch(addTestInfo(testinfo));
    }
    setOpen(true);
  };
  const handleClose = () => {
    dispatch(addTestDetails(null));
    setOpen(false);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <TopicCardView
        topic_no={topic_no}
        testtopicdata={testtopicdata}
        testinfo={testinfo}
        expanded={expanded}
        handleExpandClick={handleExpandClick}
        anchorE1List={anchorE1List}
        handleAnchorE1Click={handleAnchorE1Click}
        handleAnchorE1Close={handleAnchorE1Close}
        Transition={Transition}
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default TopicCard;
