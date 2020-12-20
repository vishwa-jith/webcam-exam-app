import React from "react";
import { NavLink } from "react-router-dom";
import {
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import TimelineIcon from "@material-ui/icons/Timeline";
import AssessmentIcon from "@material-ui/icons/Assessment";

const CardPopoverView = ({
  topic_no,
  anchorE1List,
  testtopicdata,
  handleAnchorE1Close,
}) => {
  return (
    <>
      <Popover
        id={topic_no}
        open={Boolean(anchorE1List[topic_no])}
        anchorEl={anchorE1List[topic_no]}
        onClose={handleAnchorE1Close}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        elevation={1}
      >
        <List dense>
          <ListItem
            button
            component={NavLink}
            to={`/testsolution/${testtopicdata._id}`}
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText>Test Report</ListItemText>
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to={`/leaderboard/${testtopicdata._id}`}
          >
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText>Leader Board</ListItemText>
          </ListItem>
        </List>
      </Popover>
    </>
  );
};
export default CardPopoverView;
