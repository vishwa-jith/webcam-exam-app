import React from "react";
import { List, ListItem, ListItemAvatar, Avatar } from "@material-ui/core";

import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentReturnIcon from "@material-ui/icons/AssignmentReturn";
import { orange, green, teal } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  assign: {
    backgroundColor: teal[500],
  },
  assdone: {
    backgroundColor: green[500],
  },
  assreturn: {
    backgroundColor: orange[500],
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
            <Avatar
              className={
                testinfo
                  ? !testinfo.end_time
                    ? classes.assreturn
                    : classes.assdone
                  : classes.assign
              }
            >
              {testinfo ? (
                !testinfo.end_time ? (
                  <AssignmentReturnIcon />
                ) : (
                  <AssignmentTurnedInIcon />
                )
              ) : (
                <AssignmentIcon />
              )}
            </Avatar>
          </ListItemAvatar>
        </ListItem>
      </List>
    </>
  );
};
export default CardHeaderAvatarView;
