import {
  useDepartmentsQuery,
  useCreateDepartmentMutation,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} from "../features/slice/extended/departments";

import Dataset from "../components/Departments/Dataset";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DeleteDepartment from "../components/Departments/DeleteDepartment";
import UpdateDepartment from "../components/Departments/UpdateDepartment";
import CreateDepartment from "../components/Departments/CreateDepartment";

const Departments = () => {
  const { data: departments } = useDepartmentsQuery();
  const [createItem] = useCreateDepartmentMutation();
  const [updateItem] = useUpdateDepartmentMutation();
  const [deleteItem] = useDeleteDepartmentMutation();

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
   * create Department
   * @param dataset
   * @returns bool
   */
  const createDepartment = async (dataset: any) => {
    try {
      const response = await createItem(dataset);
      return response;
    } catch (error: any) {
      setAction((state) => (state.errorMessage = error.message));
      return false;
    }
  };

  /**
   * Update a Department
   * @param dataset
   * @returns bool
   */
  const updateDepartment = async (dataset: any) => {
    try {
      const response = await updateItem(dataset);
      return response;
    } catch (error: any) {
      setAction((state) => (state.errorMessage = error.message));
      return false;
    }
  };

  /**
   * Delete a Department
   * @returns bool
   */
  const deleteDepartment = async () => {
    try {
      const response = await deleteItem(action.deletionId);
      return response;
    } catch (error: any) {
      setAction((state) => (state.errorMessage = error.message));
      return false;
    }
  };

  /**
   * Collection
   */
  const collection = departments?.map((department) => (
    <Dataset
      department={department}
      onEdit={() =>
        setAction((state) => ({
          ...state,
          isEditing: !state.isEditing,
          editingId: department.id,
        }))
      }
      onDelete={() =>
        setAction((state) => ({
          ...state,
          isDeleting: !state.isDeleting,
          deletionId: department.id,
        }))
      }
    />
  ));

  return (
    <div className="rounded-sm bg-white p-5 min-h-[83vh]">
      <div className="flex justify-between w-full mt-2 mb-4">
        <h1 className="font-bold">Departments</h1>
        <button
          onClick={() => {
            setAction((state) => ({ ...state, isOpen: !state.isOpen }));
          }}
          className="rounded-[20px] px-4 py-2 bg-green-300 text-sm text-black font-medium hover:bg-green-400"
        >
          <i className="fa fa-plus"></i> Add New Department
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-200 font-medium text-xs uppercase text-black">
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Branch ID</th>
              <th className="px-6 py-3">Department Name</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>{collection}</tbody>
        </table>
      </div>

      {action.isOpen && (
        <CreateDepartment
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={createDepartment}
          register={register}
          setAction={setAction}
        />
      )}

      {action.isEditing && (
        <UpdateDepartment
          errors={updateError}
          handleSubmit={handleUpdate}
          onSubmit={updateDepartment}
          register={updateRegister}
          setAction={setAction}
        />
      )}

      {action.isDeleting && (
        <DeleteDepartment
          action={action}
          setAction={setAction}
          onSubmit={deleteDepartment}
        />
      )}
    </div>
  );
};

export default Departments;
