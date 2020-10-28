import React from "react";
import TopicCardView from "./topiccard.view";

const TopicCard = function ({ testtopicdata, expanded, handleExpandClick }) {
  return (
    <>
      <TopicCardView
        testtopicdata={testtopicdata}
        expanded={expanded}
        handleExpandClick={handleExpandClick}
      />
    </>
  );
};

export default TopicCard;
