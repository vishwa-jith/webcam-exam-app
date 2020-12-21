import React from "react";
import { IconButton } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";

const CardHeaderActionView = ({ handleAnchorE1Click }) => {
  return (
    <>
      <IconButton
        onClick={(event) => {
          handleAnchorE1Click(event);
        }}
      >
        <MoreVertIcon />
      </IconButton>
    </>
  );
};
export default CardHeaderActionView;
