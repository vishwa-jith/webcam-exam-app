import React from "react";

import CardContentActionView from "./cardcontentaction.view";

const CardContentAction = ({
  topic_no,
  testinfo,
  expanded,
  testtopicdata,
  handleExpandClick,
}) => {
  return (
    <>
      <CardContentActionView
        topic_no={topic_no}
        testinfo={testinfo}
        expanded={expanded}
        testtopicdata={testtopicdata}
        handleExpandClick={handleExpandClick}
      />
    </>
  );
};
export default CardContentAction;
