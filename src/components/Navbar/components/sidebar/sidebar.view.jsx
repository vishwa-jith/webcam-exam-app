import React from "react";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link, useLocation } from "react-router-dom";
const SideBarView = () => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <List>
        <ListItem
          button
          component={Link}
          to={location.pathname === "/test" ? "/test" : "/testtopics"}
        >
          <ListItemIcon>
            {location.pathname === "/test" ? (
              <AssessmentIcon />
            ) : (
              <AssignmentIcon />
            )}
          </ListItemIcon>
          <ListItemText
            primary={location.pathname === "/test" ? "Test" : "Topics"}
          />
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
      </List>
      <Divider />
      <List>
        <ListItem
          button
          onClick={() => {
            localStorage.removeItem("token");
            history.push("/");
          }}
        >
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
