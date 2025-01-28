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
   * create Batch
   * @param dataset
   * @returns bool
   */
  const createBatch = async (dataset: any) => {
    try {
      const response = await createItem(dataset);
      return response;
    } catch (error: any) {
      setAction((state) => (state.errorMessage = error.message));
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
      const response = await updateItem(dataset);
      return response;
    } catch (error: any) {
      setAction((state) => (state.errorMessage = error.message));
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
      return response;
    } catch (error: any) {
      setAction((state) => (state.errorMessage = error.message));
      return false;
    }
  };

  /**
   * Collection
   */
  const collection = batches?.map((batch) => (
    <Dataset
      batch={batch}
      onEdit={() =>
        setAction((state) => ({
          ...state,
          isEditing: !state.isEditing,
          editingId: batch.id,
        }))
      }
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
    <div className="rounded-sm bg-white p-5 min-h-[83vh]">
      <div className="flex justify-between w-full mt-2 mb-4">
        <h1 className="font-bold">Batches</h1>
        <button
          onClick={() => {
            setAction((state) => ({ ...state, isOpen: !state.isOpen }));
          }}
          className="rounded-[20px] px-4 py-2 bg-green-300 text-sm text-black font-medium hover:bg-green-400"
        >
          <i className="fa fa-plus"></i> Add New Batch
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-200 font-medium text-xs uppercase text-black">
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
