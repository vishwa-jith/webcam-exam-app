import React, { useEffect, useState } from "react";
import TestTopicView from "./testtopic.view.jsx";
import { getTestTopics } from "../../components/utils/requests";

const Subjects = () => {
  const [testTopic, setTestTopic] = useState([
    {
      topic: "",
      is_test_taken: false,
      score: 0,
      description: "",
    },
  ]);
  const [expandedList, setExpandedList] = useState([]);
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
  useEffect(() => {
    getTestTopics()
      .then((data) => {
        setTestTopic(data);
        setExpandedList(data.map(() => false));
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
      />
    </>
  );
};

export default Subjects;
