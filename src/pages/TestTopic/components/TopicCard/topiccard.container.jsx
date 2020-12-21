import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTestDetails,
  addTestInfo,
} from "../../../../redux/ActionCreators/test.action";

import TopicCardView from "./topiccard.view";

const TopicCard = function ({ testtopicdata, Transition }) {
  //Const
  const dispatch = useDispatch();
  //States
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [anchorE1, setAnchorE1] = useState();
  //Event Handlers
  const handleClickOpen = () => {
    dispatch(addTestDetails(testtopicdata));
    if (testtopicdata) {
      dispatch(addTestInfo(testtopicdata));
    }
    setOpen(true);
  };
  const handleClose = () => {
    dispatch(addTestDetails(null));
    setOpen(false);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleAnchorE1Click = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleAnchorE1Close = () => {
    setAnchorE1(null);
  };
  return (
    <>
      <TopicCardView
        testtopicdata={testtopicdata}
        expanded={expanded}
        handleExpandClick={handleExpandClick}
        anchorE1={anchorE1}
        handleAnchorE1Click={handleAnchorE1Click}
        handleAnchorE1Close={handleAnchorE1Close}
        Transition={Transition}
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default TopicCard;
