import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
