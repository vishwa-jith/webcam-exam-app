import React from "react";
import { List, ListItem, ListItemAvatar, Avatar } from "@material-ui/core";

import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AssignmentIcon from "@material-ui/icons/Assignment";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  assign: {
    backgroundColor: theme.palette.warning.main,
  },
  assdone: {
    backgroundColor: theme.palette.success.main,
  },
}));

const CardHeaderAvatarView = ({ testinfo }) => {
  //Const
  const classes = useStyles();
  return (
    <>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={testinfo ? classes.assdone : classes.assign}>
              {testinfo ? <AssignmentTurnedInIcon /> : <AssignmentIcon />}
            </Avatar>
          </ListItemAvatar>
        </ListItem>
      </List>
    </>
  );
};
export default CardHeaderAvatarView;
