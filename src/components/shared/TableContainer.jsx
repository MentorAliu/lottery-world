import React, { useState } from "react";
import { Skeleton } from "./Skeleton";
import { TableRow } from "./TableRow";

export const TableContainer = ({
  title,
  time,
  propData,
  isLoading,
  isForAll,
  additionalData,
  reversed,
}) => {
  const [switchArray, setSwitchArray] = useState(false);

  if (isLoading) {
    return <Skeleton />;
  }
  console.log(switchArray);
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              {title}
            </th>
            <th scope="col" className="py-3 px-6">
              {time}{" "}
              {propData.length > 1 && (
                <button
                  className="border border-blue-500 p-2 rounded-md ml-3 hover:text-white hover:bg-blue-500"
                  onClick={() => setSwitchArray(!switchArray)}
                >
                  {switchArray ? "Ascend" : "Descend"}
                </button>
              )}
            </th>
            <th scope="col" className="py-3 px-6">
              {additionalData}
            </th>
          </tr>
        </thead>
        <tbody>
          {!switchArray
            ? propData.map(data => {
                return (
                  <TableRow
                    data={data}
                    isForAll={isForAll}
                    key={data.login.md5}
                  />
                );
              })
            : reversed.map(data => {
                return (
                  <TableRow
                    data={data}
                    isForAll={isForAll}
                    key={data.login.md5}
                  />
                );
              })}
        </tbody>
      </table>
    </div>
  );
};
