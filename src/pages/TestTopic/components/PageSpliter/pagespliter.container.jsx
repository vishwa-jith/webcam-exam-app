import React from "react";

import PageSpliterView from "./pagespliter.view";

const PageSpliter = ({
  testTopic,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <>
      <PageSpliterView
        testTopic={testTopic}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};
export default PageSpliter;
