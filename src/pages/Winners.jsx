import React from "react";
import { useSelector } from "react-redux";
import { TableContainer } from "../components/shared";

export const Winners = () => {
  const { users, isLoading, winners } = useSelector(state => state.users);
  const winnerUsers = users.filter(user => user.isWinner);

  const reversedUsers = [...winnerUsers].reverse();

  return (
    <TableContainer
      title="Winners"
      time="time"
      propData={winnerUsers}
      isLoading={isLoading}
      additionalData={`Nr of winners: ${winners}`}
      reversed={reversedUsers}
    />
  );
};
