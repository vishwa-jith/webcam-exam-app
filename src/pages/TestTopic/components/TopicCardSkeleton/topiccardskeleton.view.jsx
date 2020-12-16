import React from "react";
import { Card, CardHeader, CardContent, Grid, Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
  },
  media: {
    height: 275,
  },
}));

const TopicCardSkeleton = () => {
  //Const
  const classes = useStyles();

  return (
    <Grid item xs={12} md={3}>
      <Box mx={1}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Skeleton
                animation="wave"
                variant="circle"
                width={40}
                height={40}
              />
            }
            title={<Skeleton animation="wave" height={20} width={60} />}
            subheader={<Skeleton animation="wave" height={15} width={125} />}
          />
          <Skeleton animation="wave" variant="rect" className={classes.media} />
          <CardContent>
            <React.Fragment>
              <Skeleton animation="wave" height={15} width={125} />
            </React.Fragment>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};
export default TopicCardSkeleton;
