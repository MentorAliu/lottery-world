import React from "react";
import { useSelector } from "react-redux";
import { TableContainer } from "../components/shared";

export const SessionPlayers = () => {
  const { users, isLoading, timesPlayed } = useSelector(state => state.users);

  const reversedUsers = [...users].reverse();
  return (
    <TableContainer
      title="All Players"
      time="time"
      propData={users}
      isLoading={isLoading}
      isForAll
      additionalData={`Nr of players: ${timesPlayed}`}
      reversed={reversedUsers}
    />
  );
};
