import React from "react";
import {
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import MarkunreadIcon from "@material-ui/icons/Markunread";

const CardPopoverView = ({ topic_no, anchorE1List, handleAnchorE1Close }) => {
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
          <ListItem dense button>
            <ListItemIcon>
              <MarkunreadIcon />
            </ListItemIcon>
            <ListItemText>Mark as Complete</ListItemText>
          </ListItem>
        </List>
      </Popover>
    </>
  );
};
export default CardPopoverView;
