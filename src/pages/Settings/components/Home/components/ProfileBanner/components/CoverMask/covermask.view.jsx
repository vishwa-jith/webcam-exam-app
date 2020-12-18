import React from "react";
import { Grid } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { baseUrl } from "../../../../../../../../components/constants";

const CoverMaskView = ({ names, openCover, handleCoverPopoverOpen }) => {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        justify="center"
        style={{
          height: "250px",
          width: "100%",
          backgroundColor: grey[200],
          backgroundImage: names.default_cover
            ? `url( ${baseUrl}images/default_cover.jpg )`
            : `url( ${baseUrl}images/upload/${names._id}-cover.jpg )`,
          cursor: "pointer",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 250px",
        }}
        aria-owns={openCover ? "mouse-over-cover-popover" : undefined}
        aria-haspopup="true"
        onClick={handleCoverPopoverOpen}
      ></Grid>
    </>
  );
};
export default CoverMaskView;
