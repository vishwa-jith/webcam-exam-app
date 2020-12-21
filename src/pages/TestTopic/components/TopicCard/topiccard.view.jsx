import React from "react";
import {
  CardActionArea,
  Box,
  Collapse,
  CardActions,
  CardHeader,
  Card,
  Grid,
} from "@material-ui/core";

//Components
import TopicDialog from "./components/TopicDialog";
import CardPopover from "./components/CardPopover";
import CardContentArea from "./components/CardContentArea";
import CardContentAction from "./components/CardContentAction";
import CardHeaderAvatar from "./components/CardHeaderAvatar";
import CardContentCollapse from "./components/CardContentCollapse";
import CardHeaderAction from "./components/CardHeaderAction";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
  },
}));

const TopicCardView = function ({
  expanded,
  testtopicdata,
  handleExpandClick,
  anchorE1,
  handleAnchorE1Click,
  handleAnchorE1Close,
  Transition,
  open,
  handleClickOpen,
  handleClose,
}) {
  //Const
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={3} md={4} sm={6}>
      <Box m={1}>
        <Card className={classes.card} elevation={2}>
          {!expanded && (
            <>
              <CardHeader
                avatar={<CardHeaderAvatar testtopicdata={testtopicdata} />}
                title={testtopicdata.test_name}
                subheader={new Date(testtopicdata.start_time).toDateString()}
                action={
                  <CardHeaderAction handleAnchorE1Click={handleAnchorE1Click} />
                }
              />
              <CardPopover
                anchorE1={anchorE1}
                testtopicdata={testtopicdata}
                handleAnchorE1Close={handleAnchorE1Close}
              />
              <CardActionArea onClick={handleClickOpen}>
                <CardContentArea testtopicdata={testtopicdata} />
              </CardActionArea>
            </>
          )}
          <CardActions>
            <CardContentAction
              expanded={expanded}
              testtopicdata={testtopicdata}
              handleExpandClick={handleExpandClick}
            />
          </CardActions>
          {expanded && (
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContentCollapse testtopicdata={testtopicdata} />
            </Collapse>
          )}
        </Card>
        {open && (
          <TopicDialog
            testtopicdata={testtopicdata}
            Transition={Transition}
            open={open}
            handleClose={handleClose}
          />
        )}
      </Box>
    </Grid>
  );
};

export default TopicCardView;
