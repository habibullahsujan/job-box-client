import React from "react";
import { useSelector } from "react-redux";
import { useGetEmployerAddedJobsQuery } from "../../features/job/jobApi";
import AddedJobsCart from "./AddedJobsCart";

const AddedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { data } = useGetEmployerAddedJobsQuery(email);

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          Job Information
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-700 text-white">
              <tr className="">
                <th className="p-3">Serial No</th>
                <th className="p-3">Job Title</th>
                <th className="p-3">Added Date</th>
                <th className="p-3">Applicants</th>
                <th className="p-3">Application Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((job, idx) => (
                <AddedJobsCart job={job} idx={idx}  key={idx}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddedJobs;
