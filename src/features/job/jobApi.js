import { apiSlice } from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        url: "/job",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Jobs", "AddedJob"],
    }),
    applyJob: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "PATCH",
        body: data,
      }),
    }),
    getJob: builder.query({
      query: () => ({
        url: "/jobs",
      }),
      providesTags: ["Jobs"],
    }),
    getAppliedJobs: builder.query({
      query: (email) => ({
        url: `/applied-jobs/${email}`,
      }),
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
      providesTags: ["Job"],
    }),
    addQuestions: builder.mutation({
      query: (data) => ({
        url: "/question",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Job"],
    }),
    reply: builder.mutation({
      query: (data) => ({
        url: "/reply",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Job"],
    }),
    getEmployerAddedJobs: builder.query({
      query: (email) => ({
        url: `/added-jobs/${email}`,
      }),
      providesTags: ["AddedJob"],
    }),
    candidates: builder.query({
      query: (id) => ({
        url: `/candidate/${id}`,
      }),
    }),
    updateJobStatus: builder.mutation({
      query: (id) => ({
        url: `/job/updateStatus/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["AddedJob"],
    }),
    message:builder.mutation({
      query:(data)=>({
        url:'/messages',
        method:'POST',
        body:data
      }),
      invalidatesTags:['Msgs']
    }),
    getMessage:builder.query({
      query:({_id,role})=>({
        url:`/messages/${_id}/${role}`
      }),
      providesTags:['Msgs']
    }),
    replyMsgCandidate:builder.mutation({
    query:(data)=>({
      url:'/reply/candidate',
      method:'PUT',
      body:data
    }),
    invalidatesTags: ["Msg"],
    }),
    replyMsgEmployer:builder.mutation({
      query:(data)=>({
        url:'/reply/employer',
        method:'PUT',
        body:data,
      }),
      invalidatesTags: ["Msg"],
    }),
    getSingleMsg:builder.query({
      query:(id)=>({
        url:`/message/${id}`
      }),
      providesTags: ["Msg"],
    }),
    applyAJob:builder.mutation({
      query:(data)=>({
        url:'/apply-job',
        method:'POST',
        body:data
      })
    })
  }),

});

export const {
  usePostJobMutation,
  useGetJobQuery,
  useGetJobByIdQuery,
  useApplyJobMutation,
  useGetAppliedJobsQuery,
  useAddQuestionsMutation,
  useReplyMutation,
  useGetEmployerAddedJobsQuery,
  useUpdateJobStatusMutation,
  useCandidatesQuery,
  useMessageMutation,
  useGetMessageQuery,
  useReplyMsgCandidateMutation,
  useReplyMsgEmployerMutation,
  useGetSingleMsgQuery,
  useApplyAJobMutation,

} = jobApi;
