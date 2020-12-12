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
  root: {
    maxWidth: 345,
    textAlign: "left",
    background: theme.palette.background.paper,
  },
}));

const TopicCardView = function ({
  topic_no,
  testtopicdata,
  testinfo,
  expandedList,
  handleExpandClick,
  anchorE1List,
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
    <Grid item xs={12} md={3}>
      <Box mx={1}>
        <Card className={classes.root} elevation={2}>
          <CardHeader
            avatar={<CardHeaderAvatar testinfo={testinfo} />}
            title={testtopicdata.test_name}
            subheader={new Date(testtopicdata.start_time).toDateString()}
            action={
              <CardHeaderAction
                topic_no={topic_no}
                handleAnchorE1Click={handleAnchorE1Click}
              />
            }
          />
          <CardPopover
            topic_no={topic_no}
            anchorE1List={anchorE1List}
            handleAnchorE1Close={handleAnchorE1Close}
          />
          <CardActionArea onClick={handleClickOpen}>
            <CardContentArea
              testtopicdata={testtopicdata}
              expandedList={expandedList}
              topic_no={topic_no}
              testinfo={testinfo}
            />
          </CardActionArea>
          <CardActions>
            <CardContentAction
              topic_no={topic_no}
              testinfo={testinfo}
              expandedList={expandedList}
              testtopicdata={testtopicdata}
              handleExpandClick={handleExpandClick}
            />
          </CardActions>
          <Collapse in={expandedList[topic_no]} timeout="auto" unmountOnExit>
            <CardContentCollapse testtopicdata={testtopicdata} />
          </Collapse>
        </Card>
        {open && (
          <TopicDialog
            testtopicdata={testtopicdata}
            Transition={Transition}
            open={open}
            handleClose={handleClose}
            testinfo={testinfo}
          />
        )}
      </Box>
    </Grid>
  );
};

export default TopicCardView;
