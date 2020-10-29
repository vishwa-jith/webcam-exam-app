import React from "react";
import TopicCardView from "./topiccard.view";

const TopicCard = function ({
  testtopicdata,
  expandedList,
  handleExpandClick,
  topic_no,
}) {
  return (
    <>
      <TopicCardView
        topic_no={topic_no}
        testtopicdata={testtopicdata}
        expandedList={expandedList}
        handleExpandClick={handleExpandClick}
      />
    </>
  );
};

export default TopicCard;
