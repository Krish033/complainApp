import Button from "../Button";

const CreateDepartment = ({
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
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add New Department
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name and Email Fields */}
          <div className="mb-4">
            <div className="mb-3">
              <label className="block text-sm font-medium mb-2">Batch Id</label>
              <input
                type="number"
                {...register("batchId", { required: "Batch ID is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 mb-3"
              />
              {errors.batchId && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.batchId.message}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-2">
                Department Name
              </label>
              <input
                type="text"
                {...register("department", {
                  required: "Department is required",
                })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 mb-3"
              />
              {errors.department && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.department.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => {
                setAction((state) => ({ ...state, isOpen: !state.isOpen }));
              }}
              className="font-bold text-sm px-3"
            >
              <i className="fa fa-close"></i> Cancel
            </button>
            <Button type="submit">
              <i className="fa fa-plus"></i> Add Department
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDepartment;
