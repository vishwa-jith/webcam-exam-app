import React, { useEffect, useState } from "react";
import TestTopicView from "./testtopic.view.jsx";
import { getTestTopics } from "../../components/utils/requests";
import Slide from "@material-ui/core/Slide";
import { useSelector, shallowEqual } from "react-redux";
const Subjects = () => {
  const [testTopic, setTestTopic] = useState([]);
  const [expandedList, setExpandedList] = useState([]);
  const [anchorE1List, setAnchorE1List] = useState([]);
  const [info, setinfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const userDetails = useSelector(
    ({ userDetails }) => userDetails,
    shallowEqual
  );
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
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

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
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);
  console.log(useSelector((state) => state));
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
