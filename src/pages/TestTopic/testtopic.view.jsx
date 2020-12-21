import React from "react";
import { Grid } from "@material-ui/core";

//Components
import TopicCard from "./components/TopicCard";
import TopicCardSkeleton from "./components/TopicCardSkeleton";
import PageSpliter from "./components/PageSpliter";
import TopicFilterBar from "./components/TopicFilterBar";

const TestTopicView = ({
  testTopic,
  info,
  page,
  rowsPerPage,
  anchorE1List,
  handleAnchorE1Click,
  handleAnchorE1Close,
  Transition,
  userDetails,
  isLoading,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <>
      <Grid container justify="center">
        <PageSpliter
          testTopic={testTopic}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <TopicFilterBar />
        <Grid container lg={10} xs={12} item alignItems="space-evenly">
          {testTopic.length > 0 ? (
            testTopic
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data, index) => {
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
              <TopicCardSkeleton />
              <TopicCardSkeleton />
              <TopicCardSkeleton />
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default TestTopicView;
