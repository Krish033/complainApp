const Dataset = ({ category, onEdit, onDelete }) => {
  return (
    <tr
      key={category.id}
      className="text-sm border-b border-gray-300 hover:bg-gray-50"
    >
      <td className="px-6 py-2.5 font-normal font-sans text-[.85em]">
        {category.id}
      </td>
      <td className="px-6 py-2.5 font-normal font-sans text-[.85em]">
        {category.division_name || "N/A"}
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
