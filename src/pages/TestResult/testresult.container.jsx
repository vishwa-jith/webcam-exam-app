import React, { useState, useEffect } from "react";
import { getTestTopics } from "../../components/utils/requests";

import TestResultView from "./testresult.view";

const TestResult = () => {
  //Const
  const [testTopic, setTestTopic] = useState([]);
  const [testInfo, setTestInfo] = useState([]);
  //useEffect
  useEffect(() => {
    getTestTopics().then((data) => {
      setTestTopic(data.topics);
      setTestInfo(data.info);
    });
  }, []);
  return (
    <>
      <TestResultView testTopic={testTopic} testInfo={testInfo} />
    </>
  );
};
export default TestResult;
