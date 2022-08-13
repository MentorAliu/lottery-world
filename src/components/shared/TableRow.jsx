import React from "react";

export const TableRow = ({ data,isForAll }) => {
  return (
   
      <tr
        className={`${
          data.isWinner && isForAll ? "bg-orange-100" : "bg-white"
        } border-b dark:bg-gray-900 dark:border-gray-700 w-full`}
      >
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {data.name.title} {data.name.first} {data.name.last}
        </th>

        <td className="py-4 px-6">
          {data.time}
        </td>
      </tr>
  
  );
};
