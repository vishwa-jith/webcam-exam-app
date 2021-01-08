import React from "react";

import TestDetailsView from "./testdetails.view";

const TestDetails = ({ testDetails }) => {
  return (
    <>
      <TestDetailsView testDetails={testDetails} />
    </>
  );
};
export default TestDetails;
