import { api } from "../api";

export const extendedSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    batches: builder.query({
      query: () => "/branches",
    }),

    createBatches: builder.mutation({
      query: (dataset) => ({
        url: "/branches",
        method: "POST",
        body: dataset,
      }),
    }),

    updateBranch: builder.mutation({
      query: ({ id, dataset }) => ({
        url: `/branches/${id}`,
        method: "PUT",
        body: dataset,
      }),
    }),

    deleteBatches: builder.mutation({
      query: (dataset) => ({
        url: "/branches/" + dataset.id,
        method: "DELETE",
        body: dataset,
      }),
    }),
  }),
});

export const {
  useBatchesQuery,
  useCreateBatchesMutation,
  useDeleteBatchesMutation,
  useUpdateBranchMutation,
} = extendedSlice;
