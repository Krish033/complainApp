import Button from "../Button";

const CreateUser = ({
  errors,
  handleSubmit,
  onSubmit,
  register,
  setAction,
}) => {
  return (
    <div
      className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50"
      style={{ background: "rgba(0,0,0,.5)" }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[600px]">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Staff</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name and Email Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Gender Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Gender</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="male"
                  {...register("gender", {
                    required: "Please select a gender",
                  })}
                  className="form-radio text-blue-500 focus:ring-blue-500"
                />
                <span className="text-gray-700">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="female"
                  {...register("gender", {
                    required: "Please select a gender",
                  })}
                  className="form-radio text-blue-500 focus:ring-blue-500"
                />
                <span className="text-gray-700">Female</span>
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-xs mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* Mobile Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Mobile 1</label>
              <input
                type="text"
                {...register("mobile1", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message:
                      "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9",
                  },
                })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              />
              {errors.mobile1 && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobile1.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mobile 2</label>
              <input
                type="text"
                {...register("mobile2", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message:
                      "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9",
                  },
                })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              />
              {errors.mobile2 && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobile2.message}
                </p>
              )}
            </div>
          </div>

          {/* Role Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Role</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="staff"
                  {...register("role", { required: "Role is required" })}
                  className="form-radio text-blue-500 focus:ring-blue-500"
                />
                <span className="text-gray-700">Staff</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="super_admin"
                  {...register("role", { required: "Role is required" })}
                  className="form-radio text-blue-500 focus:ring-blue-500"
                />
                <span className="text-gray-700">Super Admin</span>
              </label>
            </div>
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
            )}
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
              <i className="fa fa-plus"></i> Add Staff
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
