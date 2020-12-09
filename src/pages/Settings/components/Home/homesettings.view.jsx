import React from "react";
import {
  Popover,
  Grid,
  Typography,
  IconButton,
  Box,
  Paper,
  useMediaQuery,
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
  popover: {
    // pointerEvents: "none",
  },
}));
const HomeSettingsView = ({
  isEdit,
  names,
  coverAnchorEl,
  handleChange,
  handleOperation,
  userDetails,
  handleImageDialog,
  handleCoverPopoverOpen,
  handleCoverPopoverClose,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const open = Boolean(coverAnchorEl);
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
                }}
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseOver={handleCoverPopoverOpen}
              ></Grid>

              <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                  paper: classes.paper,
                }}
                open={open}
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
                  <ListItem button>
                    <ListItemIcon>
                      <AddAPhotoIcon />
                    </ListItemIcon>
                    <ListItemText>Upload Image</ListItemText>
                  </ListItem>
                  <ListItem button onClick={handleImageDialog}>
                    <ListItemIcon>
                      <ImageIcon />
                    </ListItemIcon>
                    <ListItemText>View Image</ListItemText>
                  </ListItem>
                </List>
              </Popover>
              <Avatar
                className={classes.badge}
                style={{ position: "absolute", marginTop: "75px" }}
              >
                <PersonIcon style={{ fontSize: "200px" }} />
              </Avatar>
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
    </>
  );
};
export default HomeSettingsView;
