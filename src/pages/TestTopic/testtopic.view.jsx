import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TopicCard from "./components";

const TestTopicView = ({
  testTopic,
  handleExpandClick,
  expandedList,
  anchorE1List,
  handleAnchorE1Click,
  handleAnchorE1Close,
}) => {
  return (
    <>
      <Box p={5}>
        <Grid container xs={12} justify="flex-end" alignItems="flex-start">
          <Box px={2}>
            <Grid item>
              <Button variant="contained" color="secondary">
                View TimeTable
              </Button>
            </Grid>
          </Box>
          <Box px={2}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="tel: 044-22413531"
              >
                Contact Exam Cell
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Box>
      <Box m={5}>
        <Grid container spacing={5} alignItems="center">
          {testTopic.length > 0 &&
            testTopic.map((data, index) => {
              return (
                <TopicCard
                  topic_no={index}
                  testtopicdata={data}
                  expandedList={expandedList}
                  handleExpandClick={handleExpandClick}
                  anchorE1List={anchorE1List}
                  handleAnchorE1Click={handleAnchorE1Click}
                  handleAnchorE1Close={handleAnchorE1Close}
                />
              );
            })}
        </Grid>
      </Box>
    </>
  );
};
export default TestTopicView;
