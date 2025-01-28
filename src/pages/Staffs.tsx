import {
  useCreateStaffMutation,
  useStaffsQuery,
  useDeleteStaffMutation,
  useUpdateStaffMutation,
} from "../features/slice/extended/staffs";
import Dataset from "../components/Staffs/Dataset";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Staffs = () => {
  const { data: staffs } = useStaffsQuery();
  const [createStaff] = useCreateStaffMutation();
  const [updateStaff] = useUpdateStaffMutation();
  const [deleteStaff] = useDeleteStaffMutation();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editStaffId, setEditStaffId] = useState<string | null>(null);
  const [deleteStaffId, setDeleteStaffId] = useState<string | null>(null);

  const openModal = (staff: any = null) => {
    if (staff) {
      setEditMode(true);
      setEditStaffId(staff.id);
      setValue("name", staff.name);
      setValue("email", staff.email);
      setValue("gender", staff.gender);
      setValue("mobile1", staff.mobile1);
      setValue("mobile2", staff.mobile2);
      setValue("role", staff.role);
    } else {
      reset();
      setEditMode(false);
      setEditStaffId(null);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    reset();
    setEditMode(false);
    setEditStaffId(null);
  };

  const openDeleteModal = (id: string) => {
    setDeleteStaffId(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteStaffId(null);
    setIsDeleteModalOpen(false);
  };

  const onSubmit = async (dataset: any) => {
    if (editMode && editStaffId) {
      await updateStaff({ id: editStaffId, ...dataset });
    } else {
      await createStaff(dataset);
    }
    closeModal();
  };

  const onDelete = async () => {
    if (deleteStaffId) {
      await deleteStaff(deleteStaffId);
    }
    closeDeleteModal();
  };

  return (
    <div className="rounded-sm bg-white p-5 min-h-[83vh]">
      <div className="flex justify-between w-full mt-2 mb-4">
        <h1 className="font-bold">Staffs</h1>
        <button
          onClick={() => openModal()}
          className="rounded-[20px] px-4 py-2 bg-green-300 text-sm text-black font-medium hover:bg-green-400"
        >
          <i className="fa fa-plus"></i> Add New Staff
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-200 font-medium text-xs uppercase text-black">
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">Mobile 1</th>
              <th className="px-6 py-3">Mobile 2</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {staffs?.map((user) => (
              <Dataset
                key={user.id}
                user={user}
                onEdit={() => openModal(user)}
                onDelete={() => openDeleteModal(user.id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-[600px]">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {editMode ? "Edit Staff" : "Add New Staff"}
            </h2>
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
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
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
                  <label className="block text-sm font-medium mb-2">
                    Mobile 1
                  </label>
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
                  <label className="block text-sm font-medium mb-2">
                    Mobile 2
                  </label>
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
                  <p className="text-red-500 text-xs mt-1">
                    {errors.role.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={closeModal}
                  className="py-2 px-4 rounded-lg bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                >
                  {editMode ? "Update Staff" : "Add Staff"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px]">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Confirm Delete
            </h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete this staff? This action cannot be
              undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={closeDeleteModal}
                className="py-2 px-4 rounded-lg bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={onDelete}
                className="py-2 px-4 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staffs;
