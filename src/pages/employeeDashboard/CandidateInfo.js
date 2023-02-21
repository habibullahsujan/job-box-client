import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useCandidatesQuery, useMessageMutation } from "../../features/job/jobApi";

const CandidateInfo = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data } = useCandidatesQuery(id);
  const {user:{email,role, _id, firstName, lastName}}=useSelector(state=>state.auth)
  const [message, setMessage] = useState("");
  const [sendMessage]=useMessageMutation();
  console.log(data)
  const handleSendMessage = () => {
    const messageData={
      senderId:_id,
      receiverId:data?._id,
      senderRole:role,
      receiverRole:data?.role,
      messages:[{employer:message}],
      senderName:firstName + ' ' + lastName,
      receiverName:data?.firstName + ' ' + data?.lastName,
      senderEmail:email,
      receiverEmail:data?.email,
      time:new Date(),
    }
    console.log(data?.senderEmail, data?.receiverEmail)
    // sendMessage(messageData)
  };
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          Candidate Info
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <thead className="border">
              <tr className="dark:bg-gray-700">
                <th className="p-3">Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Email</th>
                <th className="p-3">Gender</th>
                <th className="p-3">Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="border-b py-2">
              <tr>
                <td>
                  {data?.firstName} {data?.lastName}
                </td>
                <td>01999999999</td>
                <td>{data?.email}</td>
                <td>{data?.gender}</td>
                <td>
                  {data?.address} {data?.city} {data?.country}
                </td>
                <td>
                  <label htmlFor="my-modal" className="btn">
                    Send Message
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <input
        type="checkbox"
        id="my-modal"
        className="modal-toggle"
        
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Send message to Mr. {data?.firstName} {data?.lastName}
          </h3>
          <p className="py-4">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
              onBlur={(e) => setMessage(e.target.value)}
            />
          </p>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn"
              onClick={() => handleSendMessage()}
            >
              Send
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateInfo;
