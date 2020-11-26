import React from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
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
        <Box m={5}>
          <Grid container style={{ height: "90vh" }}>
            <Grid item xs>
              <List component="nav">
                <ListItem
                  style={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  <ListItemIcon>
                    <AssessmentRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>Test Instructions</ListItemText>
                </ListItem>
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
              </List>
              <Box m={3}>
                <Typography style={{ fontWeight: "bolder" }}>
                  Do you want to start the test?
                </Typography>
                <Box m={3}>
                  <Grid container alignItems="center">
                    <Grid item xs={6} md={1}>
                      <Box px={2} py={1}>
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={() => {
                            history.push(`/test/${testtopicdata._id}`);
                          }}
                        >
                          YES
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={1}>
                      <Box px={2} py={1}>
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={handleClose}
                        >
                          NO
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </>
  );
};
export default TopicDialogView;
