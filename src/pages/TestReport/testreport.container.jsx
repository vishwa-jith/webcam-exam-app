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
