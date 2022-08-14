import React, { useEffect, useState } from "react";
import { Button, Skeleton } from "../components/shared";
import { clearSession, getRandomUser } from "../features/users/usersSlice";
import { useSelector, useDispatch } from "react-redux";


export const Home = () => {
  const dispatch = useDispatch();
  const [editEmail, setEditEmail] = useState(false);
  const { user, isLoading } = useSelector(state => state.users);
  const [email, setEmail] = useState({});

useEffect(()=>{
  setEmail(user[0])
},[user])
  
  //generate a random user on load
  // useEffect(() => {
  //   dispatch(getRandomUser());
  // }, [dispatch]);

  //generate a random user on click
  const generateRandomUser = () => {
    dispatch(getRandomUser());
  };

  if (isLoading) {
    return (
      <article className="grid">
        <Button text="Generate User" onClick={generateRandomUser} />
        {user.length !== 0 && <Skeleton />}
      </article>
    );
  }

  const renderEmail = (stateEmail) => {
    if (editEmail) {
      return (
        <p className="flex items-center justify-between mb-3">
        Email:
          <input
            type="text"
            value={email.email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            className="block px-1 w-full font-normal text-gray-900 bg-gray-50 rounded-sm border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          />
          <button
            className="text-blue-500 ml-1"
            onClick={() => {
              setEditEmail(false);
            }}
          >
            Save
          </button>
        </p>
      );
    }
    if (!editEmail) {
      return (
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-between items-center">
          Email: {stateEmail}
          <button className="text-blue-500" onClick={() => setEditEmail(true)}>
            Edit
          </button>
        </p>
      );
    }
  };

  return (
    <article className="grid">
      <Button text="Generate User" onClick={generateRandomUser} />
      {user.map(user => {
        return (
          <div
            key={user.login.md5}
            className="w-[24rem] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="rounded-t-lg w-full h-64"
              src={user.picture.large}
              alt=""
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {user.name.title} {user.name.first} {user.name.last}
              </h5>
              
              {renderEmail(user.email)}
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
