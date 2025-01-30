import { api } from "../api";

export const extendedSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    batches: builder.query({
      query: () => "/branches",
      providesTags: ["Batches"],
    }),

    createBatches: builder.mutation({
      query: (dataset) => ({
        url: "/branches",
        method: "POST",
        body: dataset,
      }),

      invalidatesTags: ["Batches"],
    }),

    updateBranch: builder.mutation({
      query: ({ id, dataset }) => ({
        url: `/branches/${id}`,
        method: "PUT",
        body: dataset,
      }),
      invalidatesTags: ["Batches"],
    }),

    deleteBatches: builder.mutation({
      query: (id) => ({
        url: "/branches/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Batches"],
    }),
  }),
});

export const {
  useBatchesQuery,
  useCreateBatchesMutation,
  useDeleteBatchesMutation,
  useUpdateBranchMutation,
} = extendedSlice;
