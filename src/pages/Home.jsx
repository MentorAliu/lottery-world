import React from "react";
// import { useEffect } from "react";
import { Button, Card } from "../components/shared";
import { clearSession, getRandomUser } from "../features/users/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const Home = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector(state => state.users);

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

  return (
    <article className="grid">
      <Button text="Generate User" onClick={generateRandomUser} />
      {user.map(user => {
        return (
          <div
            key={user.login.md5}
            className="w-[20rem] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
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
                Email: {user.email}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Gender: {user.gender[0].toUpperCase() + user.gender.slice(1)}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Phone nr: {user.phone}
              </p>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                City: {user.location.city}, Country: {user.location.country}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Postcode: {user.location.postcode}{" "}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Nat: {user.nat}{" "}
              </p>
            </div>
            <Button
              text="Clear Session"
              onClick={() => dispatch(clearSession())}
              className="w-full bg-red-600 text-white py-2"
            />
          </div>
        );
      })}
    </article>
  );
};
