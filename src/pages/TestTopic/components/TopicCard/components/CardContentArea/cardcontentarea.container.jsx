import React from "react";

import CardContentAreaView from "./cardcontentarea.view";

const CardContentArea = ({
  testtopicdata,
  expandedList,
  topic_no,
  testinfo,
}) => {
  return (
    <>
      <CardContentAreaView
        testtopicdata={testtopicdata}
        expandedList={expandedList}
        topic_no={topic_no}
        testinfo={testinfo}
      />
    </>
  );
};
export default CardContentArea;
