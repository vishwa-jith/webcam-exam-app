import React from "react";

import CardHeaderActionView from "./cardheaderaction.view";

const CardHeaderAction = ({ topic_no, handleAnchorE1Click }) => {
  return (
    <>
      <CardHeaderActionView
        topic_no={topic_no}
        handleAnchorE1Click={handleAnchorE1Click}
      />
    </>
  );
};
export default CardHeaderAction;
