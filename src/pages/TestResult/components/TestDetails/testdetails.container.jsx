import React from "react";
import TestDetailsView from "./testdetails.view";
const TestDetails = ({ testDetails, info }) => {
  return (
    <>
      <TestDetailsView testDetails={testDetails} info={info} />
    </>
  );
};
export default TestDetails;
