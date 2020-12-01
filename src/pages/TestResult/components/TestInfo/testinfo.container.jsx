import React from "react";
import TestInfoView from "./testinfo.view";
const TestInfo = ({ testDetails, testInfo }) => {
  return (
    <>
      <TestInfoView testDetails={testDetails} testInfo={testInfo} />
    </>
  );
};
export default TestInfo;
