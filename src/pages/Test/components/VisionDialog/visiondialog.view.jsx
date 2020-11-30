import React from "react";
import { Button, Dialog, AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TestVision from "./component/TestVision";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
const VisionDialogView = ({
  openDialog,
  handleClickOpenDialog,
  handleCloseDialog,
}) => {
  const classes = useStyles();
  return (
    <>
      <Dialog fullScreen open={openDialog} onClose={handleCloseDialog}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Exam App
            </Typography>
          </Toolbar>
        </AppBar>
        <TestVision
          openDialog={openDialog}
          handleClickOpenDialog={handleClickOpenDialog}
          handleCloseDialog={handleCloseDialog}
        />
      </Dialog>
    </>
  );
};
export default VisionDialogView;
