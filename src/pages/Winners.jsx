import React from "react";
import { useSelector } from "react-redux";
import { Button, TableContainer } from "../components/shared";

export const Winners = () => {

  const {users,isLoading} = useSelector(state => state.users)
  const winnerUsers = users.filter(user => user.isWinner)
  return (
    <TableContainer title="Winners" time="time" propData={winnerUsers} isLoading={isLoading}/>
  );
};
