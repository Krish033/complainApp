import React from "react";

const Dataset = ({ user, onEdit, onDelete }) => {
  return (
    <tr
      key={user.id}
      className="text-sm border-b border-gray-300 hover:bg-gray-50"
    >
      <td className="px-6 py-2">{user.id}</td>
      <td className="px-6 py-2">{user.name || "N/A"}</td>
      <td className="px-6 py-2">{user.email || "N/A"}</td>
      <td className="px-6 py-2">{user.gender || "N/A"}</td>
      <td className="px-6 py-2">{user.mobile1 || "N/A"}</td>
      <td className="px-6 py-2">{user.mobile2 || "N/A"}</td>
      <td className="px-6 py-2">{user.role || "N/A"}</td>
      <td className="px-6 py-2 space-x-2">
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
