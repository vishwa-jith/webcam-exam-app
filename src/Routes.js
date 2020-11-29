import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTimer, getTime } from "./components/utils";
import { addWarningAlert } from "./redux/ActionCreators/alert.action";
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
      render={({ location }) => {
        console.log(location);
        return isLoggedIn ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
const ExamRoute = ({ children, component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const testDetails = useSelector(({ testDetails }) => testDetails);
  const start_sec = getTimer(
    new Date(testDetails.testDetails.start_time).toTimeString().split(":")
  );
  const now_sec = getTimer(new Date().toTimeString().split(":"));
  const end_sec = start_sec + 60 * testDetails.testDetails.duration_in_min;
  const isLoggedIn = !!localStorage.getItem("token");
  console.log(start_sec, now_sec, end_sec);
  if (start_sec > now_sec) {
    dispatch(
      addWarningAlert(`Exams starts in ${getTime(start_sec - now_sec)}`)
    );
  } else if (end_sec < now_sec) {
    dispatch(
      addWarningAlert(`Exam ended before ${getTime(now_sec - end_sec)}`)
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isLoggedIn &&
          start_sec <= now_sec &&
          end_sec > now_sec &&
          testDetails.testDetails ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/testtopics",
              state: { from: location },
            }}
          />
        );
      }}
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
      <ExamRoute component={Test} path="/test/:testId" exact />
      <PrivateRoute component={TestTopic} path="/testtopics" exact />
      <PrivateRoute component={Settings} path="/settings/home" exact />
      <PrivateRoute component={Settings} path="/settings/test" exact />
      <PrivateRoute component={Settings} path="/settings/company" exact />
      <PrivateRoute component={Help} path="/help" exact />
      <NormalRoute component={Home} path="/" exact />
      <NormalRoute component={Home} path="/login" exact />
      <NormalRoute component={Home} path="/register" exact />
    </Switch>
  );
};
export default Routes;
