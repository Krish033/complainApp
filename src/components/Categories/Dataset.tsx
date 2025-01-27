import React from "react";

const Dataset = ({ division }) => {
  return (
    <tr
      key={division.id}
      className="text-sm border-b border-gray-300 hover:bg-gray-50"
    >
      <td className="px-6 py-4">{division.id}</td>
      <td className="px-6 py-4">{division.division_name || "N/A"}</td>
      <td className="px-6 py-4 space-x-2">
        <button>
          <i className="fa fa-edit"></i>
        </button>
        <button className="text-red-600">
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default Dataset;
