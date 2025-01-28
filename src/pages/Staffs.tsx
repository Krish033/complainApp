import {
  useCreateStaffMutation,
  useStaffsQuery,
  useDeleteStaffMutation,
  useUpdateStaffMutation,
} from "../features/slice/extended/staffs";
import Dataset from "../components/Staffs/Dataset";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CreateUser from "../components/Staffs/CreateUser";
import UpdateUser from "../components/Staffs/UpdateUser";
import DeleteUser from "../components/Staffs/DeleteUser";

const Staffs = () => {
  const { data: staffs } = useStaffsQuery();

  const [createStaff] = useCreateStaffMutation();
  const [updateStaff] = useUpdateStaffMutation();
  const [deleteStaff] = useDeleteStaffMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: updateRegister,
    handleSubmit: handleUpdate,
    formState: { errors: updateError },
  } = useForm();

  const [action, setAction] = useState({
    isOpen: false,
    isEditing: false,
    isDeleting: false,
    editingId: null,
    deletionId: null,
    errorMessage: null,
  });

  /**
   * create a user
   * @param dataset
   * @returns bool
   */
  const createUser = async (dataset: any) => {
    try {
      const response = await createStaff(dataset);
      return response;
    } catch (error: any) {
      setAction((state) => (state.errorMessage = error.message));
      return false;
    }
  };

  /**
   * Update a user
   * @param dataset
   * @returns bool
   */
  const updateUser = async (dataset: any) => {
    try {
      const response = await updateStaff(dataset);
      return response;
    } catch (error: any) {
      setAction((state) => (state.errorMessage = error.message));
      return false;
    }
  };

  /**
   * Delete a user
   * @returns bool
   */
  const deleteUser = async () => {
    try {
      const response = await deleteStaff(action.deletionId);
      return response;
    } catch (error: any) {
      setAction((state) => (state.errorMessage = error.message));
      return false;
    }
  };

  return (
    <div className="rounded-sm bg-white p-5 min-h-[83vh]">
      <div className="flex justify-between w-full mt-2 mb-4">
        <h1 className="font-bold">Staffs</h1>
        <button
          onClick={() => {
            setAction((state) => ({ ...state, isOpen: !state.isOpen }));
          }}
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
                onEdit={() =>
                  setAction((state) => ({
                    ...state,
                    isEditing: !state.isEditing,
                    editingId: user.id,
                  }))
                }
                onDelete={() =>
                  setAction((state) => ({
                    ...state,
                    isDeleting: !state.isDeleting,
                    deletionId: user.id,
                  }))
                }
              />
            ))}
          </tbody>
        </table>
      </div>

      {action.isOpen && (
        <CreateUser
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={createUser}
          register={register}
          setAction={setAction}
        />
      )}

      {action.isEditing && (
        <UpdateUser
          errors={updateError}
          handleSubmit={handleUpdate}
          onSubmit={updateUser}
          register={updateRegister}
          setAction={setAction}
        />
      )}

      {action.isDeleting && (
        <DeleteUser
          action={action}
          setAction={setAction}
          onSubmit={deleteUser}
        />
      )}
    </div>
  );
};

export default Staffs;
