import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const SideBarView = ({ handleLogout, testMatch, userDetails }) => {
  //Const
  const location = useLocation();

  return (
    <>
      <List>
        <ListItem>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText
            primary={userDetails ? userDetails.username : "Anonymous"}
          />
        </ListItem>
        <ListItem
          button
          component={Link}
          to={!testMatch ? "/testtopics" : location.pathname}
        >
          <ListItemIcon>
            {!testMatch ? <AssessmentIcon /> : <AssignmentIcon />}
          </ListItemIcon>
          <ListItemText primary={!testMatch ? "Topic" : "Test"} />
        </ListItem>
        {!testMatch && (
          <>
            <ListItem button component={Link} to="/testreport">
              <ListItemIcon>
                <AssignmentTurnedInIcon />
              </ListItemIcon>
              <ListItemText primary={"Test Report"} />
            </ListItem>
            <ListItem button component={Link} to="/settings/home">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"Setting"} />
            </ListItem>
            <ListItem button component={Link} to="/help">
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary={"Help"} />
            </ListItem>
          </>
        )}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItem>
      </List>
    </>
  );
};
export default SideBarView;
