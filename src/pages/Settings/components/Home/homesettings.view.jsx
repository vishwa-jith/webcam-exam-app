import React from "react";
import {
  TextField,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
  Paper,
  useMediaQuery,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import { useTheme } from "@material-ui/core/styles";
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
}));
const HomeSettingsView = ({
  isEdit,
  names,
  handleChange,
  handleOperation,
  userDetails,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <form noValidate autoComplete="off">
        <Grid container flexDirection="column">
          <Grid item container justify="center" alignItems="center" sm={5}>
            <Box mx={3} mb={3}>
              <Paper elevation={3}>
                <img
                  src={`${baseUrl}images/profile.jpg`}
                  width="100%"
                  style={{ height: matches ? "75vh" : "40vh" }}
                  alt="Profile"
                />
              </Paper>
            </Box>
          </Grid>
          <Grid item container justify="center" alignItems="flex-start" sm={7}>
            <Grid item container xs={12}>
              <Paper style={{ width: "100%" }}>
                <List>
                  <ListItem>
                    <ListItemText>
                      <Typography
                        variant="h3"
                        id="username"
                        className={classes.username}
                      >
                        {userDetails && userDetails.username}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <>
                      <Box>
                        <Grid container flexDirection="column">
                          <TextField
                            size="small"
                            value={names.firstname}
                            variant={matches && !isEdit ? "standard" : "filled"}
                            label="First Name"
                            margin="dense"
                            id="firstname"
                            name="firstname"
                            inputProps={{ readOnly: isEdit ? false : true }}
                            onChange={handleChange}
                          />

                          <TextField
                            size="small"
                            value={names.lastname}
                            variant={matches && !isEdit ? "standard" : "filled"}
                            label="Last Name"
                            margin="dense"
                            id="lastname"
                            name="lastname"
                            inputProps={{ readOnly: isEdit ? false : true }}
                            onChange={handleChange}
                          />
                        </Grid>
                      </Box>
                    </>
                    <ListItemSecondaryAction>
                      <IconButton
                        onClick={handleOperation}
                        style={{
                          backgroundColor: isEdit ? "#4caf50" : "#90caf9",
                          color: "white",
                        }}
                      >
                        {isEdit ? <SaveIcon /> : <EditIcon />}
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default HomeSettingsView;
