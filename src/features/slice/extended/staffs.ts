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
      query: (id) => ({
        url: "/users/" + id,
        method: "DELETE",
      }),

      invalidatesTags: ["Users"],
    }),

    updateStaff: builder.mutation({
      query: (dataset) => ({
        url: "/users/" + dataset.id,
        method: "PUT",
        body: dataset,
      }),

      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useStaffsQuery,
  useCreateStaffMutation,
  useDeleteStaffMutation,
  useUpdateStaffMutation,
} = extendedSlice;
