import React from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "../components/shared";

export const Stats = () => {
  const { users, isLoading } = useSelector(state => state.users);
  const getNations = users.map(user => user.nat);
  const countNations = getNations.reduce(
    (acc, value) => ({
      ...acc,
      [value]: (acc[value] || 0) + 1,
    }),
    {}
  );
  const nations = Object.entries(countNations);
  if (isLoading) {
    return (
      <Skeleton />
    );
  }

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Nations
            </th>
            <th scope="col" className="py-3 px-6">
              Times Played
            </th>
          </tr>
        </thead>
        {nations.map((nation, index) => {
          //since its a limited number of nations provided by the API, index is used as a key for now
          return (
           
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 w-full" key={index}>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {nation[0]}
                </th>

                <td className="py-4 px-6">{nation[1]}</td>
              </tr>
          
          );
        })}
      </table>
    </div>
  );
};
