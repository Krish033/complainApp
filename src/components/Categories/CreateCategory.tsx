import Button from "../Button";

const CreateCategory = ({
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
          Add New Category
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name and Email Fields */}
          <div className="mb-4">
            <div className="mb-3">
              <label className="block text-xs font-medium mb-2">
                Category Name
              </label>
              <input
                type="text"
                {...register("division_name", {
                  required: "Category Name is required",
                })}
                className="w-full p-3 text-xs border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 mb-3 font-medium"
                placeholder="eg.., Human"
              />
              {errors.division_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.division_name.message}
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
              <i className="fa fa-plus"></i> Add Category
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;
