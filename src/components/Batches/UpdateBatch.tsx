import Button from "../Button";

const UpdateBatch = ({
  errors,
  handleSubmit,
  onSubmit,
  register,
  setAction,
}) => {
  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
      style={{ background: "rgba(0,0,0,.5)" }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[600px]">
        <h2 className="text-sm font-bold mb-6 text-gray-800">
          Update New Batch
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name and Email Fields */}
          <div className="mb-4">
            <div className="mb-3">
              <label className="block text-xs font-medium mb-2">
                Batch Name
              </label>
              <input
                type="text"
                {...register("branch_name", {
                  required: "Branch Name is required",
                })}
                className="w-full text-xs p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 mb-3"
                placeholder="eg.., Some Kind of Batch"
              />
              {errors.branch_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.branch_name.message}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-xs font-medium mb-2">
                Batch Division
              </label>
              <input
                type="number"
                {...register("division_id", {
                  required: "Division is required",
                })}
                className="w-full p-3 text-xs border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 mb-3"
                placeholder="eg.., BCA"
              />
              {errors.division_id && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.division_id.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => {
                setAction((state) => ({
                  ...state,
                  isEditing: !state.isEditing,
                }));
              }}
              className="font-bold text-xs px-3"
            >
              <i className="fa fa-close"></i> Cancel
            </button>
            <Button type="submit">
              <i className="fa fa-plus"></i> Update Batch
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBatch;
