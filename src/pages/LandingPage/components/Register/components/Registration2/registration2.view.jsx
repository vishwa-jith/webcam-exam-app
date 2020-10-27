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
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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
        <TextField
          className={classes.field}
          variant="outlined"
          label="User Name"
          id="username"
          name="username"
          size="small"
          value={registrationDetails.username}
          onChange={handleChange}
        />
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
        <FormControlLabel
          control={
            <Checkbox
              id="is_doctor"
              name="is_doctor"
              checked={registrationDetails.is_doctor}
              color="primary"
              onChange={handleChange}
            />
          }
          label="I am a Doctor"
        />
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
