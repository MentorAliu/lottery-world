import React from "react";
// import { useEffect } from "react";
import { Button, Card } from "../components/shared";
import {
  clearSession,
  getRandomUser,
} from "../features/users/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const Home = () => {
  const dispatch = useDispatch();
  const { user, users,win_users, isLoading, winners, timesPlayed } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getRandomUser());
  }, [dispatch]);

  const generateRandomUser = () => {
    dispatch(getRandomUser());
  };

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  // !!users && console.log(users)
  // !!win_users && console.log(win_users)
  // !!winners && console.log(winners)
  console.log(users)
  console.log(timesPlayed + "times played")
  console.log(winners + "winners")



  return (
    <main className="flex-col items-center">
      <Button text="Generate User" onClick={generateRandomUser} />
      {user.map(user => {
        return (
          <div key={user.picture.large} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg w-full"
              src={user.picture.large}
              alt=""
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {user.name.title} {user.name.first} {user.name.last}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {user.email}
              </p>
              {user.phone}
              <p>{user.location.country}</p>
            </div>
            <Button
              text="Clear Session"
              onClick={() => dispatch(clearSession())}
              className="w-full bg-blue-50"
            />
          </div>
        );
      })}
    </main>
  );
};
