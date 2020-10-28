import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";
import SkipPreviousRoundedIcon from "@material-ui/icons/SkipPreviousRounded";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ddd",
  },
}));
const CustomContextView = ({ items, coordinates }) => {
  const classes = useStyles();
  var myStyle = {
    position: "absolute",
    top: `${coordinates.y}px`,
    left: `${coordinates.x + 5}px`,
  };
  return (
    <List style={myStyle} className={classes.root}>
      {items.map((item, index, arr) => {
        return (
          <ListItem key={index} button color="primary">
            <ListItemIcon>
              {item.label === "Next" ? <SkipNextRoundedIcon /> : <SkipPreviousRoundedIcon />}
            </ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};
export default CustomContextView;
