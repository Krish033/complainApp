import { api } from "../api";

export const extendedSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    category: builder.query({
      query: () => "/divisions",
      providesTags: ["Categories"],
    }),

    createCategory: builder.mutation({
      query: (dataset) => ({
        url: "/divisions",
        method: "POST",
        body: dataset,
      }),
      invalidatesTags: ["Categories"],
    }),

    updateCategory: builder.mutation({
      query: (dataset) => ({
        url: "/divisions/" + dataset.id,
        method: "PUT",
        body: dataset,
      }),
      invalidatesTags: ["Categories"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: "/divisions/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = extendedSlice;
