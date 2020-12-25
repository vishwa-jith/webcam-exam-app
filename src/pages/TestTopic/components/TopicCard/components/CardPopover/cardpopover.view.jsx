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

const CardPopoverView = ({ anchorE1, testtopicdata, handleAnchorE1Close }) => {
  return (
    <>
      <Popover
        open={Boolean(anchorE1)}
        anchorEl={anchorE1}
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
          {testtopicdata.end_time && (
            <ListItem
              button
              component={NavLink}
              to={`/testsolution/${testtopicdata.test_id}`}
            >
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText>Test Report</ListItemText>
            </ListItem>
          )}
          <ListItem
            button
            component={NavLink}
            to={`/leaderboard/${testtopicdata.test_id}`}
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
