import React from "react";
import {
  Grid,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import MoodIcon from "@material-ui/icons/Mood";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

const IntelligenceChartView = ({ intelligence }) => {
  return (
    <>
      <Box m={2}>
        <Grid item>
          <Paper>
            <Box m={1}>
              {intelligence && (
                <>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        {intelligence.confidences ? (
                          <MoodIcon />
                        ) : (
                          <MoodBadIcon />
                        )}
                      </ListItemIcon>
                      <ListItemText>
                        {intelligence.confidences
                          ? intelligence.confidences
                          : "NULL"}
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <SupervisedUserCircleIcon />
                      </ListItemIcon>
                      <ListItemText>{intelligence.no_of_faces}</ListItemText>
                    </ListItem>
                  </List>
                </>
              )}
            </Box>
          </Paper>
        </Grid>
      </Box>
    </>
  );
};
export default IntelligenceChartView;
