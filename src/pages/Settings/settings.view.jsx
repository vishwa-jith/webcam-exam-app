import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

//Components
import HomeSettings from "./components/Home";
import TestResult from "../TestResult";

import { makeStyles, useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const theme = useTheme();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={theme.breakpoints.up("sm") ? 3 : 0}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const SettingsView = ({ value, handleChange, a11yProps }) => {
  const classes = useStyles();
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            label="HOME"
            {...a11yProps(0)}
            onClick={() => history.push("/settings/home")}
          />
          <Tab
            label="TEST DETAILS"
            {...a11yProps(1)}
            onClick={() => history.push("/settings/test")}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {["/settings/home"].includes(match.path) && <HomeSettings />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {["/settings/test"].includes(match.path) && <TestResult />}
      </TabPanel>
    </div>
  );
};
export default SettingsView;
