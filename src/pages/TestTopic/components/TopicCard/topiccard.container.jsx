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
  expandedList,
  handleExpandClick,
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

  return (
    <>
      <TopicCardView
        topic_no={topic_no}
        testtopicdata={testtopicdata}
        testinfo={testinfo}
        expandedList={expandedList}
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
