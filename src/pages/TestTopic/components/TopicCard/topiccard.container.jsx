import React, { useState } from "react";
import TopicCardView from "./topiccard.view";
import { useDispatch } from "react-redux";
import { addTestDetails } from "../../../../redux/ActionCreators/test.action";
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
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    dispatch(addTestDetails(testtopicdata));
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
