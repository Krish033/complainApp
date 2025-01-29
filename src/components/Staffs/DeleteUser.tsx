const DeleteUser = ({ action, setAction, onSubmit }) => {
  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
      style={{ background: "rgba(0,0,0,.5)" }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px]">
        <h2 className="text-sm font-bold mb-6 text-gray-800">Confirm Delete</h2>
        <p className="text-gray-700 mb-6 text-xs">
          Are you sure you want to delete this staff? This action cannot be
          undone.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => {
              setAction((state) => ({
                ...state,
                isDeleting: !state.isDeleting,
              }));
            }}
            className="font-bold text-xs px-3"
          >
            <i className="fa fa-close"></i> Cancel
          </button>
          <button
            onClick={onSubmit}
            className="rounded-[20px] px-4 py-2 bg-red-500 text-xs text-black font-medium hover:bg-red-800"
          >
            <i className="fa fa-trash"></i> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
