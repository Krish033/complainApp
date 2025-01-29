import React from "react";

const Dataset = ({ user, onEdit, onDelete }) => {
  return (
    <tr
      key={user.id}
      className="text-sm border-b border-gray-300 hover:bg-gray-50"
    >
      <td className="px-6 py-2.5 font-normal font-sans text-[.85em]">
        <input type="checkbox" name="" id="" />
      </td>
      <td className="px-6 py-2.5 font-normal font-sans text-[.85em]">
        {user.name || "N/A"}
      </td>
      <td className="px-6 py-2.5 font-normal font-sans text-[.85em]">
        {user.email || "N/A"}
      </td>
      <td className="px-6 py-2.5 font-normal font-sans text-[.85em]">
        {user.gender || "N/A"}
      </td>
      <td className="px-6 py-2.5 font-normal font-sans text-[.85em]">
        {user.mobile1 || "N/A"}
      </td>
      <td className="px-6 py-2.5 font-normal font-sans text-[.85em]">
        {user.mobile2 || "N/A"}
      </td>
      <td className="px-6 py-2.5 font-normal font-sans text-[.85em]">
        {user.role || "N/A"}
      </td>
      <td className="px-6 py-2.5 font-normal font-sans text-[.85em] space-x-2">
        <button onClick={onEdit}>
          <i className="fa fa-edit"></i>
        </button>
        <button onClick={onDelete} className="text-red-600">
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default Dataset;
