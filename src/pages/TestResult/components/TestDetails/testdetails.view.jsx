import React from "react";
import {
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Box,
  Typography,
  Table,
  TableBody,
  Button,
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useHistory } from "react-router-dom";
import TestInfo from "../TestInfo";
import { makeStyles } from "@material-ui/core/styles";
import AssessmentIcon from "@material-ui/icons/Assessment";
import {
  teal,
  grey,
  deepOrange,
  indigo,
  green,
} from "@material-ui/core/colors";
const useRowStyles = makeStyles({
  orange: {
    color: "white",
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: "white",
    backgroundColor: indigo[500],
  },
  green: {
    color: "white",
    backgroundColor: green[500],
  },
});
const TestDetailsView = ({ testDetails, info }) => {
  const classes = useRowStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {testDetails.test_name}
        </TableCell>
        <TableCell align="right">{testDetails.topic}</TableCell>
        <TableCell align="right">{testDetails.duration_in_min} min</TableCell>
        <TableCell align="right">{testDetails.total_marks}</TableCell>
        <TableCell align="right">
          {new Date(info.createdAt).toDateString()}
        </TableCell>
      </TableRow>
      <TableRow style={{ backgroundColor: grey[50] }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container justify="center" alignItems="center">
              <Grid item md={6} xs={12}>
                <Box my={3} mx={1}>
                  <Table size="small" aria-label="purchases">
                    <TableBody>
                      <TestInfo testDetails={testDetails} testInfo={info} />
                    </TableBody>
                  </Table>
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box my={3} mx={1}>
                  <Card className={classes.root}>
                    <CardHeader
                      avatar={
                        <Avatar
                          aria-label="recipe"
                          className={classes.avatar}
                          style={{ backgroundColor: teal[500] }}
                        >
                          {testDetails.topic
                            .split(" ")
                            .map((word) => word[0])
                            .slice(0, 2)}
                        </Avatar>
                      }
                      title={testDetails.topic}
                      subheader={new Date(info.createdAt).toDateString()}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {testDetails.description}
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar className={classes.green}>
                              {`${info.answers_attended}`}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>Answered</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar className={classes.purple}>
                              {`${info.unanswered}`}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>Un Answered</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar className={classes.orange}>
                              {info.answers_marked}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>Marked</ListItemText>
                        </ListItem>
                      </List>
                      <Button
                        aria-label="Test Report"
                        startIcon={<AssessmentIcon />}
                        variant="outlined"
                        color="primary"
                        onClick={() =>
                          history.push(`/testsolution/${testDetails._id}`)
                        }
                      >
                        DETAILED REPORT
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
export default TestDetailsView;
