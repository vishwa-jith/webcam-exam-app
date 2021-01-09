import React from "react";
import {
  Typography,
  Grid,
  Paper,
  Button,
  Tooltip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AssessmentIcon from "@material-ui/icons/Assessment";
import FaceIcon from "@material-ui/icons/Face";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../../../../../../components/constants";
const DefaultAvatarErrorView = () => {
  const history = useHistory();
  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={10}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Avatar></Avatar>
              </ListItemIcon>
              <ListItemText>
                <Typography>
                  Please update your profile image with Passport size photo.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8} md={3}>
          <Paper
            style={{
              backgroundColor: "black",
              width: "100%",
              height: "50vh",
              backgroundImage: `url( ${baseUrl}images/default_avatar.png )`,
              cursor: "pointer",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              borderRadius: "75%",
            }}
            elevation={7}
          ></Paper>
        </Grid>
        <Grid container item xs={10} justify="space-between">
          <Tooltip title="Test Topic" arrow>
            <Button
              variant="contained"
              disableElevation
              disableRipple
              color="primary"
              size="small"
              startIcon={<ArrowBackIcon />}
              endIcon={<AssessmentIcon />}
              onClick={() => history.goBack()}
            >
              Test Topic
            </Button>
          </Tooltip>
          <Tooltip title="Update Avatar" arrow>
            <Button
              variant="contained"
              disableElevation
              disableRipple
              color="primary"
              size="small"
              endIcon={<FaceIcon />}
              onClick={() => history.push("/settings/home")}
            >
              Update Avatar
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};
export default DefaultAvatarErrorView;
