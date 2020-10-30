import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Test from "./pages/Test";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Home from "./pages/LandingPage";
import TestTopic from "./pages/TestTopic";
const PrivateRoute = ({ children, component: Component, ...rest }) => {
  const isLoggedIn = !!localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
const NormalRoute = ({ children, component: Component, ...rest }) => {
  const isLoggedIn = !localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/testtopics",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute component={Test} path="/test/:testId" exact />
      <PrivateRoute component={TestTopic} path="/testtopics" exact />
      <PrivateRoute component={Settings} path="/settings/home" exact />
      <PrivateRoute component={Settings} path="/settings/personal" exact />
      <PrivateRoute component={Settings} path="/settings/company" exact />
      <PrivateRoute component={Help} path="/help" exact />
      <NormalRoute component={Home} path="/" exact />
      <NormalRoute component={Home} path="/login" exact />
      <NormalRoute component={Home} path="/register" exact />
    </Switch>
  );
};
export default Routes;
