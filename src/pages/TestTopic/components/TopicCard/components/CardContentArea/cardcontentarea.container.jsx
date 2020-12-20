import React from "react";

import CardContentAreaView from "./cardcontentarea.view";

const CardContentArea = ({ testtopicdata, topic_no, testinfo }) => {
  return (
    <>
      <CardContentAreaView
        testtopicdata={testtopicdata}
        topic_no={topic_no}
        testinfo={testinfo}
      />
    </>
  );
};
export default CardContentArea;
