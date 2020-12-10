import React from "react";
import {
  Button,
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      padding: theme.spacing(1),
    },
    "& form": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  field: {
    margin: theme.spacing(1, 0),
  },
}));

const Registration1View = ({
  registrationDetails,
  handleChange,
  handleStep,
}) => {
  const classes = useStyles();
  return (
    <Box p={3} className={classes.root}>
      <List>
        <ListItem>
          <ListItemIcon>
            <IconButton color="primary">
              <LockOpenIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6">Join Us for Free</Typography>
          </ListItemText>
        </ListItem>
      </List>
      <form autoComplete="off">
        <TextField
          className={classes.field}
          variant="outlined"
          label="First Name"
          id="firstname"
          name="firstname"
          size="small"
          value={registrationDetails.firstname}
          onChange={handleChange}
          style={{ width: "270px" }}
        />
        <TextField
          className={classes.field}
          variant="outlined"
          label="Last Name"
          id="lastname"
          name="lastname"
          size="small"
          value={registrationDetails.lastname}
          onChange={handleChange}
          style={{ width: "270px" }}
        />
        <Box py={2}>
          <Link to="/login">Already Have an account ?</Link>
        </Box>
      </form>
      <Button color="primary" variant="contained" onClick={handleStep}>
        Next
      </Button>
    </Box>
  );
};
export default Registration1View;
