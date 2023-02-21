import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetMessageQuery } from '../../features/job/jobApi';

const MessagesEmployer = () => {
    const {_id, role} = useSelector(
        (state) => state.auth.user
      );
      const { data } = useGetMessageQuery({ _id, role });

      return (
        <div>
          <div className="container mx-auto shadow-lg rounded-lg">
            <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
              <div className="font-semibold text-2xl">GoingChat</div>
              <div className="w-1/2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="search IRL"
                  className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
                />
              </div>
              <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
                RA
              </div>
            </div>
            <div className="flex flex-row justify-between bg-white">
              <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
                <div className="border-b-2 py-4 px-2">
                  <input
                    type="text"
                    placeholder="search chatting"
                    className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                  />
                </div>
                {data?.map((message, idx) => (
                  <Link key={idx}
                    to={`/message/employer/${message.senderId}`}
                    state={{id:message._id}}
                    className="flex flex-row py-4 px-2 items-center border-b-2 cursor-pointer hover:bg-blue-200"
                  >
                    <div className="w-1/4">
                      <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-12 w-12 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="w-full">
                      <div className="text-lg font-semibold">
                        {role === "candidate"
                          ? message.senderName
                          : message.receiverName}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
};

export default MessagesEmployer;