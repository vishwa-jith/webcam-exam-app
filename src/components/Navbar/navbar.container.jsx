import React, { useEffect, useState } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SIDEBAR_PATH_LIST } from "../constants";
import NavbarView from "./navbar.view";
import Snackbar from "../SnackBar";
import {
  addUserDetails,
  addUserToken,
} from "../../redux/ActionCreators/user.action";
import { getUserDetails } from "../utils/requests";
export default function Navbar() {
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
      />
      <Snackbar />
    </>
  );
}
