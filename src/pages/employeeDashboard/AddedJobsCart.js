import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUpdateJobStatusMutation } from "../../features/job/jobApi";

const AddedJobsCart = ({ job, idx }) => {
  const [changeStatus] = useUpdateJobStatusMutation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleChangeStatus = (id) => {
    changeStatus(id);
  };
  const handleSeeCandidateInfo = (job) => {
    setOpen(!open);
  };
  const handleSeeInfo = (id) => {
    navigate(`/candidateInfo/${id}`);
  };
  return (
    <>
      <tr className="border-b border-opacity-20">
        <td className="p-3">
          <p>{idx + 1}</p>
        </td>
        <td className="p-3">
          <p>{job.position}</p>
        </td>
        <td className="p-3">
          <p>{job.postedDate}</p>
        </td>
        <td className="p-3">
          <Link
            className="btn-secondary px-2 py-1 rounded-lg"
            onClick={() => handleSeeCandidateInfo(job)}
          >
            {job.totalApplication}
          </Link>
        </td>
        <td className="p-3">
          <p>{job.applicationStatus}</p>
        </td>
        <td>
          <button
            disabled={job.applicationStatus === "closed"}
            className="btn-primary px-2 py-1 font-bold disabled:bg-gray-500"
            onClick={() => handleChangeStatus(job._id)}
          >
            Close
          </button>
        </td>
      </tr>
      {open ? (
        <>
          {job?.applicants.map((applicant, idx) => (
            <tr key={idx}>
              <td>Email:{applicant.email}</td>
              <td>Applicant ID:{applicant.id}</td>
              <button
                className="btn-primary px-2 py-1 my-2 font-bold disabled:bg-gray-500"
                onClick={() => handleSeeInfo(applicant.id)}
              >
                See Details
              </button>
            </tr>
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default AddedJobsCart;
