import {
  useCategoryQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "../features/slice/extended/categories";
import Dataset from "../components/Categories/Dataset";
import { useForm } from "react-hook-form";
import CreateCategory from "../components/Categories/CreateCategory";
import UpdateCategory from "../components/Categories/UpdateCategory";
import DeleteCategory from "../components/Categories/DeleteCategory";
import { useState } from "react";

const Categories = () => {
  const { data: categories } = useCategoryQuery();
  const [createItem] = useCreateCategoryMutation();
  const [updateItem] = useUpdateCategoryMutation();
  const [deleteItem] = useDeleteCategoryMutation();

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
   * create category
   * @param dataset
   * @returns bool
   */
  const createCategory = async (dataset: any) => {
    try {
      const response = await createItem(dataset);
      return response;
    } catch (error: any) {
      setAction((state) => (state.errorMessage = error.message));
      return false;
    }
  };

  /**
   * Update a Category
   * @param dataset
   * @returns bool
   */
  const updateCategory = async (dataset: any) => {
    try {
      const response = await updateItem(dataset);
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
  const deleteCategory = async () => {
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
  const collection = categories?.map((category) => (
    <Dataset
      category={category}
      onEdit={() =>
        setAction((state) => ({
          ...state,
          isEditing: !state.isEditing,
          editingId: category.id,
        }))
      }
      onDelete={() =>
        setAction((state) => ({
          ...state,
          isDeleting: !state.isDeleting,
          deletionId: category.id,
        }))
      }
    />
  ));

  return (
    <div className="rounded-sm bg-white p-5 min-h-[83vh]">
      <div className="flex justify-between w-full mt-2 mb-4">
        <h1 className="font-bold">Categories</h1>
        <button
          onClick={() => {
            setAction((state) => ({ ...state, isOpen: !state.isOpen }));
          }}
          className="rounded-[20px] px-4 py-2 bg-green-300 text-sm text-black font-medium hover:bg-green-400"
        >
          <i className="fa fa-plus"></i> Add New Category
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-200 font-medium text-xs uppercase text-black">
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Category Name</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>{collection}</tbody>
        </table>
      </div>

      {action.isOpen && (
        <CreateCategory
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={createCategory}
          register={register}
          setAction={setAction}
        />
      )}

      {action.isEditing && (
        <UpdateCategory
          errors={updateError}
          handleSubmit={handleUpdate}
          onSubmit={updateCategory}
          register={updateRegister}
          setAction={setAction}
        />
      )}

      {action.isDeleting && (
        <DeleteCategory
          action={action}
          setAction={setAction}
          onSubmit={deleteCategory}
        />
      )}
    </div>
  );
};

export default Categories;
