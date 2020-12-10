import React from "react";

import Registration1View from "./registration1.view";

const Registration1 = ({ registrationDetails, handleChange, handleStep }) => {
  return (
    <>
      <Registration1View
        registrationDetails={registrationDetails}
        handleChange={handleChange}
        handleStep={handleStep}
      />
    </>
  );
};
export default Registration1;
