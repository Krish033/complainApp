const Dataset = ({ department, onEdit, onDelete }) => {
  return (
    <tr
      key={department.id}
      className="text-sm border-b border-gray-300 hover:bg-gray-50"
    >
      <td className="px-6 py-2.5 font-normal font-sans text-[.85em]">
        <input type="checkbox" name="" id="" />
      </td>
      <td className="px-6 py-2.5 font-normal font-sans text-[.85em]">
        {department.id}
      </td>
      <td className="px-6 py-2.5 font-normal font-sans text-[.85em]">
        {department.branch_id || "N/A"}
      </td>
      <td className="px-6 py-2.5 font-normal font-sans text-[.85em]">
        {department.department_name || "N/A"}
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
