import { api } from "../api";

export const extendedSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    departments: builder.query({
      query: () => "/departments",
      providesTags: ["Departments"],
    }),

    createDepartment: builder.mutation({
      query: (dataset) => ({
        url: "/departments",
        method: "POST",
        body: dataset,
      }),

      invalidatesTags: ["Departments"],
    }),

    updateDepartment: builder.mutation({
      query: (dataset) => ({
        url: "/departments",
        method: "POST",
        body: dataset,
      }),

      invalidatesTags: ["Departments"],
    }),

    deleteDepartment: builder.mutation({
      query: (dataset) => ({
        url: "/departments/" + dataset,
        method: "DELETE",
        body: dataset,
      }),

      invalidatesTags: ["Departments"],
    }),
  }),
});

export const {
  useDepartmentsQuery,
  useCreateDepartmentMutation,
  useDeleteDepartmentMutation,
  useUpdateDepartmentMutation,
} = extendedSlice;
