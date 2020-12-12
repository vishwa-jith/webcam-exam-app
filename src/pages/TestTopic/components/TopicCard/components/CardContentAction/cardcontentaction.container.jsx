import React from "react";

import CardContentActionView from "./cardcontentaction.view";

const CardContentAction = ({
  topic_no,
  testinfo,
  expandedList,
  testtopicdata,
  handleExpandClick,
}) => {
  return (
    <>
      <CardContentActionView
        topic_no={topic_no}
        testinfo={testinfo}
        expandedList={expandedList}
        testtopicdata={testtopicdata}
        handleExpandClick={handleExpandClick}
      />
    </>
  );
};
export default CardContentAction;
