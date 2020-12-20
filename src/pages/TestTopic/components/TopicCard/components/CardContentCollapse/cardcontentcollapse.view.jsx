import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

const CardContentCollapseView = ({ testtopicdata }) => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemText>
            <Typography paragraph>{testtopicdata.description}</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
};
export default CardContentCollapseView;
