import React from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../../components/reusable/JobCard";
import Loading from "../../components/reusable/Loading";
import { sortFirstDate } from "../../features/Candidate/sortingSlice";

import { useGetAppliedJobsQuery } from "../../features/job/jobApi";

const AppliedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { sorting } = useSelector((state) => state.sort);
  console.log(sorting);
  const { data, isLoading } = useGetAppliedJobsQuery(email);
  const dispatch = useDispatch();
  let content;

  if (isLoading) {
    return <Loading />;
  }
  if (sorting.length === 0) {
    content = data?.data.map((job, idx) => <JobCard jobData={job} key={idx} />);
  } else {
    content = sorting?.map((job, idx) => <JobCard jobData={job} key={idx} />);
  }

  function sortByFirstUpload(a, b) {
    let dateA = new Date(a.appliedTime).getTime();
    let dateB = new Date(b.appliedTime).getTime();
    return dateA > dateB ? 1 : -1;
  }
  function sortByLastUpload(a, b) {
    let dateA = new Date(a.appliedTime).getTime();
    let dateB = new Date(b.appliedTime).getTime();
    return dateA > dateB ? -1 : 1;
  }

  const handleSorting = (e) => {
    if (e === "sortByFirstUpload") {
      dispatch(
        sortFirstDate(
          data?.data
            .slice()
            .sort(sortByFirstUpload)
            .map((job) => job)
        )
      );
    }
    if (e === "sortByLastUpload") {
      dispatch(
        sortFirstDate(
          data?.data
            .slice()
            .sort(sortByLastUpload)
            .map((job) => job)
        )
      );
    }
  };

  return (
    <div>
      <h1 className="text-xl py-5">Applied jobs</h1>
      <div className="flex justify-end mr-8 my-2">
        <button className="btn-info px-2 py-3 rounded-lg mx-2" onClick={() => handleSorting("sortByLastUpload")}>
          Sort By Last Applied
        </button>
        <button className="btn-info px-2 py-3 rounded-lg mx-2" onClick={() => handleSorting("sortByFirstUpload")}>
          Sort By First Applied
        </button>
        <button className="btn-info px-2 py-3 rounded-lg mx-2">Sort By Approval Status</button>
      </div>
      <div className="grid grid-cols-2 gap-5 pb-5 px-5">{content}</div>
    </div>
  );
};

export default AppliedJobs;
