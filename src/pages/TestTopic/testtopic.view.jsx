import React from "react";
import { Grid, Box, Button, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

//Components
import TopicCard from "./components/TopicCard";
import TopicCardSkeleton from "./components/TopicCardSkeleton";

const TestTopicView = ({
  testTopic,
  info,
  handleExpandClick,
  expandedList,
  anchorE1List,
  handleAnchorE1Click,
  handleAnchorE1Close,
  Transition,
  userDetails,
  isLoading,
}) => {
  //Const
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Box p={5}>
        <Grid container justify="flex-end" flexdirection="row">
          <Grid item>
            <Box p={2}>
              <Button variant="outlined" color="primary">
                View TimeTable
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box p={2}>
              <Button
                variant="contained"
                color="primary"
                href="tel: 044-22413531"
              >
                Contact Exam Cell
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mx={matches ? 5 : 0}>
        <Grid container alignItems="space-evenly">
          {testTopic.length > 0 ? (
            testTopic.map((data, index) => {
              const testinfo = info
                .filter((info_x) => {
                  return (
                    info_x.user_id === userDetails.userDetails._id &&
                    data._id === info_x.test_id
                  );
                })
                .reverse()[0];
              return (
                <TopicCard
                  key={index}
                  topic_no={index}
                  testtopicdata={data}
                  testinfo={testinfo}
                  expandedList={expandedList}
                  handleExpandClick={handleExpandClick}
                  anchorE1List={anchorE1List}
                  handleAnchorE1Click={handleAnchorE1Click}
                  handleAnchorE1Close={handleAnchorE1Close}
                  Transition={Transition}
                />
              );
            })
          ) : (
            <>
              <TopicCardSkeleton />
              {matches && (
                <>
                  <TopicCardSkeleton />
                  <TopicCardSkeleton />
                  <TopicCardSkeleton />
                </>
              )}
            </>
          )}
        </Grid>
      </Box>
    </>
  );
};
export default TestTopicView;
