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
  const [filterType, setFilterType] = useState("");
  //useEffect
  useEffect(() => {
    getTestTopics().then((data) => {
      setTestTopic(
        data.topics.map((topic, index) => ({ ...topic, ...data.info[index] }))
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
  return (
    <>
      <TestTopicView
        testTopic={testTopic}
        page={page}
        rowsPerPage={rowsPerPage}
        Transition={Transition}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default TestTopic;
