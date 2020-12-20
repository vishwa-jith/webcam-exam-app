import React, { useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getTestDetail,
  getTestInfo,
  getTestQuestions,
} from "../../components/utils/requests";

import TestReportView from "./testReport.view";

const TestReport = () => {
  //Const
  const { testId } = useParams();
  const test_info = useSelector(
    ({ testDetails }) => testDetails.testInfo,
    shallowEqual
  );
  const test_details = useSelector(
    ({ testDetails }) => testDetails.testDetails,
    shallowEqual
  );
  //States
  const [testDetails, setTestDetails] = useState(null);
  const [testInfo, setTestInfo] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  //useEffect
  useEffect(() => {
    if (test_details) {
      setTestDetails(test_details);
    } else {
      getTestDetail(testId).then((testdetail) => {
        setTestDetails(testdetail[0]);
      });
    }
    if (test_info) {
      setTestInfo(test_info);
      setAnswers(test_info.answers);
      getTestQuestions(testId).then((question) => {
        console.log(test_info, question);
        setQuestions(question.questions);
      });
    } else {
      getTestInfo(testId).then((testinfo) => {
        setTestInfo(testinfo[0]);
        getTestQuestions(testId).then((question) => {
          setQuestions(question.questions);
        });
        setAnswers(testinfo[0].answers);
      });
    }
  }, [testId, test_info, test_details]);
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
        testInfo={testInfo}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};
export default TestReport;
