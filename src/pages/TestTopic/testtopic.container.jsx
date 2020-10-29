import React, { useEffect, useState } from "react";
import TestTopicView from "./testtopic.view.jsx";
import { getTestTopics } from "../../components/utils/requests";

const Subjects = () => {
  const [testTopic, setTestTopic] = useState([]);
  const [expandedList, setExpandedList] = useState([]);
  const [anchorE1List, setAnchorE1List] = useState([]);
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
  useEffect(() => {
    getTestTopics()
      .then((data) => {
        setTestTopic(data);
        setExpandedList(data.map(() => false));
        setAnchorE1List(data.map(() => null));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <TestTopicView
        testTopic={testTopic}
        expandedList={expandedList}
        handleExpandClick={handleExpandClick}
        anchorE1List={anchorE1List}
        handleAnchorE1Click={handleAnchorE1Click}
        handleAnchorE1Close={handleAnchorE1Close}
      />
    </>
  );
};

export default Subjects;
