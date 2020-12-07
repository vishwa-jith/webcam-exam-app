import React from "react";
import {
  TextField,
  Grid,
  Typography,
  IconButton,
  Box,
  Paper,
  useMediaQuery,
  Avatar,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import PersonIcon from "@material-ui/icons/Person";
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
}));
const HomeSettingsView = ({
  isEdit,
  names,
  handleChange,
  handleOperation,
  userDetails,
  handleImageDialog,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

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
                onClick={handleImageDialog}
              >
                <Avatar className={classes.badge} style={{ marginTop: "75px" }}>
                  <PersonIcon style={{ fontSize: "200px" }} />
                </Avatar>
              </Grid>
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
