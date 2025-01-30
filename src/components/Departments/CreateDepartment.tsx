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
        <h2 className="text-sm font-bold mb-6 text-gray-800">
          Add New Department
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name and Email Fields */}
          <div className="mb-4">
            <div className="mb-3">
              <label className="block text-xs font-medium mb-2">
                Branch Id
              </label>
              <input
                type="number"
                {...register("branch_id", { required: "Batch ID is required" })}
                className="w-full text-xs p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 mb-3"
                placeholder="eg.., 3"
              />
              {errors.branch_id && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.branch_id.message}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-xs font-medium mb-2">
                Department Name
              </label>
              <input
                type="text"
                {...register("department_name", {
                  required: "Department is required",
                })}
                className="w-full text-xs p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 mb-3"
                placeholder="in.., IT | CSE |AI & DS"
              />
              {errors.department_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.department_name.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => {
                setAction((state) => ({ ...state, isOpen: !state.isOpen }));
              }}
              className="font-bold text-xs px-3"
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
