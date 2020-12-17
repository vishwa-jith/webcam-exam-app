import React, { useState, useEffect } from "react";
import { getTestTopics } from "../../components/utils/requests";

import TestResultView from "./testresult.view";

const TestResult = () => {
  //Const
  const [testTopic, setTestTopic] = useState([]);
  const [testInfo, setTestInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //useEffect
  useEffect(() => {
    getTestTopics().then((data) => {
      setTestTopic(data.topics);
      setTestInfo(data.info);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <TestResultView
        testTopic={testTopic}
        testInfo={testInfo}
        isLoading={isLoading}
      />
    </>
  );
};
export default TestResult;
