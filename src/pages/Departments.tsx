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
    }));
  };

  /**
   * create Department
   * @param dataset
   * @returns bool
   */
  const createDepartment = async (dataset: any) => {
    try {
      const response = await createItem(dataset);
      resetState();
      setAction((state) => ({ ...state, message: response?.data?.message }));
      return response;
    } catch (error: any) {
      console.table({ ...error });
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
      resetState();
      setAction((state) => ({ ...state, message: response?.data?.message }));
      return response;
    } catch (error: any) {
      console.table({ ...error });
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
      resetState();
      setAction((state) => ({ ...state, message: response?.data?.message }));
      return response;
    } catch (error: any) {
      console.table({ ...error });
      return false;
    }
  };

  /**
   * Collection
   */
  const collection = departments?.map((department) => (
    <Dataset
      department={department}
      onEdit={() => {
        setAction((state) => ({
          ...state,
          isEditing: !state.isEditing,
          editingId: department.id,
        }));

        setValue("branch_id", department.branch_id);
        setValue("department_name", department.department_name);
      }}
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
        <h1 className="text-[1em] font-bold">Departments</h1>
        <button
          onClick={() => {
            setAction((state) => ({ ...state, isOpen: !state.isOpen }));
          }}
          className="rounded-[20px] px-3 py-1.5 bg-green-300 text-[.7em] text-black font-medium hover:bg-green-500"
        >
          <i className="fa fa-plus"></i> Add New Department
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto bg-white rounded-lg text-left">
          <thead>
            <tr className="bg-gray-300 text-[.76em] text-black">
              <th className="px-6 py-2 font-bold">#</th>
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
