import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  username: {
    fontSize:
      "calc( 25px + ( 50 - 25 ) * ( ( 100vw - 300px ) / ( 1600 - 300 ) ) )",
  },
}));

const ProfileContentView = ({ userDetails, isEdit, names, handleChange }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Typography className={classes.username} color="testPrimary">
          {userDetails ? (
            userDetails.username
          ) : (
            <Skeleton animation="wave" height={75} width={250} />
          )}
        </Typography>
        <Typography color="textSecondary">
          <small>
            <strong>
              {isEdit ? (
                <>
                  <input
                    style={{
                      width: "100px",
                      borderColor: "inherit",
                      webkitBoxShadow: "none",
                      boxShadow: "none",
                      outline: "none",
                    }}
                    value={names.firstname}
                    id="firstname"
                    name="firstname"
                    onChange={handleChange}
                  />
                  <input
                    style={{
                      width: "50px",
                      borderColor: "inherit",
                      webkitBoxShadow: "none",
                      boxShadow: "none",
                      outline: "none",
                    }}
                    value={names.lastname}
                    id="lastname"
                    name="lastname"
                    onChange={handleChange}
                  />
                </>
              ) : names.firstname ? (
                `@ ${names.firstname} ${names.lastname}`
              ) : (
                <Skeleton animation="wave" height={15} width={100} />
              )}
            </strong>
          </small>
        </Typography>
      </Grid>
    </>
  );
};
export default ProfileContentView;
