import React, { useEffect, useState } from "react";
import { getTestTopics } from "../../components/utils/requests";
import Slide from "@material-ui/core/Slide";
import { useSelector, shallowEqual } from "react-redux";

import TestTopicView from "./testtopic.view";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Subjects = () => {
  //Const
  const userDetails = useSelector(
    ({ userDetails }) => userDetails,
    shallowEqual
  );
  //States
  const [testTopic, setTestTopic] = useState([]);
  const [expandedList, setExpandedList] = useState([]);
  const [anchorE1List, setAnchorE1List] = useState([]);
  const [info, setinfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //useEffect
  useEffect(() => {
    setIsLoading(true);
    getTestTopics()
      .then((data) => {
        setIsLoading(false);
        setTestTopic(data.topics);
        setinfo(data.info);
        setExpandedList(data.topics.map(() => false));
        setAnchorE1List(data.topics.map(() => null));
      })
      .catch((err) => {
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, []);
  //Event Handlers
  const handleExpandClick = (topic_no) => {
    setExpandedList(
      expandedList.map((bool, index) => {
        if (index === topic_no) {
          return !bool;
        }
        return bool;
      })
    );
  };
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

  return (
    <>
      <TestTopicView
        testTopic={testTopic}
        info={info}
        expandedList={expandedList}
        handleExpandClick={handleExpandClick}
        anchorE1List={anchorE1List}
        handleAnchorE1Click={handleAnchorE1Click}
        handleAnchorE1Close={handleAnchorE1Close}
        Transition={Transition}
        userDetails={userDetails}
        isLoading={isLoading}
      />
    </>
  );
};

export default Subjects;
