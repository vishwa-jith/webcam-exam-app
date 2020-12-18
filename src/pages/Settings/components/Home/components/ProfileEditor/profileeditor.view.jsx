import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import { indigo, green } from "@material-ui/core/colors";

const ProfileEditorView = ({ isEdit, handleOperation }) => {
  return (
    <>
      <Grid item container xs={12} justify="flex-end">
        <IconButton
          onClick={handleOperation}
          style={{
            backgroundColor: isEdit ? green[500] : indigo[500],
            margin: "5px",
            color: "white",
          }}
        >
          {isEdit ? <SaveIcon /> : <EditIcon />}
        </IconButton>
      </Grid>
    </>
  );
};
export default ProfileEditorView;
