import React from "react";
import { useHistory } from "react-router-dom";
import {
  Dialog,
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";

import AssignmentIcon from "@material-ui/icons/Assignment";
import AssessmentRoundedIcon from "@material-ui/icons/AssessmentRounded";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import TimerIcon from "@material-ui/icons/Timer";
import DescriptionIcon from "@material-ui/icons/Description";
import ErrorIcon from "@material-ui/icons/Error";
import ReceiptIcon from "@material-ui/icons/Receipt";
import CloseIcon from "@material-ui/icons/Close";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
}));

const TopicDialogView = ({ testtopicdata, Transition, open, handleClose }) => {
  //Const
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: "90vh" }}
        >
          <Grid item md={8} sm={10} xs={12}>
            <Paper elevation={2}>
              <List component="nav">
                {!testtopicdata.end_time && (
                  <ListItem
                    style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  >
                    <ListItemIcon>
                      <AssessmentRoundedIcon />
                    </ListItemIcon>
                    <ListItemText>Test Instructions</ListItemText>
                  </ListItem>
                )}
                <ListItem>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      {"Test Name - " + testtopicdata.test_name}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LibraryBooksIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>Exam Name - {testtopicdata.topic}</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TimerIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      Duration - {testtopicdata.duration_in_min} min
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ReceiptIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      Total Marks - {testtopicdata.total_marks}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ErrorIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      Pass Mark - {Math.round(0.35 * testtopicdata.total_marks)}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      Description - {testtopicdata.description}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  {testtopicdata.start_time ? (
                    <ListItemText>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          history.push(
                            !testtopicdata.end_time
                              ? `/test/${testtopicdata.test_id}`
                              : `/testsolution/${testtopicdata.test_id}`
                          );
                        }}
                      >
                        {!testtopicdata.end_time
                          ? "RESUME TEST"
                          : "VIEW SOLUTION"}
                      </Button>
                    </ListItemText>
                  ) : (
                    <ListItemText>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          history.push(`/test/${testtopicdata.test_id}`);
                        }}
                      >
                        START TEST
                      </Button>
                    </ListItemText>
                  )}
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};
export default TopicDialogView;
