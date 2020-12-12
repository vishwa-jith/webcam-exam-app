import React, { useEffect, useState } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SIDEBAR_PATH_LIST } from "../constants";
import {
  addUserDetails,
  addUserToken,
} from "../../redux/ActionCreators/user.action";
import {
  addFailureAlert,
  addSuccessAlert,
} from "../../redux/ActionCreators/alert.action";
import { getUserDetails, logoutUser } from "../utils/requests";

//Components
import NavbarView from "./navbar.view";
import Snackbar from "../SnackBar";
import BackDrop from "../BackDrop";
import ImageDialog from "../ImageDialog";
import ImageViewer from "../ImageViewer";

export default function Navbar() {
  //Const
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const testMatch = useRouteMatch("/test/:testId");
  const testSolutionMatch = useRouteMatch("/testsolution/:testId");
  const showSideBar =
    SIDEBAR_PATH_LIST.includes(location.pathname) ||
    !!testMatch ||
    !!testSolutionMatch;
  //States
  const [open, setOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  //useEffect
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserDetails().then((userdetails) => {
        setUserDetails(userdetails);
        dispatch(addUserToken(localStorage.getItem("token")));
        dispatch(addUserDetails(userdetails));
      });
    }
  }, [showSideBar, dispatch]);
  //Event Handlers
  const handleLogout = () => {
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

  return (
    <>
      <NavbarView
        open={open}
        handleDrawer={handleDrawer}
        handleDrawerClose={handleDrawerClose}
        showSideBar={showSideBar}
        handleLogout={handleLogout}
        testMatch={testMatch}
        userDetails={userDetails}
      />
      <Snackbar />
      <BackDrop />
      <ImageDialog />
      <ImageViewer />
    </>
  );
}
