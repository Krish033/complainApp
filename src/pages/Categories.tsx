import { useCategoryQuery } from "../features/slice/extended/categories";
import Dataset from "../components/Categories/Dataset";

const Categories = () => {
  const { data, isLoading, isError } = useCategoryQuery();

  const collection = data?.map((division) => <Dataset division={division} />);

  return (
    <div className="rounded-sm bg-white p-5 min-h-[83vh]">
      <div className="flex justify-between w-full mt-2 mb-4">
        <h1 className="font-bold">Categories</h1>
        <button className="rounded-[20px] px-4 py-2 bg-green-300 text-sm text-black font-medium hover:bg-green-400">
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
    </div>
  );
};

export default Categories;
