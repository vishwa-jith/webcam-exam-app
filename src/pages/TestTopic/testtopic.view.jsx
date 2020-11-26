import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TopicCard from "./components";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const TestTopicView = ({
  testTopic,
  user_id,
  info,
  handleExpandClick,
  expandedList,
  anchorE1List,
  handleAnchorE1Click,
  handleAnchorE1Close,
  Transition,
}) => {
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
        <Grid container alignItems="center">
          {testTopic.length > 0 &&
            testTopic.map((data, index) => {
              const testinfo = info.filter((info_x) => {
                return info_x.user_id === user_id;
              })[0];
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
            })}
        </Grid>
      </Box>
    </>
  );
};
export default TestTopicView;
