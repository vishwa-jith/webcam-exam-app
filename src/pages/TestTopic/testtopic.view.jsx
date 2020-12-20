import React from "react";
import { Grid, TablePagination, Paper } from "@material-ui/core";

//Components
import TopicCard from "./components/TopicCard";
import TopicCardSkeleton from "./components/TopicCardSkeleton";

const TestTopicView = ({
  testTopic,
  info,
  handleExpandClick,
  expandedList,
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
  //Const

  return (
    <>
      <Grid container justify="center">
        <Grid container lg={10} xs={12} item justify="flex-end">
          <Paper>
            <TablePagination
              rowsPerPageOptions={[5, 10, 30]}
              component="div"
              count={testTopic.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
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
