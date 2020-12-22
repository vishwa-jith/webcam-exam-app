import React from "react";
import { Grid, Paper, Box, Button, InputBase } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchIcon from "@material-ui/icons/Search";
import {
  teal,
  orange,
  deepOrange,
  indigo,
  green,
  grey,
} from "@material-ui/core/colors";

//Components
import FilterOptions from "./components/FilterOptions";

import { fade, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.5),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.75),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
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

const TopicFilterBarView = ({
  anchorRef,
  filterType,
  handleFilter,
  filterOpen,
  handleFilterOpen,
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} lg={10}>
      <Box mb={3}>
        <Paper variant="outlined" style={{ backgroundColor: grey[100] }}>
          <Grid
            container
            alignItems="center"
            justify="space-between"
            style={{ height: "45px" }}
          >
            <Box pl={1}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  autoFocus={true}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Box>
            <Box pr={1}>
              <Button
                style={{
                  backgroundColor:
                    filterType === "DEFAULT"
                      ? indigo[500]
                      : filterType === "LIVE"
                      ? teal[500]
                      : filterType === "RESUME"
                      ? orange[500]
                      : filterType === "COMPLETED"
                      ? green[500]
                      : deepOrange[500],
                  color: "white",
                }}
                ref={anchorRef}
                disableElevation
                size="small"
                startIcon={<FilterListIcon />}
                variant="contained"
                onClick={handleFilterOpen}
              >
                Filter
              </Button>
            </Box>
          </Grid>
          <FilterOptions
            anchorRef={anchorRef}
            filterType={filterType}
            handleFilter={handleFilter}
            filterOpen={filterOpen}
          />
        </Paper>
      </Box>
    </Grid>
  );
};
export default TopicFilterBarView;
