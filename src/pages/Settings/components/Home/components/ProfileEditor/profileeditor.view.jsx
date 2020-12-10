import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";

const ProfileEditorView = ({ isEdit, handleOperation }) => {
  return (
    <>
      <Grid item container xs={12} justify="flex-end">
        <IconButton
          onClick={handleOperation}
          style={{
            backgroundColor: isEdit ? "#4caf50" : "#90caf9",
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
