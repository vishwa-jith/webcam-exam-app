import React from "react";
import { IconButton } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";

const CardHeaderActionView = ({ topic_no, handleAnchorE1Click }) => {
  return (
    <>
      <IconButton
        aria-describedby={topic_no}
        onClick={(event) => {
          handleAnchorE1Click(event, topic_no);
        }}
      >
        <MoreVertIcon />
      </IconButton>
    </>
  );
};
export default CardHeaderActionView;
