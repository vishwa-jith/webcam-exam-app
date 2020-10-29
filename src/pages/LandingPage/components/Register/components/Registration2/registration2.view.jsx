import React from "react";
import {
  Button,
  Box,
  Typography,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircle from "@material-ui/icons/AccountCircle";

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
    //margin: theme.spacing(1, 0),
  },
}));
const Registration2View = ({
  registrationDetails,
  showPass,
  handleChange,
  handleStep,
  addUser,
  handleMouseDownPassword,
  handleClickShowPassword,
}) => {
  const classes = useStyles();
  return (
    <Box p={3} className={classes.root}>
      <List>
        <ListItem>
          <ListItemIcon>
            <IconButton color="primary" onClick={handleStep}>
              <ArrowBackIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6">Join Us for Free</Typography>
          </ListItemText>
        </ListItem>
      </List>
      <form autoComplete="off">
        <Box my={2}>
          <FormControl
            variant="outlined"
            size="small"
            style={{ width: "269px" }}
          >
            <InputLabel htmlFor="User Name">User Name</InputLabel>
            <OutlinedInput
              id="username"
              name="username"
              className={classes.field}
              value={registrationDetails.username}
              onChange={handleChange}
              labelWidth={85}
              endAdornment={
                <InputAdornment position="end">
                  <AccountCircle style={{ color: "#777" }} />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <FormControl variant="outlined" size="small">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            type={showPass ? "text" : "password"}
            value={registrationDetails.password}
            onChange={handleChange}
            labelWidth={70}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
      <Button
        color="primary"
        variant="contained"
        onClick={() => addUser(registrationDetails)}
      >
        Register
      </Button>
    </Box>
  );
};
export default Registration2View;
