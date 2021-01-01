import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTestLeaderBoard } from "../../components/utils/requests";
import { getTime, getTimer } from "../../components/utils";

import LeaderBoardView from "./leaderboard.view";

const LeaderBoard = () => {
  //Const
  const { testId } = useParams();
  //States
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("score");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  //Event Handlers
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, leaderBoard.length - page * rowsPerPage);

  useEffect(() => {
    getTestLeaderBoard(testId).then((result) => {
      setLeaderBoard(
        result.map((test) => {
          const time = getTime(
            getTimer(new Date(test.end_time).toTimeString().split(":")) -
              getTimer(new Date(test.start_time).toTimeString().split(":"))
          ).split(":");
          return {
            ...test,
            time_taken: parseInt(parseInt(time[0]) * 60 + parseInt(time[1])),
            end_time: getTimer(
              new Date(test.end_time).toTimeString().split(":")
            ),
            start_time: getTimer(
              new Date(test.start_time).toTimeString().split(":")
            ),
          };
        })
      );
    });
  }, [testId]);
  return (
    <>
      <LeaderBoardView
        leaderBoard={leaderBoard}
        order={order}
        orderBy={orderBy}
        page={page}
        rowsPerPage={rowsPerPage}
        emptyRows={emptyRows}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleRequestSort={handleRequestSort}
      />
    </>
  );
};
export default LeaderBoard;
