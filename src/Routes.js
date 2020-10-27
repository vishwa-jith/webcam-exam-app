import React from "react";
import { Switch, Route } from "react-router-dom";
import Consultant from "./pages/Test";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Home from "./pages/LandingPage";
const Routes = () => {
  return (
    <Switch>
      <Route component={Consultant} path="/test" exact />
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
