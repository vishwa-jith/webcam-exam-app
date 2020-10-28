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
  useEffect(() => {
    getTestTopics()
      .then((data) => {
        setTestTopic(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <TestTopicView />
    </div>
  );
};

export default Subjects;
