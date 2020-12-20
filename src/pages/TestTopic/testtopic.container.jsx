import React, { useEffect, useState } from "react";
import { getTestTopics } from "../../components/utils/requests";
import Slide from "@material-ui/core/Slide";
import { useSelector, shallowEqual } from "react-redux";

import TestTopicView from "./testtopic.view";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TestTopic = () => {
  //Const
  const userDetails = useSelector((state) => state.userDetails, shallowEqual);
  //States
  const [testTopic, setTestTopic] = useState([]);
  const [anchorE1List, setAnchorE1List] = useState([]);
  const [info, setinfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  //useEffect
  useEffect(() => {
    setIsLoading(true);
    getTestTopics()
      .then((data) => {
        setIsLoading(false);
        setTestTopic(data.topics);
        setinfo(data.info);
        setAnchorE1List(data.topics.map(() => null));
      })
      .catch((err) => {
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, []);
  //Event Handlers
  const handleAnchorE1Click = (event, topic_no) => {
    setAnchorE1List(
      anchorE1List.map((target, index) => {
        if (index === topic_no) {
          return event.currentTarget;
        }
        return null;
      })
    );
  };
  const handleAnchorE1Close = () => {
    setAnchorE1List(anchorE1List.map(() => null));
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <TestTopicView
        testTopic={testTopic}
        info={info}
        page={page}
        rowsPerPage={rowsPerPage}
        anchorE1List={anchorE1List}
        handleAnchorE1Click={handleAnchorE1Click}
        handleAnchorE1Close={handleAnchorE1Close}
        Transition={Transition}
        userDetails={userDetails}
        isLoading={isLoading}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default TestTopic;
