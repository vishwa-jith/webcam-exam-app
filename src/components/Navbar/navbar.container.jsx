import React from "react";
import { useLocation } from "react-router-dom";
import { SIDEBAR_PATH_LIST } from "../constants";
import NavbarView from "./navbar.view";
export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  let location = useLocation();
  console.log(location.pathname);
  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const showSideBar = SIDEBAR_PATH_LIST.includes(location.pathname);

  return (
    <NavbarView
      open={open}
      handleDrawer={handleDrawer}
      handleDrawerClose={handleDrawerClose}
      showSideBar={showSideBar}
    />
  );
}
