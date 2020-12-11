import React from "react";

import IntelligenceChartView from "./intelligencechart.view";

const IntelligenceChart = ({ intelligence }) => {
  return (
    <>
      <IntelligenceChartView intelligence={intelligence} />
    </>
  );
};
export default IntelligenceChart;
