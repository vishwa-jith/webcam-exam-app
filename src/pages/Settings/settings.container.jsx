import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

import SettingsView from "./settings.view";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Settings() {
  //Const
  const match = useRouteMatch();
  //States
  const [value, setValue] = useState(0);
  //useEffect
  useEffect(() => {
    if (["/settings/company"].includes(match.path)) {
      handleChange(null, 2);
    } else if (["/settings/test"].includes(match.path)) {
      handleChange(null, 1);
    } else {
      handleChange(null, 0);
    }
  }, [match.path]);
  //Event Handlers
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
