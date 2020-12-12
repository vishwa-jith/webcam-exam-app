import React from "react";
import { Typography, CardContent } from "@material-ui/core";

const CardContentCollapseView = ({ testtopicdata }) => {
  return (
    <>
      <CardContent>
        <Typography paragraph>Description</Typography>
        <Typography paragraph>{testtopicdata.description}</Typography>
      </CardContent>
    </>
  );
};
export default CardContentCollapseView;
