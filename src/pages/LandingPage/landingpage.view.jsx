import React from "react";
import { useRouteMatch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Container, Box, Paper } from "@material-ui/core";
import Login from "./components/Login";
import Register from "./components/Register";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: "300px",
  },
}));
const LandingPageView = () => {
  const classes = useStyles();
  const match = useRouteMatch();
  return (
    <>
      <Container>
        <Box py={2}></Box>
        <Grid container spacing={2}>
          <Grid item xs={12} container>
            <Grid item xs={12} sm={10} md={6}></Grid>
            <Grid item xs={12} sm={10} md={6}>
              <Paper className={classes.paper}>
                {["/", "", "/register"].includes(match.path) && <Register />}
                {["/login"].includes(match.path) && <Login />}
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
      <Grid item xs={12}></Grid>
    </>
  );
};
export default LandingPageView;
