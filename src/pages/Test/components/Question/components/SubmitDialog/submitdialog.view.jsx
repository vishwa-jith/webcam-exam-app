import React from "react";
import {
  Typography,
  Button,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { deepOrange, green, deepPurple } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  orange: {
    color: "white",
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: "white",
    backgroundColor: deepPurple[500],
  },
  green: {
    color: "white",
    backgroundColor: green[500],
  },
}));

const SubmitDialogView = ({
  open,
  answers,
  warning,
  done,
  handleSubmitAnswers,
  handleClose,
}) => {
  const classes = useStyles();
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Test Submit</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ textAlign: "center" }}>
            <Typography>
              Are you sure, Do you want to submit the test?
            </Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.green}>{`${done.length}`}</Avatar>
                </ListItemAvatar>
                <ListItemText>Answered</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.purple}>
                    {`${answers.length - done.length}`}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>Un Answered</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.orange}>{warning.length}</Avatar>
                </ListItemAvatar>
                <ListItemText>Marked</ListItemText>
              </ListItem>
            </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleSubmitAnswers}
            color="primary"
            variant="outlined"
          >
            Yes
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default SubmitDialogView;
