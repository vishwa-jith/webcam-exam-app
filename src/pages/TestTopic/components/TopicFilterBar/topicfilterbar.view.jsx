import React from "react";
import { Grid, Paper, Box, Button, InputBase } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchIcon from "@material-ui/icons/Search";
import { grey } from "@material-ui/core/colors";

import { fade, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.5),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.75),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const TopicFilterBarView = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} lg={10}>
      <Box mx={1} mb={3}>
        <Paper variant="outlined" style={{ backgroundColor: grey[200] }}>
          <Grid
            container
            alignItems="center"
            justify="space-between"
            style={{ height: "45px" }}
          >
            <Box px={1}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Box>
            <Box px={1}>
              <Button
                disableElevation
                size="small"
                color="primary"
                startIcon={<FilterListIcon />}
                variant="contained"
              >
                Filter
              </Button>
            </Box>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  );
};
export default TopicFilterBarView;