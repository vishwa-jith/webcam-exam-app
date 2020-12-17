import React from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
  Button,
  Fade,
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PolicyIcon from "@material-ui/icons/Policy";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { indigo } from "@material-ui/core/colors";

import { baseUrl } from "../../components/constants";
import TestDetails from "./components/TestDetails";
import TestDetailsSkeleton from "./components/TestDetailsSkeleton";

const TestResultView = ({ testTopic, testInfo, isLoading }) => {
  const history = useHistory();
  return (
    <>
      <TableContainer component={Paper}>
        {isLoading || (!isLoading && testInfo.length) ? (
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography color="textSecondary">Test Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary">Test Topic</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary">Test Duration</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary">Total Marks</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary">Test Date</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <>
                  <TestDetailsSkeleton />
                  <TestDetailsSkeleton />
                  <TestDetailsSkeleton />
                </>
              ) : (
                testInfo.map((info) => {
                  const testDetails = testTopic.filter(
                    (topic) => topic._id === info.test_id
                  )[0];
                  return (
                    <TestDetails
                      info={info}
                      testDetails={testDetails}
                      isLoading={isLoading}
                    />
                  );
                })
              )}
            </TableBody>
          </Table>
        ) : (
          <Fade in={!isLoading}>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={6}>
                <img
                  src={`${baseUrl}images/noTestFound.jpg`}
                  style={{ height: "100%", width: "100%" }}
                  alt="No Results"
                />
              </Grid>
              <Grid item xs={6}>
                <Box m={3}>
                  <Paper>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <PolicyIcon
                            style={{ fontSize: "3rem", color: indigo[500] }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography variant="h6" color="textPrimary">
                            No Test Results Found
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography variant="h6" color="textSecondary">
                            Currently the Test Report Dashboard is empty
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography variant="h6" color="textSecondary">
                            Completed Test Reports can be viewed here.
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <Button
                          onClick={() => history.push("/testtopics")}
                          variant="contained"
                          color="primary"
                          endIcon={<AssessmentIcon />}
                        >
                          Take Test
                        </Button>
                      </ListItem>
                    </List>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Fade>
        )}
      </TableContainer>
    </>
  );
};
export default TestResultView;
