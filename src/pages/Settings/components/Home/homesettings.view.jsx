import React from "react";
import {
  Popover,
  Grid,
  Typography,
  IconButton,
  Box,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import PersonIcon from "@material-ui/icons/Person";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import ImageIcon from "@material-ui/icons/Image";
import { useTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { baseUrl } from "../../../../components/constants";
import { makeStyles } from "@material-ui/core/styles";
import ImageUpload from "./components/ImageUpload";
const useStyles = makeStyles((theme) => ({
  username: {
    fontSize:
      "calc( 25px + ( 50 - 25 ) * ( ( 100vw - 300px ) / ( 1600 - 300 ) ) )",
  },
  save: {
    background: "#4caf50",
    color: "white",
  },
  edit: {
    backgroundColor: "#90caf9",
    color: "white",
  },
  badge: {
    width: theme.breakpoints.up("sm") ? "200px" : "100px",
    height: theme.breakpoints.up("sm") ? "200px" : "100px",
  },
}));
const HomeSettingsView = ({
  isEdit,
  names,
  coverAnchorEl,
  profileAnchorEl,
  profileUploadOpen,
  handleChange,
  handleOperation,
  userDetails,
  handleImageDialog,
  handleCoverPopoverOpen,
  handleCoverPopoverClose,
  handleProfilePopoverOpen,
  handleProfilePopoverClose,
  handleProfileUploadClickOpen,
  handleProfileUploadClose,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = theme.breakpoints.up("sm");
  const openCover = Boolean(coverAnchorEl);
  const openProfile = Boolean(profileAnchorEl);
  return (
    <>
      <form noValidate autoComplete="off">
        <Grid container flexDirection="column" component={Paper}>
          <Grid item container justify="center" alignItems="center">
            <Grid item container xs={12} justify="center">
              <Grid
                container
                item
                xs={12}
                justify="center"
                style={{
                  height: "200px",
                  backgroundColor: grey[200],
                  backgroundImage: `url( ${baseUrl}images/default_cover.jpg )`,
                  cursor: "pointer",
                }}
                aria-owns={openCover ? "mouse-over-cover-popover" : undefined}
                aria-haspopup="true"
                onClick={handleCoverPopoverOpen}
              ></Grid>
              <Popover
                id="mouse-over-cover-popover"
                open={openCover}
                anchorEl={coverAnchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handleCoverPopoverClose}
                disableRestoreFocus
              >
                <List>
                  <ListItem button dense>
                    <ListItemIcon>
                      <AddAPhotoIcon />
                    </ListItemIcon>
                    <ListItemText>Upload Image</ListItemText>
                  </ListItem>
                  <ListItem button dense onClick={handleImageDialog}>
                    <ListItemIcon>
                      <ImageIcon />
                    </ListItemIcon>
                    <ListItemText>View Image</ListItemText>
                  </ListItem>
                </List>
              </Popover>
              <Avatar
                className={classes.badge}
                style={{
                  position: "absolute",
                  marginTop: "75px",
                  cursor: "pointer",
                }}
                aria-owns={
                  openProfile ? "mouse-over-profile-popover" : undefined
                }
                aria-haspopup="true"
                onClick={handleProfilePopoverOpen}
              >
                <PersonIcon style={{ fontSize: matches ? "200px" : "100px" }} />
              </Avatar>
              <Popover
                id="mouse-over-profile-popover"
                open={openProfile}
                anchorEl={profileAnchorEl}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                onClose={handleProfilePopoverClose}
                disableRestoreFocus
              >
                <List>
                  <ListItem button dense onClick={handleProfileUploadClickOpen}>
                    <ListItemIcon>
                      <AddAPhotoIcon />
                    </ListItemIcon>
                    <ListItemText>Upload Image</ListItemText>
                  </ListItem>
                  <ListItem button dense onClick={handleImageDialog}>
                    <ListItemIcon>
                      <ImageIcon />
                    </ListItemIcon>
                    <ListItemText>View Image</ListItemText>
                  </ListItem>
                </List>
              </Popover>
              <Grid item container xs={12} justify="flex-end">
                <IconButton
                  onClick={handleOperation}
                  style={{
                    backgroundColor: isEdit ? "#4caf50" : "#90caf9",
                    color: "white",
                  }}
                >
                  {isEdit ? <SaveIcon /> : <EditIcon />}
                </IconButton>
              </Grid>
              <Grid item container xs={12} component={Box} p={2}>
                <>
                  <Grid item xs={12}>
                    <Typography className={classes.username}>
                      {userDetails && userDetails.username}
                    </Typography>
                    <Typography>
                      <small>
                        <strong>
                          {isEdit ? (
                            <>
                              <input
                                style={{ width: "100px" }}
                                value={names.firstname}
                                id="firstname"
                                name="firstname"
                                onChange={handleChange}
                              />
                              <input
                                style={{ width: "50px" }}
                                value={names.lastname}
                                id="lastname"
                                name="lastname"
                                onChange={handleChange}
                              />
                            </>
                          ) : (
                            "# " + names.firstname + " " + names.lastname
                          )}
                        </strong>
                      </small>
                    </Typography>
                  </Grid>
                </>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <ImageUpload
        profileUploadOpen={profileUploadOpen}
        handleProfileUploadClose={handleProfileUploadClose}
      />
    </>
  );
};
export default HomeSettingsView;
