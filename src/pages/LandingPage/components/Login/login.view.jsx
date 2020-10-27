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
        <TextField
          className={classes.field}
          variant="outlined"
          label="User Name"
          id="username"
          name="username"
          size="small"
          value={loginDetails.username}
          onChange={handleChange}
        />
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
        <Link to="/">Don't Have an Account ?</Link>
      </form>
      <Button color="primary" variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </Box>
  );
};
export default Login;
