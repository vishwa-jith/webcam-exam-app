import React, { useState, useEffect } from "react";
import { getTestTopics } from "../../components/utils/requests";

import TestResultView from "./testresult.view";

const TestResult = () => {
  //Const
  const [testTopic, setTestTopic] = useState([]);
  const [testInfo, setTestInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("test_name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  //useEffect
  useEffect(() => {
    getTestTopics().then((data) => {
      setTestTopic(data.topics);
      setTestInfo(
        data.info
          .filter((info) => info.end_time)
          .map((info) => {
            const testDetails = data.topics.filter(
              (topic) => topic._id === info.test_id
            )[0];
            return { ...info, ...testDetails };
          })
      );
      setIsLoading(false);
    });
  }, []);
  //Event Handlers
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, testInfo.length - page * rowsPerPage);

  return (
    <>
      <TestResultView
        testTopic={testTopic}
        testInfo={testInfo}
        isLoading={isLoading}
        order={order}
        orderBy={orderBy}
        page={page}
        rowsPerPage={rowsPerPage}
        handleRequestSort={handleRequestSort}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        emptyRows={emptyRows}
      />
    </>
  );
};
export default TestResult;
