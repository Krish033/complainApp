import {
  useCreateStaffMutation,
  useStaffsQuery,
  useDeleteStaffMutation,
} from "../features/slice/extended/staffs";
import Dataset from "../components/Staffs/Dataset";

const Staffs = () => {
  const { data, isLoading, isError } = useStaffsQuery();

  const collection = data?.map((user) => <Dataset user={user} />);

  return (
    <div className="rounded-sm bg-white p-5 min-h-[83vh]">
      <div className="flex justify-between w-full mt-2 mb-4">
        <h1 className="font-bold">Staffs</h1>
        <button className="rounded-[20px] px-4 py-2 bg-green-300 text-sm text-black font-medium hover:bg-green-400">
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
          <tbody>{collection}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Staffs;
