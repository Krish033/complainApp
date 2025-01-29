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
    setValue,
  } = useForm();

  const [action, setAction] = useState({
    isOpen: false,
    isEditing: false,
    isDeleting: false,
    editingId: null,
    deletionId: null,
    errorMessage: "",
    message: "",
    staff: null,
  });

  const resetState = () => {
    setAction((state) => ({
      isOpen: false,
      isEditing: false,
      isDeleting: false,
      editingId: null,
      deletionId: null,
      errorMessage: "",
      message: "",
      staff: null,
    }));
  };

  /**
   * create a user
   * @param dataset
   * @returns bool
   */
  const createUser = async (dataset: any) => {
    try {
      const response = await createStaff(dataset);
      resetState();
      setAction((state) => ({ ...state, message: response?.data?.message }));
      return response;
    } catch (error: any) {
      console.table({ ...error });
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
      const response = await updateStaff({ ...dataset, id: action.editingId });
      resetState();
      setAction((state) => ({ ...state, message: response?.data?.message }));
      return response;
    } catch (error: any) {
      console.table({ ...error });
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
      resetState();
      setAction((state) => ({ ...state, message: response?.data?.message }));
      return response;
    } catch (error: any) {
      console.table({ ...error });
      return false;
    }
  };

  return (
    <div className="">
      {action.message && (
        <div className="bg-green-300 my-3 px-4 py-3 rounded-md flex justify-between">
          <p className="m-0 text-xs font-medium text-green-800">
            <i className="fa fa-check-circle"></i> {action.message}
          </p>

          <button
            onClick={() => setAction((state) => ({ ...state, message: "" }))}
            className="text-xs bg-transparent outline-none border-none"
          >
            <i className="fa fa-close"></i>
          </button>
        </div>
      )}

      {action.errorMessage && (
        <div className="bg-red-300 my-3 px-4 py-3 rounded-md flex justify-between">
          <p className="m-0 text-xs font-medium text-red-800">
            <i className="fa fa-check-circle"></i> {action.errorMessage}
          </p>

          <button
            onClick={() =>
              setAction((state) => ({ ...state, errorMessage: "" }))
            }
            className="text-xs bg-transparent outline-none border-none"
          >
            <i className="fa fa-close"></i>
          </button>
        </div>
      )}

      <div className="flex justify-between w-full mt-2 mb-4">
        <h1 className="text-[1em] font-bold">Staff Management</h1>
        <button
          onClick={() => {
            setAction((state) => ({ ...state, isOpen: !state.isOpen }));
          }}
          className="rounded-[20px] px-3 py-1.5 bg-green-300 text-[.7em] text-black font-medium hover:bg-green-500"
        >
          <i className="fa fa-plus"></i> Add New Staff
        </button>
      </div>

      <div className="overflow-x-auto shadow-sm">
        <table className="min-w-full table-auto bg-white rounded-lg text-left">
          <thead>
            <tr className="bg-gray-300 text-[.76em] text-black">
              <th className="px-6 py-2 font-bold">#</th>
              <th className="px-6 py-2 font-bold">Name</th>
              <th className="px-6 py-2 font-bold">Email</th>
              <th className="px-6 py-2 font-bold">Gender</th>
              <th className="px-6 py-2 font-bold">Mobile 1</th>
              <th className="px-6 py-2 font-bold">Mobile 2</th>
              <th className="px-6 py-2 font-bold">Role</th>
              <th className="px-6 py-2 font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {staffs?.map((user) => (
              <Dataset
                key={user.id}
                user={user}
                onEdit={() => {
                  setAction((state) => ({
                    ...state,
                    isEditing: !state.isEditing,
                    editingId: user.id,
                  }));

                  setValue("userName", user.name);
                  setValue("userEmail", user.email);
                  setValue("userGender", user.gender);
                  setValue("regnum", user.regNum);
                  setValue("userMobile1", user.moblie1);
                  setValue("userMobile2", user.moblie2);
                  setValue("userRole", user.role);
                }}
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
