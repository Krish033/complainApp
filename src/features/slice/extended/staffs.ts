import { api } from "../api";

export const extendedSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    staffs: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),

    createStaff: builder.mutation({
      query: (dataset) => ({
        url: "/users",
        method: "POST",
        body: dataset,
      }),

      invalidatesTags: ["Users"],
    }),

    // Delete staff
    deleteStaff: builder.mutation({
      query: (dataset) => ({
        url: "/users/" + dataset.id,
        method: "DELETE",
        body: dataset,
      }),

      invalidatesTags: ["User"],
    }),

    updateStaff: builder.mutation({
      query: (dataset) => ({
        url: "/users",
        method: "POST",
        body: dataset,
      }),

      providesTags: ["Users"],
    }),
  }),
});

export const {
  useStaffsQuery,
  useCreateStaffMutation,
  useDeleteStaffMutation,
  useUpdateStaffMutation,
} = extendedSlice;
