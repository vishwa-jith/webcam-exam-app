import React from "react";
import {
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { makeStyles } from "@material-ui/core/styles";
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
const Login = ({
  showPass,
  loginDetails,
  handleChange,
  handleClickShowPassword,
  handleMouseDownPassword,
  handleSubmit,
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
        <Box my={2}>
          <FormControl
            variant="outlined"
            size="small"
            style={{ width: "269px" }}
          >
            <InputLabel htmlFor="User Name">User Name</InputLabel>
            <OutlinedInput
              className={classes.field}
              value={loginDetails.username}
              id="username"
              name="username"
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
        <Box mb={3}>
          <FormControl variant="outlined" size="small">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              name="password"
              type={showPass ? "text" : "password"}
              value={loginDetails.password}
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
        </Box>
        <Link to="/">Don't Have an Account ?</Link>
      </form>

      <Button color="primary" variant="contained" onClick={handleSubmit}>
        <Box px={2}>Login</Box>
      </Button>
    </Box>
  );
};
export default Login;
