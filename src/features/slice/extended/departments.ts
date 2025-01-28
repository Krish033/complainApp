import { api } from "../api";

export const extendedSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    departments: builder.query({
      query: () => "/departments",
    }),

    createDepartment: builder.mutation({
      query: (dataset) => ({
        url: "/departments",
        method: "POST",
        body: dataset,
      }),
    }),

    updateDepartment: builder.mutation({
      query: (dataset) => ({
        url: "/departments",
        method: "POST",
        body: dataset,
      }),
    }),

    deleteDepartment: builder.mutation({
      query: (dataset) => ({
        url: "/departments/" + dataset.id,
        method: "DELETE",
        body: dataset,
      }),
    }),
  }),
});

export const {
  useDepartmentsQuery,
  useCreateDepartmentMutation,
  useDeleteDepartmentMutation,
  useUpdateDepartmentMutation,
} = extendedSlice;
