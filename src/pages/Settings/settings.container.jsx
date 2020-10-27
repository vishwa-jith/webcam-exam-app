import React from "react";
import { useRouteMatch } from "react-router-dom";
import SettingsView from "./settings.view";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Settings() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const match = useRouteMatch();
  React.useEffect(() => {
    if (["/settings/company"].includes(match.path)) {
      handleChange(null, 2);
    } else if (["/settings/personal"].includes(match.path)) {
      handleChange(null, 1);
    } else {
      handleChange(null, 0);
    }
  }, [match.path]);
  return (
    <>
      <SettingsView
        value={value}
        handleChange={handleChange}
        a11yProps={a11yProps}
      />
    </>
  );
}
