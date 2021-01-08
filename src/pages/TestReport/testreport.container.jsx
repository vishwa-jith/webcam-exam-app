import React, { useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getTestDetail,
  getTestInfo,
  getTestQuestions,
  getTestAnswers,
} from "../../components/utils/requests";

import TestReportView from "./testReport.view";

const TestReport = () => {
  //Const
  const { testId } = useParams();
  const test_details = useSelector(
    ({ testDetails }) => testDetails.testDetails,
    shallowEqual
  );
  //States
  const [testDetails, setTestDetails] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  //useEffect
  useEffect(() => {
    getTestAnswers(testId).then((ans) => setAnswers(ans));
    if (test_details && test_details.test_id === testId) {
      setTestDetails(test_details);
    } else {
      getTestDetail(testId).then((testdetail) => {
        getTestInfo(testId).then((testinfo) => {
          setTestDetails({
            ...testdetail[0],
            test_start_time: testdetail[0].start_time,
            start_time: null,
            test_id: testdetail[0]._id,
            ...testinfo[0],
          });
        });
      });
    }
    getTestQuestions(testId).then((question) => {
      setQuestions(question.questions);
    });
  }, [testId, test_details]);
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
      <TestReportView
        page={page}
        rowsPerPage={rowsPerPage}
        questions={questions}
        answers={answers}
        testDetails={testDetails}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};
export default TestReport;
