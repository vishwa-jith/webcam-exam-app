import React from "react";
import { useRouteMatch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Container, Box, Paper } from "@material-ui/core";
import Login from "./components/Login";
import Register from "./components/Register";
import { makeStyles } from "@material-ui/core/styles";
import { baseUrl } from "../../components/constants";
const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: "300px",
    width: "100%",
  },
}));
const LandingPageView = () => {
  const classes = useStyles();
  const match = useRouteMatch();
  return (
    <>
      <Grid item xs={12}>
        <Paper>
          <img
            width="100%"
            style={{ height: "90vh" }}
            src={`${baseUrl}images/loginExam.jpg`}
            alt="login Exam"
          />
        </Paper>
      </Grid>
      <Container>
        <Box py={2}></Box>
        <Grid container spacing={2}>
          <Grid item xs={12} container>
            <Grid
              item
              xs={12}
              sm={10}
              md={6}
              style={{ height: "80vh" }}
              container
              alignItems="center"
            >
              <Box pr={2}>
                <Paper>
                  <img
                    width="100%"
                    height="350px"
                    src={`${baseUrl}images/registerExam.jpg`}
                    alt="login Exam"
                  />
                </Paper>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={10}
              md={6}
              style={{ height: "80vh" }}
              container
              alignItems="center"
            >
              <Paper className={classes.paper}>
                {["/", "", "/register"].includes(match.path) && <Register />}
                {["/login"].includes(match.path) && <Login />}
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
      <Grid item xs={12}>
        <Paper>
          <img
            width="100%"
            style={{ height: "90vh" }}
            src={`${baseUrl}images/Home.jpg`}
            alt="login Exam"
          />
        </Paper>
      </Grid>
    </>
  );
};
export default LandingPageView;
