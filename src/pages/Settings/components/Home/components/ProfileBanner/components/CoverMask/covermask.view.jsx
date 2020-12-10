import React from "react";
import { Grid } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { baseUrl } from "../../../../../../../../components/constants";

const CoverMaskView = ({ openCover, handleCoverPopoverOpen }) => {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        justify="center"
        style={{
          height: "200px",
          backgroundColor: grey[200],
          backgroundImage: `url( ${baseUrl}images/default_cover.jpg )`,
          cursor: "pointer",
        }}
        aria-owns={openCover ? "mouse-over-cover-popover" : undefined}
        aria-haspopup="true"
        onClick={handleCoverPopoverOpen}
      ></Grid>
    </>
  );
};
export default CoverMaskView;
