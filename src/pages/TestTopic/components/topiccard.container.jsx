import React from "react";
import TopicCardView from "./topiccard.view";

const TopicCard = function ({ done, markscored, expanded, handleExpandClick }) {
  return (
    <>
      <TopicCardView
        done={done}
        markscored={markscored}
        expanded={expanded}
        handleExpandClick={handleExpandClick}
      />
    </>
  );
};

export default TopicCard;
