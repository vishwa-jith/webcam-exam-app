import React from "react";
import { Avatar } from "@material-ui/core";

import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentReturnIcon from "@material-ui/icons/AssignmentReturn";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import { orange, green, teal, deepOrange } from "@material-ui/core/colors";

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
  assviolation: {
    backgroundColor: deepOrange[500],
  },
}));

const CardHeaderAvatarView = ({ testinfo }) => {
  //Const
  const classes = useStyles();
  return (
    <>
      <Avatar
        className={
          testinfo
            ? testinfo.is_fraudulant
              ? classes.assviolation
              : !testinfo.end_time
              ? classes.assreturn
              : classes.assdone
            : classes.assign
        }
      >
        {testinfo ? (
          testinfo.is_fraudulant ? (
            <AssignmentLateIcon />
          ) : !testinfo.end_time ? (
            <AssignmentReturnIcon />
          ) : (
            <AssignmentTurnedInIcon />
          )
        ) : (
          <AssignmentIcon />
        )}
      </Avatar>
    </>
  );
};
export default CardHeaderAvatarView;
