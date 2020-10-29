import React from "react";
import TopicCardView from "./topiccard.view";

const TopicCard = function ({
  testtopicdata,
  expandedList,
  handleExpandClick,
  topic_no,
  anchorE1List,
  handleAnchorE1Click,
  handleAnchorE1Close,
}) {
  return (
    <>
      <TopicCardView
        topic_no={topic_no}
        testtopicdata={testtopicdata}
        expandedList={expandedList}
        handleExpandClick={handleExpandClick}
        anchorE1List={anchorE1List}
        handleAnchorE1Click={handleAnchorE1Click}
        handleAnchorE1Close={handleAnchorE1Close}
      />
    </>
  );
};

export default TopicCard;
