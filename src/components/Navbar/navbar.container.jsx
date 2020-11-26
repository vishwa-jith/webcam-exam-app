import React, { useEffect, useState } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SIDEBAR_PATH_LIST } from "../constants";
import NavbarView from "./navbar.view";
import Snackbar from "../SnackBar";
import BackDrop from "../BackDrop";
import {
  addUserDetails,
  addUserToken,
} from "../../redux/ActionCreators/user.action";
import {
  addFailureAlert,
  addSuccessAlert,
} from "../../redux/ActionCreators/alert.action";
import { getUserDetails, logoutUser } from "../utils/requests";
export default function Navbar() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    getUserDetails().then((userDetails) => {
      if (localStorage.getItem("token")) {
        dispatch(addUserToken(localStorage.getItem("token")));
      }
      dispatch(addUserDetails(userDetails));
    });
    // eslint-disable-next-line
  }, []);
  const handleLogout = () => {
    // localStorage.removeItem("token");
    // history.push("/login");
    logoutUser()
      .then((res) => {
        dispatch(addSuccessAlert(res.message));
        localStorage.removeItem("token");
        history.push("/login");
      })
      .catch((error) => dispatch(addFailureAlert(error.response.data.message)));
  };
  const handleDrawer = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const testMatch = useRouteMatch("/test/:testId");
  const showSideBar =
    SIDEBAR_PATH_LIST.includes(location.pathname) || !!testMatch;
  return (
    <>
      <NavbarView
        open={open}
        handleDrawer={handleDrawer}
        handleDrawerClose={handleDrawerClose}
        showSideBar={showSideBar}
        handleLogout={handleLogout}
      />
      <Snackbar />
      <BackDrop />
    </>
  );
}
