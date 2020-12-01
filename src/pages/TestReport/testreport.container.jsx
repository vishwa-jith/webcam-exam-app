import React, { useEffect, useState } from "react";
import TestReportView from "./testReport.view";
import { useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getTestDetail,
  getTestInfo,
  getTestQuestions,
} from "../../components/utils/requests";
const TestReport = () => {
  const { testId } = useParams();
  const [testDetails, setTestDetails] = useState(null);
  const [testInfo, setTestInfo] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState(null);
  const test_info = useSelector(
    ({ testDetails }) => testDetails.testInfo,
    shallowEqual
  );
  const test_details = useSelector(
    ({ testDetails }) => testDetails.testDetails,
    shallowEqual
  );
  useEffect(() => {
    getTestQuestions(testId).then((question) => {
      setQuestions(question.questions);
      setAnswers(
        question.questions.map((q, index) => (index % 2 === 0 ? 1 : 3))
      );
    });
    if (test_details) {
      setTestDetails(test_details);
    } else {
      getTestDetail(testId).then((testdetail) => {
        setTestDetails(testdetail[0]);
      });
    }
    if (test_info) {
      setTestInfo(test_info);
    } else {
      getTestInfo(testId).then((testinfo) => {
        setTestInfo(testinfo[0]);
      });
    }
  }, [testId, test_info, test_details]);
  console.log(testInfo);
  return (
    <>
      <TestReportView
        questions={questions}
        answers={answers}
        testDetails={testDetails}
        testInfo={testInfo}
      />
    </>
  );
};
export default TestReport;
