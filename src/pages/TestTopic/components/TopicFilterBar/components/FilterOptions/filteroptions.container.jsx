import React from "react";

import FilterOptionsView from "./filteroptions.view";

const FilterOptions = ({ filterType, handleFilter, filterOpen, anchorRef }) => {
  return (
    <>
      <FilterOptionsView
        filterType={filterType}
        handleFilter={handleFilter}
        filterOpen={filterOpen}
        anchorRef={anchorRef}
      />
    </>
  );
};
export default FilterOptions;
