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
   * create category
   * @param dataset
   * @returns bool
   */
  const createCategory = async (dataset: any) => {
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
   * Update a Category
   * @param dataset
   * @returns bool
   */
  const updateCategory = async (dataset: any) => {
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
   * Delete a user
   * @returns bool
   */
  const deleteCategory = async () => {
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
  const collection = categories?.map((category) => (
    <Dataset
      category={category}
      onEdit={() => {
        setAction((state) => ({
          ...state,
          isEditing: !state.isEditing,
          editingId: category.id,
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
          deletionId: category.id,
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
        <h1 className="text-[1em] font-bold">Categories/Organizations</h1>
        <button
          onClick={() => {
            setAction((state) => ({ ...state, isOpen: !state.isOpen }));
          }}
          className="rounded-[20px] px-3 py-1.5 bg-green-300 text-[.7em] text-black font-medium hover:bg-green-500"
        >
          <i className="fa fa-plus"></i> Add New Category
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-300 text-[.76em] text-black">
              <th className="px-6 py-2 font-bold">ID</th>
              <th className="px-6 py-2 font-bold">Category Name</th>
              <th className="px-6 py-2 font-bold">Action</th>
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
