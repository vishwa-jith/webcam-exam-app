import React from "react";
import { Grid, Typography } from "@material-ui/core";

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
  );
};
export default ProfileContentView;
