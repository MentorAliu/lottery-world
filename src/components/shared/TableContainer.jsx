import React from "react";
import { TableRow } from "./TableRow";

export const TableContainer = ({ title, time, propData, isLoading,isForAll }) => {


    if (isLoading) {
        return (
          <div>
            <h1>Loading...</h1>
          </div>
        );
      }
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              {title}
            </th>
            <th scope="col" className="py-3 px-6">
              {time}
            </th>
          </tr>
        </thead>
        <tbody>
        {propData.map(data => {
          console.log(data)
          return <TableRow data={data} isForAll={isForAll} key={data.login.md5}/>;
        })}
        </tbody>
      </table>
    </div>
  );
};
