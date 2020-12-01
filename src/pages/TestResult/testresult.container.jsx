import React, { useState, useEffect } from "react";
import { getTestTopics } from "../../components/utils/requests";
import TestResultView from "./testresult.view";
const TestResult = () => {
  const [testTopic, setTestTopic] = useState([]);
  const [testInfo, setTestInfo] = useState([]);
  useEffect(() => {
    getTestTopics().then((data) => {
      setTestTopic(data.topics);
      setTestInfo(data.info);
      console.log(data);
    });
  }, []);
  console.log(testTopic, testInfo);
  return (
    <>
      <TestResultView testTopic={testTopic} testInfo={testInfo} />
    </>
  );
};
export default TestResult;
