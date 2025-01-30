import {
  useBatchesQuery,
  useCreateBatchesMutation,
  useUpdateBranchMutation,
  useDeleteBatchesMutation,
} from "../features/slice/extended/batch";
import Dataset from "../components/Batches/Dataset";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CreateBatch from "../components/Batches/CreateBatch";
import UpdateBatch from "../components/Batches/UpdateBatch";
import DeleteBatch from "../components/Batches/DeleteBatch";

const Batches = () => {
  const { data: batches } = useBatchesQuery();
  const [createItem] = useCreateBatchesMutation();
  const [updateItem] = useUpdateBranchMutation();
  const [deleteItem] = useDeleteBatchesMutation();

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
   * create Batch
   * @param dataset
   * @returns bool
   */
  const createBatch = async (dataset: any) => {
    try {
      const response = await createItem(dataset);
      resetState();
      setAction((state) => ({ ...state, message: response?.data?.message }));
    } catch (error: any) {
      console.table({ ...error });
      return false;
    }
  };

  /**
   * Update a Batch
   * @param dataset
   * @returns bool
   */
  const updateBatch = async (dataset: any) => {
    try {
      const response = await updateItem({ ...dataset, id: action.editingId });
      resetState();
      setAction((state) => ({ ...state, message: response?.data?.message }));
      return response;
    } catch (error: any) {
      console.table({ ...error });
      return false;
    }
  };

  /**
   * Delete a Batch
   * @returns bool
   */
  const deleteBatch = async () => {
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
  const collection = batches?.map((batch) => (
    <Dataset
      batch={batch}
      onEdit={() => {
        setAction((state) => ({
          ...state,
          isEditing: !state.isEditing,
          editingId: batch.id,
        }));

        setValue("branch_name", batch.branch_name);
        setValue("division_id", batch.division_id);
      }}
      onDelete={() =>
        setAction((state) => ({
          ...state,
          isDeleting: !state.isDeleting,
          deletionId: batch.id,
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
        <h1 className="text-[1em] font-bold">Batches</h1>
        <button
          onClick={() => {
            setAction((state) => ({ ...state, isOpen: !state.isOpen }));
          }}
          className="rounded-[20px] px-3 py-1.5 bg-green-300 text-[.7em] text-black font-medium hover:bg-green-500"
        >
          <i className="fa fa-plus"></i> Add New Batch
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto bg-white rounded-lg text-left">
          <thead>
            <tr className="bg-gray-300 text-[.76em] text-black">
              <th className="px-6 py-2 font-bold">#</th>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Batch Name</th>
              <th className="px-6 py-3">Division</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>{collection}</tbody>
        </table>
      </div>

      {action.isOpen && (
        <CreateBatch
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={createBatch}
          register={register}
          setAction={setAction}
        />
      )}

      {action.isEditing && (
        <UpdateBatch
          errors={updateError}
          handleSubmit={handleUpdate}
          onSubmit={updateBatch}
          register={updateRegister}
          setAction={setAction}
        />
      )}

      {action.isDeleting && (
        <DeleteBatch
          action={action}
          setAction={setAction}
          onSubmit={deleteBatch}
        />
      )}
    </div>
  );
};

export default Batches;
