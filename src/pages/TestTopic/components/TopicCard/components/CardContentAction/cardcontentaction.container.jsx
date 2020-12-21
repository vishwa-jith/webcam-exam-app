import React from "react";

import CardContentActionView from "./cardcontentaction.view";

const CardContentAction = ({ expanded, testtopicdata, handleExpandClick }) => {
  return (
    <>
      <CardContentActionView
        expanded={expanded}
        testtopicdata={testtopicdata}
        handleExpandClick={handleExpandClick}
      />
    </>
  );
};
export default CardContentAction;
