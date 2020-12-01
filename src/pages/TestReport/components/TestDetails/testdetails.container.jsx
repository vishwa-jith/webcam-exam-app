import React from "react";
import TestDetailsView from "./testdetails.view";
const TestDetails = ({ testDetails, testInfo }) => {
  return (
    <>
      <TestDetailsView testDetails={testDetails} testInfo={testInfo} />
    </>
  );
};
export default TestDetails;
