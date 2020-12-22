import React from "react";
import {
  Popper,
  Paper,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {
  teal,
  orange,
  deepOrange,
  indigo,
  green,
} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 400,
    overflow: "auto",
  },
  popper: {
    zIndex: 1,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderColor: `transparent transparent transparent ${theme.palette.background.paper}`,
      },
    },
  },
  arrow: {
    position: "absolute",
    fontSize: 7,
    width: "3em",
    height: "3em",
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid",
    },
  },
}));

const FilterOptions = ({ filterOpen, handleFilter, filterType, anchorRef }) => {
  const classes = useStyles();
  const [arrowRef, setArrowRef] = React.useState(null);
  return (
    <>
      <Popper
        className={classes.popper}
        open={filterOpen}
        anchorEl={anchorRef.current}
        placement="bottom"
        disablePortal={false}
        modifiers={{
          flip: {
            enabled: true,
          },
          preventOverflow: {
            enabled: true,
            boundariesElement: "scrollParent",
          },
          arrow: {
            enabled: true,
            element: arrowRef,
          },
        }}
      >
        <span className={classes.arrow} ref={setArrowRef} />
        <Paper className={classes.paper}>
          <DialogTitle>{"Filter Option's"}</DialogTitle>
          <List>
            <ListItem
              button
              dense
              selected={filterType === "DEFAULT"}
              onClick={() => handleFilter("DEFAULT")}
            >
              <ListItemIcon style={{ color: indigo[500] }}>
                {filterType === "DEFAULT" ? (
                  <CheckCircleIcon />
                ) : (
                  <FiberManualRecordIcon />
                )}
              </ListItemIcon>
              <ListItemText>ALL</ListItemText>
            </ListItem>
            <ListItem
              button
              dense
              selected={filterType === "LIVE"}
              onClick={() => handleFilter("LIVE")}
            >
              <ListItemIcon style={{ color: teal[500] }}>
                {filterType === "LIVE" ? (
                  <CheckCircleIcon />
                ) : (
                  <FiberManualRecordIcon />
                )}
              </ListItemIcon>
              <ListItemText>LIVE</ListItemText>
            </ListItem>
            <ListItem
              button
              dense
              selected={filterType === "RESUME"}
              onClick={() => handleFilter("RESUME")}
            >
              <ListItemIcon style={{ color: orange[500] }}>
                {filterType === "RESUME" ? (
                  <CheckCircleIcon />
                ) : (
                  <FiberManualRecordIcon />
                )}
              </ListItemIcon>
              <ListItemText>RESUME</ListItemText>
            </ListItem>
            <ListItem
              button
              dense
              selected={filterType === "COMPLETED"}
              onClick={() => handleFilter("COMPLETED")}
            >
              <ListItemIcon style={{ color: green[500] }}>
                {filterType === "COMPLETED" ? (
                  <CheckCircleIcon />
                ) : (
                  <FiberManualRecordIcon />
                )}
              </ListItemIcon>
              <ListItemText>COMPLETED</ListItemText>
            </ListItem>
            <ListItem
              button
              dense
              selected={filterType === "FRAUDULANT"}
              onClick={() => handleFilter("FRAUDULANT")}
            >
              <ListItemIcon style={{ color: deepOrange[500] }}>
                {filterType === "FRAUDULANT" ? (
                  <CheckCircleIcon />
                ) : (
                  <FiberManualRecordIcon />
                )}
              </ListItemIcon>
              <ListItemText>FRAUDULANT</ListItemText>
            </ListItem>
          </List>
        </Paper>
      </Popper>
    </>
  );
};
export default FilterOptions;
