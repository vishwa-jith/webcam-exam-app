import React, { useEffect, useState } from "react";
import { getTestTopics } from "../../components/utils/requests";
import Slide from "@material-ui/core/Slide";

import TestTopicView from "./testtopic.view";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TestTopic = () => {
  //States
  const [testTopic, setTestTopic] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterType, setFilterType] = useState("DEFAULT");
  //useEffect
  useEffect(() => {
    getTestTopics().then((data) => {
      setTestTopic(
        data.topics.map((topic, index) => {
          const t_info = data.info.filter(
            (test_info) => test_info.test_id === topic._id
          )[0];
          // eslint-disable-next-line
          const t_data = {
            ...topic,
            test_start_time: topic.start_time,
            start_time: null,
            test_id: topic._id,
          };
          return { ...t_data, ...t_info };
        })
      );
    });
    // eslint-disable-next-line
  }, []);
  //Event Handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleFilter = (filter) => {
    setFilterType(filter);
  };
  return (
    <>
      <TestTopicView
        testTopic={testTopic}
        filterType={filterType}
        page={page}
        rowsPerPage={rowsPerPage}
        Transition={Transition}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleFilter={handleFilter}
      />
    </>
  );
};

export default TestTopic;
