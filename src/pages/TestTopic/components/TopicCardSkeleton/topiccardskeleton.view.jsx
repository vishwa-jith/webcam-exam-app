import React from "react";
import {
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Grid,
  Box,
  IconButton,
  CardActionArea,
  CardActions,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
  },
  media: {
    height: 240,
  },
}));

const TopicCardSkeleton = () => {
  //Const
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={3} md={4} sm={6}>
      <Box m={1}>
        <Card className={classes.card} elevation={2}>
          <CardHeader
            avatar={
              <Skeleton
                animation="wave"
                variant="circle"
                width={40}
                height={40}
              />
            }
            title={<Skeleton animation="wave" height={15} width={125} />}
            subheader={<Skeleton animation="wave" height={15} width={125} />}
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
          />
          <CardActionArea>
            <Skeleton
              animation="wave"
              variant="rect"
              className={classes.media}
            />
          </CardActionArea>
          <CardActions>
            <Grid container justify="space-between" alignItems="center">
              <List dense>
                <ListItem dense>
                  <ListItemText>
                    <Skeleton animation="wave" height={15} width={125} />
                  </ListItemText>
                </ListItem>
              </List>
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
            </Grid>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};
export default TopicCardSkeleton;
