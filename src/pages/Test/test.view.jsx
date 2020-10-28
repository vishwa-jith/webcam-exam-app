import React from "react";
import Webcam from "react-webcam";
import {
  Grid,
  Paper,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};
const TestView = ({
  webcamRef,
  takeScreenShoot,
  src,
  questions,
  question_no,
  handleAnswers,
  answers,
  handleQuestion,
}) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
        <Grid item>
          <Paper>
            <Box m={1}>
              <Webcam
                audio={false}
                height={150}
                width={250}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                onUserMedia={takeScreenShoot}
                videoConstraints={videoConstraints}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {/* {src !== null && (
        <img src={src} alt="sample" width="100px" height="100px" />
      )} */}
      <Grid container justify="center" alignItems="center" xs={12}>
        <Grid item md={10} xs={12}>
          <Box my={4}>
            <Paper>
              <Typography variant="h6">
                {questions[question_no].topic}
              </Typography>
              <List dense>
                {questions[question_no].options.map((opt, index) => {
                  return (
                    <ListItem button id={`${index}`} onClick={handleAnswers}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              answers.length !== question_no &&
                              answers[question_no] === index
                            }
                            onChange={handleAnswers}
                            name={`${index}`}
                            id={`${index}`}
                            color="primary"
                          />
                        }
                        label={opt}
                      />
                    </ListItem>
                  );
                })}
              </List>
              <Grid
                container
                justify="space-around"
                alignItems="center"
                xs={12}
              >
                <Grid item>
                  {question_no === 0 ? (
                    <Button disabled={true}>Start</Button>
                  ) : (
                    <Button
                      onClick={() => {
                        handleQuestion(-1);
                      }}
                    >
                      Previous
                    </Button>
                  )}
                </Grid>
                <Grid item>
                  {question_no === questions.length - 1 ? (
                    <Button>Submit</Button>
                  ) : (
                    <Button
                      onClick={() => {
                        handleQuestion(1);
                      }}
                    >
                      Next
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default TestView;
