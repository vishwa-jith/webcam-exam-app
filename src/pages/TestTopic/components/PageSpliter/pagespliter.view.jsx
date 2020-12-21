import React from "react";
import { Grid, Box, TablePagination } from "@material-ui/core";

const PageSpliterView = ({
  testTopic,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <Grid container lg={10} xs={12} item justify="flex-end">
      <Box my={1}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 30]}
          component="div"
          count={testTopic.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Box>
    </Grid>
  );
};
export default PageSpliterView;
