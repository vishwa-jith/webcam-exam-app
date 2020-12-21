import React from "react";
import { Grid } from "@material-ui/core";
import { filterAction } from "./utils/filterAction";

//Components
import TopicCard from "./components/TopicCard";
import TopicCardSkeleton from "./components/TopicCardSkeleton";
import PageSpliter from "./components/PageSpliter";
import TopicFilterBar from "./components/TopicFilterBar";

const TestTopicView = ({
  testTopic,
  filterType,
  page,
  rowsPerPage,
  Transition,
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
              .filter((payload) => filterAction({ type: filterType, payload }))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data, index) => {
                return (
                  <TopicCard
                    key={index}
                    testtopicdata={data}
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
