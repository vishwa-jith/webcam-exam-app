import React from "react";
import { Switch, Route } from "react-router-dom";
import Test from "./pages/Test";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Home from "./pages/LandingPage";
import TestTopic from "./pages/TestTopic";

const Routes = () => {
  return (
    <Switch>
      <Route component={Test} path="/test/:testId" exact />
      <Route component={TestTopic} path="/testtopics" exact />
      <Route component={Settings} path="/settings/home" exact />
      <Route component={Settings} path="/settings/personal" exact />
      <Route component={Settings} path="/settings/company" exact />
      <Route component={Help} path="/help" exact />
      <Route component={Home} path="/" exact />
      <Route component={Home} path="/login" exact />
      <Route component={Home} path="/register" exact />
    </Switch>
  );
};
export default Routes;
