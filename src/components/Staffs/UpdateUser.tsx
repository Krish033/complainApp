import { useEffect } from "react";
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
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
      style={{ background: "rgba(0,0,0,.5)" }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[600px]">
        <h2 className="text-sm font-bold mb-6 text-gray-800">
          <i className="fa fa-edit"></i> Update Staff
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name and Email Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium mb-2">Name</label>
              <input
                type="text"
                {...register("userName", { required: "Name is required" })}
                placeholder="eg.., Bernard Hackwell"
                className="w-full p-3 border text-xs border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              />
              {errors.userName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.userName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium mb-2">Email</label>
              <input
                type="email"
                {...register("userEmail", { required: "Email is required" })}
                placeholder="eg.., bernard@hackwell.com"
                className="w-full p-3 border text-xs border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              />
              {errors.userEmail && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.userEmail.message}
                </p>
              )}
            </div>
          </div>

          {/* Gender Field */}
          <div className="mb-4">
            <label className="block text-xs font-medium mb-2">Gender</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="M"
                  {...register("userGender", {
                    required: "Please select a gender",
                  })}
                  defaultChecked={"" === "M"}
                  className="form-radio text-blue-500 focus:ring-blue-500"
                />
                <span className="text-gray-700 text-xs">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="F"
                  {...register("userGender", {
                    required: "Please select a gender",
                  })}
                  defaultChecked={"" === "F"}
                  className="form-radio text-blue-500 focus:ring-blue-500"
                />
                <span className="text-gray-700 text-xs">Female</span>
              </label>
            </div>
            {errors.userGender && (
              <p className="text-red-500 text-xs mt-1">
                {errors.userGender.message}
              </p>
            )}
          </div>

          {/* Register Number & Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium mb-2">
                Register Number
              </label>
              <input
                type="text"
                {...register("regnum", {
                  required: "Register Number is required",
                })}
                placeholder="eg.., RTC12345"
                className="w-full p-3 border text-xs border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              />
              {errors.regnum && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.regnum.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium mb-2">Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="eg.., ********"
                className="w-full p-3 border text-xs border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          {/* Mobile Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium mb-2">Mobile 1</label>
              <input
                type="text"
                {...register("userMobile1", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message:
                      "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9",
                  },
                })}
                placeholder="eg..., +91 6374 897 XXX"
                className="w-full p-3 border text-xs border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-2">Mobile 2</label>
              <input
                type="text"
                {...register("userMobile2")}
                placeholder="eg..., +91 6374 897 XXX"
                className="w-full p-3 border text-xs border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Role Field */}
          <div className="mb-4">
            <label className="block text-xs font-medium mb-2">Role</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Faculty"
                  {...register("userRole", { required: "Role is required" })}
                  defaultChecked={"" === "Faculty"}
                  className="form-radio text-blue-500 focus:ring-blue-500"
                />
                <span className="text-gray-700 text-xs">Staff</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Admin"
                  {...register("userRole", { required: "Role is required" })}
                  defaultChecked={"" === "Admin"}
                  className="form-radio text-blue-500 focus:ring-blue-500"
                />
                <span className="text-gray-700 text-xs">Super Admin</span>
              </label>
            </div>
            {errors.userRole && (
              <p className="text-red-500 text-xs mt-1">
                {errors.userRole.message}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() =>
                setAction((state) => ({
                  ...state,
                  staff: null,
                  isEditing: !state.isEditing,
                }))
              }
              className="font-bold text-xs px-3"
            >
              <i className="fa fa-close"></i> Cancel
            </button>
            <Button type="submit">
              <i className="fa fa-plus"></i> Save Staff
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
