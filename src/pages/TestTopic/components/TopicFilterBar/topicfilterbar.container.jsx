import React, { useState, useRef } from "react";

import TopicFilterBarView from "./topicfilterbar.view";

const TopicFilterBar = ({ filterType, handleFilter }) => {
  const anchorRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const handleFilterOpen = () => {
    setFilterOpen(!filterOpen);
  };
  return (
    <>
      <TopicFilterBarView
        anchorRef={anchorRef}
        filterType={filterType}
        handleFilter={handleFilter}
        filterOpen={filterOpen}
        handleFilterOpen={handleFilterOpen}
      />
    </>
  );
};
export default TopicFilterBar;
