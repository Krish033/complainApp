import { api } from "../api";

export const extendedSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    category: builder.query({
      query: () => "/divisions",
    }),

    createCategory: builder.mutation({
      query: (dataset) => ({
        url: "/divisions",
        method: "POST",
        body: dataset,
      }),
    }),

    deleteCategory: builder.mutation({
      query: (dataset) => ({
        url: "/divisions/" + dataset.id,
        method: "DELETE",
        body: dataset,
      }),
    }),
  }),
});

export const {
  useCategoryQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
} = extendedSlice;
