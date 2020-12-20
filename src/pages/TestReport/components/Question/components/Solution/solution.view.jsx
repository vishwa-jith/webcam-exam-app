import React from "react";
import { FormControlLabel, Checkbox, ListItem } from "@material-ui/core";
import { deepOrange, green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const OrangeCheckbox = withStyles({
  root: {
    color: deepOrange[400],
    "&$checked": {
      color: deepOrange[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const SolutionView = ({ index, questions, answers, question_no, opt }) => {
  return (
    <>
      <ListItem id={`${index}`} key={index}>
        <FormControlLabel
          control={
            questions[question_no].answer_option === index &&
            answers[question_no] === index ? (
              <GreenCheckbox checked={true} />
            ) : questions[question_no].answer_option === index ? (
              <GreenCheckbox checked={true} />
            ) : answers[question_no] === index ? (
              <OrangeCheckbox checked={true} />
            ) : (
              <Checkbox checked={false} />
            )
          }
          label={opt}
        />
      </ListItem>
    </>
  );
};
export default SolutionView;
