import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import {
  useGetSingleMsgQuery,
  useReplyMsgCandidateMutation,
} from "../features/job/jobApi";

const MessageCart = () => {
  const location = useLocation();

  const { data } = useGetSingleMsgQuery(location?.state?.id, {
    pollingInterval: 500,
  });
  const [replyMessage] = useReplyMsgCandidateMutation();
  const [reply, setReply] = useState("");

  const handleReplyMessage = () => {
    const messageData = {
      senderId: data?.receiverId,
      message: reply,
      id: data?._id,
    };
    replyMessage(messageData);
  };
 
  return (
    <>
      <div className="flex flex-row justify-between bg-white">
        <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
          <div className="border-b-2 py-4 px-2">
            <input
              type="text"
              placeholder="search chatting"
              className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
            />
          </div>
        </div>
        <div className="w-full px-5 flex flex-col justify-between">
          <div className="flex flex-col mt-5">
            {data?.messages?.map((msg, idx) => (
              <div key={idx}
                className={`flex ${
                  Object.keys(msg)[0] === "candidate"
                    ? "justify-end"
                    : "justify-start"
                } mb-4`}
              >
                <div
                  className={`mr-2 py-3 px-4 ${
                    Object.keys(msg)[0] === "candidate"
                      ? "bg-blue-400"
                      : "bg-gray-400"
                  } rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white`}
                >
                  {Object.values(msg)[0]}
                </div>
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="py-5">
            <input
              onBlur={(e) => setReply(e.target.value)}
              className="w-[88%] bg-gray-300 py-5 px-3 rounded-xl mr-2"
              type="text"
              placeholder="type your message here..."
            />
            <button
              onClick={() => handleReplyMessage()}
              className="w-[10%] btn-info px-3 py-5 rounded-xl"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageCart;
